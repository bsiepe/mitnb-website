# Loading and preprocessing google sheets member data ---------------------
library(googlesheets4)
library(googledrive)
library(tidyverse)
library(here)
library(glue)
library(readr)
library(jsonlite)

set.seed(35032)
data <- read_sheet("https://docs.google.com/spreadsheets/d/1n1goeRG5-nMWkBtpLXpGC3zuBleFo6a4Qf3T7SYj_Co/")

data_cleaned <- data |>
  select(!c("Zeitstempel", "E-Mail-Adresse")) |>
  rename("first_name" = "What is your first name?",
         "current_position" = "What is your current position?",
         "institution" = "At which university/institution do you work?",
         "interests" = "What are your research interests relevant to MITNB? Please answer in 1-3 sentences.",
         "photo" = "You can upload a photo of yourself here. If you don't want your photo to be displayed, simply upload a coloured square.",
         "socials" = "Any website/social information to share?",
         "email" = "What is your email address?",
         "last_name" = "What is your last name?")

# Randomize order of members
data_cleaned <- data_cleaned[sample(nrow(data_cleaned)), ]

# Download all photos - ensure directory exists
photo_dir <- here("people/files/images/")
if (!dir.exists(photo_dir)) {
  dir.create(photo_dir, recursive = TRUE)
}

for (i in 1:nrow(data_cleaned)) {
  drive_download(file = data_cleaned$photo[i],
                 path = file.path(photo_dir, paste0(data_cleaned$last_name[i], ".jpg")),
                 overwrite = TRUE)
}

# Path to the folder where images are stored
image_base_path <- "files/images/"

# Prepare data for JSON export (for the modal system)
members_data <- data_cleaned |>
  mutate(
    image_url = paste0(image_base_path, last_name, ".jpg"),
    id = paste0(first_name, "_", last_name),
    # Clean up empty fields
    socials = ifelse(is.na(socials) | socials == "", "", socials),
    email = ifelse(is.na(email) | email == "", "", email),
    interests = ifelse(is.na(interests) | interests == "", "No research interests provided.", interests)
  ) |>
  select(id, first_name, last_name, current_position, institution, interests, socials, email, image_url)

# Ensure the files directory exists
files_dir <- here("people/files/")
if (!dir.exists(files_dir)) {
  dir.create(files_dir, recursive = TRUE)
}

# Generate JSON data for JavaScript
json_data <- toJSON(members_data, pretty = TRUE, auto_unbox = TRUE)
writeLines(json_data, file.path(files_dir, "members_data.json"))

# Generate a complete JavaScript file with embedded data and all functions
js_complete <- paste0('
// Embedded member data
const membersData = {};
const rawMembersData = ', json_data, ';

// Convert array to object with id as key
rawMembersData.forEach(member => {
  membersData[member.id] = member;
});

console.log("Member data loaded successfully. Available members:", Object.keys(membersData));

function openModal(memberId) {
  console.log("Opening modal for member:", memberId);
  console.log("Available members:", Object.keys(membersData));
  
  const member = membersData[memberId];
  if (!member) {
    console.error("Member not found:", memberId);
    console.log("Full membersData object:", membersData);
    return;
  }

  console.log("Member found:", member);

  document.getElementById("modalName").textContent = `${member.first_name} ${member.last_name}`;
  document.getElementById("modalPosition").textContent = member.current_position;
  document.getElementById("modalInstitution").textContent = member.institution;
  document.getElementById("modalInterests").textContent = member.interests;
  document.getElementById("modalImage").src = member.image_url;
  document.getElementById("modalImage").alt = `${member.first_name} ${member.last_name}` + "s Image";

  // Handle contact links
  const contactsDiv = document.getElementById("modalContacts");
  contactsDiv.innerHTML = "";
  
  if (member.email) {
    const emailLink = document.createElement("a");
    emailLink.href = `mailto:${member.email}`;
    emailLink.className = "contact-link";
    emailLink.innerHTML = "Email";
    contactsDiv.appendChild(emailLink);
  }
  
  if (member.socials) {
    const socialLink = document.createElement("a");
    socialLink.href = member.socials;
    socialLink.target = "_blank";
    socialLink.rel = "noopener noreferrer";
    socialLink.className = "contact-link";
    socialLink.innerHTML = "Website/Social";
    contactsDiv.appendChild(socialLink);
  }

  // Show/hide contact section
  const contactSection = document.getElementById("contactSection");
  contactSection.style.display = (member.email || member.socials) ? "block" : "none";

  document.getElementById("memberModal").style.display = "block";
  document.body.style.overflow = "hidden";
  
  console.log("Modal should now be visible");
}

function closeModal() {
  document.getElementById("memberModal").style.display = "none";
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById("memberModal");
  if (event.target == modal) {
    closeModal();
  }
}

// Close modal with Escape key
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
')

writeLines(js_complete, file.path(files_dir, "members_complete.js"))

# Generate HTML cards for the grid display
generate_card <- function(id, first_name, last_name, image_url) {
  paste0(
    "<div class=\"person-card\" onclick=\"openModal('", id, "')\">\n",
    "  <img src=\"", image_url, "\" alt=\"", first_name, " ", last_name, "'s Image\" loading=\"lazy\">\n",
    "  <div class=\"person-info\">\n",
    "    <h3>", first_name, " ", last_name, "</h3>\n",
    "  </div>\n",
    "</div>\n"
  )
}

# Generate the HTML for all members
cards <- members_data |>
  mutate(
    card_html = mapply(
      generate_card,
      id,
      first_name,
      last_name,
      image_url
    )
  )

# Combine all the cards into a single HTML string
html_output <- paste(cards$card_html, collapse = "\n")

# Write the HTML output to a file
writeLines(html_output, file.path(files_dir, "members_cards.html"), useBytes = TRUE)

cat("✅ Member data processing complete!\n")
cat("📁 Generated files:\n")
cat("   -", file.path(files_dir, "members_data.json"), "\n")
cat("   -", file.path(files_dir, "members_complete.js"), "\n") 
cat("   -", file.path(files_dir, "members_cards.html"), "\n")
cat("   - Downloaded", nrow(data_cleaned), "member photos to", photo_dir, "\n")
cat("\n")
cat("🔍 Debug info:\n")
cat("   - Working directory:", getwd(), "\n")
cat("   - Files directory:", files_dir, "\n")
cat("   - JSON file exists:", file.exists(file.path(files_dir, "members_data.json")), "\n")
cat("   - JS file exists:", file.exists(file.path(files_dir, "members_complete.js")), "\n")
