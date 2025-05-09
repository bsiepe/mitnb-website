# Loading and preprocessing google sheets member data ---------------------
library(googlesheets4)
library(googledrive)
library(tidyverse)
library(here)
library(glue)
library(readr)
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

# download all photos
for (i in 1:nrow(data_cleaned)) {
  drive_download(file = data_cleaned$photo[i], 
                 path = paste0(here("people/files/images/"), "/", data_cleaned$last_name[i], ".jpg"), 
                 overwrite = TRUE)
}

# Path to the folder where images are stored
image_base_path <- "files/images/"

# Template for the person card
generate_card <- function(first_name, last_name, image_url) {
  subpage <- paste0("people/", first_name, "_", last_name, ".html")
  paste0(
    "<div class=\"person-card\" onclick=\"window.location.href='", subpage, "'\">\n",
    "  <img src=\"", image_url, "\" alt=\"", first_name, " ", last_name, "'s Image\">\n",
    "  <h3>", first_name, " ", last_name, "</h3>\n",
    "</div>\n"
  )
}

# Generate the HTML for all members
cards <- data_cleaned |> 
  mutate(
    image_url = paste0(image_base_path, last_name, ".jpg"),
    card_html = mapply(
      generate_card,
      first_name,
      last_name,
      image_url
    )
  )

# Combine all the cards into a single HTML string
html_output <- paste(cards$card_html, collapse = "\n")

# Write the HTML output to a file
writeLines(html_output, "people/files/members_cards.html", useBytes = TRUE)

# Read the template
template <- read_file(here("people/person_template.qmd"))

# Generate a subpage for each person
for (i in 1:nrow(data_cleaned)) {
  person <- data_cleaned[i, ]
  content <- glue_data(person, template, .open = "{{", .close = "}}")
  write_file(content, glue(here("people/{person$first_name}_{person$last_name}.qmd")))
}
