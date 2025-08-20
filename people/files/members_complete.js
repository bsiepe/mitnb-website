// Embedded member data
const membersData = {};
const rawMembersData = [
  {
    "id": "Leonie_Schorrlepp",
    "first_name": "Leonie",
    "last_name": "Schorrlepp",
    "current_position": "PhD candidate",
    "institution": "Tilburg University",
    "interests": "My MITNB interests include integrating qualitative and quantitative methods and data in ESM research as well as more specifically thinking about how qualitative methods and data can fill blind spots left by exclusively quantitative methods.",
    "socials": "Bluesky: @leonieschorrlepp.bsky.social",
    "email": "l.schorrlepp@tilburguniversity.edu",
    "image_url": "files/images/Schorrlepp.jpg"
  },
  {
    "id": "Jonas_Haslbeck",
    "first_name": "Jonas",
    "last_name": "Haslbeck",
    "current_position": "Postdoc",
    "institution": "University of Amsterdam",
    "interests": "formal theories; computational models; time series modeling; modeling heterogeneity, mechanism research; measurement scales",
    "socials": "www.jonashaslbeck.com",
    "email": "jonashaslbeck@protonmail.com",
    "image_url": "files/images/Haslbeck.jpg"
  },
  {
    "id": "Leonie V.D.E._Vogelsmeier",
    "first_name": "Leonie V.D.E.",
    "last_name": "Vogelsmeier",
    "current_position": "Assistant Professor",
    "institution": "Tilburg University",
    "interests": "I am working on improving ILD measurement by developing methods for detecting measurement issues (e.g., careless responding or violations of measurement invariance), methods for incorporating measurement models in ILD analyses (e.g., to account for measurement error and heterogeneity in response behavior inherent to self-reports), and methods for preemptively reducing measurement problems (e.g., using personalized planned missingness designs).",
    "socials": "https://bsky.app/profile/leonievogelsmeier.bsky.social",
    "email": "l.v.d.e.vogelsmeier@tilburguniversity.edu",
    "image_url": "files/images/Vogelsmeier.jpg"
  },
  {
    "id": "Jingmeng_Cui",
    "first_name": "Jingmeng",
    "last_name": "Cui",
    "current_position": "PhD student",
    "institution": "University of Groningen",
    "interests": "My research centers on mathematical and statistical modeling to understand dynamic processes in psychology. I focus on developing nonlinear analysis methods for formal dynamic models and intensive longitudinal data, as well as investigating critical transitions and early warning signals in psychological systems.",
    "socials": "https://jingmeng-cui.netlify.app/",
    "email": "jingmeng.cui@rug.nl",
    "image_url": "files/images/Cui.jpg"
  },
  {
    "id": "Marie_Stadel",
    "first_name": "Marie",
    "last_name": "Stadel",
    "current_position": "PhD candidate",
    "institution": "University of Groningen",
    "interests": "I investigate how to capture 'context' (social context, daily activities ) with experience sampling methodology. Next to that I am interested in how qualitative methodology may help in gaining more insight in the valididty of ESM measures and study designs.",
    "socials": "",
    "email": "m.stadel@rug.nl",
    "image_url": "files/images/Stadel.jpg"
  },
  {
    "id": "Eiko_Fried",
    "first_name": "Eiko",
    "last_name": "Fried",
    "current_position": "Associate Professor",
    "institution": "Leiden University",
    "interests": "My interests are how to best describe, predict, and understand mental health problems, which I understand as emergent properties that arise from dynamical systems. Measurement of dynamic properties plays a crucial role for each of these steps.",
    "socials": "eiko-fried.com; X/Twitter @EikoFried; BlueSky @eikofried.bsky.social",
    "email": "eiko.fried@gmail.com",
    "image_url": "files/images/Fried.jpg"
  },
  {
    "id": "Suhaavi_Kochhar",
    "first_name": "Suhaavi",
    "last_name": "Kochhar",
    "current_position": "PhD candidate",
    "institution": "Radboud University",
    "interests": "I’m interested in making mental health interventions engaging and accessible through digital methods. To do this effectively, we need to improve how we measure complex, subjective experiences. Thus, I’m especially interested in finding better ways to assess these kinds of latent constructs.",
    "socials": "PhD project pages: https://gemhlab.com/games/detour/ https://www.ru.nl/en/research/research-projects/detour \nPersonal Radboud page: https://www.ru.nl/en/people/kochhar-s",
    "email": "s.kochhar@ru.nl",
    "image_url": "files/images/Kochhar.jpg"
  },
  {
    "id": "Xinkai_Du",
    "first_name": "Xinkai",
    "last_name": "Du",
    "current_position": "PhD candidate",
    "institution": "University of Oslo and Modum Bad Psychiatric Hospital",
    "interests": "(intensive) longitudinal data; psychometrics; measurements",
    "socials": "https://scholar.google.com/citations?user=S6T6kY4AAAAJ&hl=en; @xinkaidu.bsky.social",
    "email": "xinkai.du.xd@gmail.com",
    "image_url": "files/images/Du.jpg"
  },
  {
    "id": "Joseph_Maimone",
    "first_name": "Joseph",
    "last_name": "Maimone",
    "current_position": "PhD Student, Clinical Psychology",
    "institution": "Boston University",
    "interests": "I am currently working on idiographic modeling of loneliness within the framework of the Social Homeostasis Theory with the goal to better describe and understand the heterogeneity of experiences of loneliness.",
    "socials": "www.linkedin.com/in/maimonejoseph",
    "email": "jmaimone@bu.edu",
    "image_url": "files/images/Maimone.jpg"
  },
  {
    "id": "Dominique_Maciejewski",
    "first_name": "Dominique",
    "last_name": "Maciejewski",
    "current_position": "Assistant Professor",
    "institution": "Tilburg University",
    "interests": "Response processes in ESM studies (i.e. how people interpret and respond to our questions) using a mixed method approach",
    "socials": "",
    "email": "D.f.maciejewski@tilburguniversity.edu",
    "image_url": "files/images/Maciejewski.jpg"
  },
  {
    "id": "Omid V._Ebrahimi",
    "first_name": "Omid V.",
    "last_name": "Ebrahimi",
    "current_position": "Research Fellow",
    "institution": "University of Oxford",
    "interests": "Time-series; EMA; Measurement; Dynamic Modelling",
    "socials": "",
    "email": "omid.ebrahimi@psy.ox.ac.uk",
    "image_url": "files/images/Ebrahimi.jpg"
  },
  {
    "id": "Olivia_Kirtley",
    "first_name": "Olivia",
    "last_name": "Kirtley",
    "current_position": "Assistant Research Professor",
    "institution": "Center for Centextual Psychiatry, KU Leuven",
    "interests": "I am especially interested in measurement issues and practices in the context of clinical psychology/psychiatry research. I lead the ESM Item Repository, an open science initiative to increase measurement transparency and quality in ESM research.",
    "socials": "ESM Item Repository search portal: www.esmitemrepository.com. Personal Bluesky: @oliviajkirtley.bsky.social. X: @LivveyKirtley",
    "email": "olivia.kirtley@kuleuven.be",
    "image_url": "files/images/Kirtley.jpg"
  },
  {
    "id": "Jessica_Fritz",
    "first_name": "Jessica",
    "last_name": "Fritz",
    "current_position": "Senior Postdoctoral Research Fellow & Psychotherapist Trainee",
    "institution": "University of Osnabrück",
    "interests": "By bringing together quantitative and qualitative research methods for intensive longitudinal data, I aim to study a) what components – in addition to psycho(patho)logical symptoms – are particularly relevant for a meaningful \"mental health\" assessment, b) how these components can be captured with monitoring and outcome tools, and c) how we can best add personalized components to these monitoring and outcome tools. My hope is that this line of research can eventually enable a comprehensive and personally-relevant mental health assessment for psychosocial intervention settings.",
    "socials": "https://jessica-fritz.com/; @DrJessicaFritz",
    "email": "jessica.fritz@uni-osnabrueck.de & jf585@cantab.ac.uk",
    "image_url": "files/images/Fritz.jpg"
  },
  {
    "id": "Björn_Siepe",
    "first_name": "Björn",
    "last_name": "Siepe",
    "current_position": "PhD Student",
    "institution": "University of Marburg",
    "interests": "Time Series Analysis, Simulation Studies, Prediction Modeling, Open Science",
    "socials": "https://bsiepe.github.io",
    "email": "bjoernsiepe@gmail.com",
    "image_url": "files/images/Siepe.jpg"
  },
  {
    "id": "Shirley_Wang",
    "first_name": "Shirley",
    "last_name": "Wang",
    "current_position": "Assistant Professor",
    "institution": "Yale University",
    "interests": "Mental health disorders are incredibly complex and dynamic phenomena that vary within people, between people, and across time. My research program aims to develop and harness novel methods that can capture and model this complexity, with a focus on suicide, nonsuicidal self-injury, and eating disorders. To do so, I integrate methods from across the clinical and computational sciences, including machine learning, mathematical modeling, and ambulatory assessment (e.g., via smartphones and wearables). A central focus of this work is on formalizing theories of psychopathology, and modeling the real-time dynamics of symptoms (and their contexts) as they unfold in people’s daily lives.",
    "socials": "https://ccslab.yale.edu/",
    "email": "shirley.wang@yale.edu",
    "image_url": "files/images/Wang.jpg"
  },
  {
    "id": "Charlotte_Vrijen",
    "first_name": "Charlotte",
    "last_name": "Vrijen",
    "current_position": "Assistant professor",
    "institution": "University of Groningen",
    "interests": "Combining qualitative and quantitative EMA; combining EMA with real-time (video) observations; studying how to best measure emotion-regulation in children; studying at which time-scales and in what contexts emotional rigidity and flexibility are adaptive.",
    "socials": "https://charlottevrijen.com; https://bit.ly/Optimisme_onderzoek (in Dutch); @charlottev.bsky.social; on X: @CharlotteVrijen",
    "email": "c.vrijen@rug.nl",
    "image_url": "files/images/Vrijen.jpg"
  },
  {
    "id": "Marieke_Schreuder",
    "first_name": "Marieke",
    "last_name": "Schreuder",
    "current_position": "Postdoc",
    "institution": "KU Leuven & Tilburg University",
    "interests": "Predicting vulnerability to mental health problems based on ESM data in real-time; improving methods and analyses for studying emotion dynamics and emotion regulation; exploring JITAI principles",
    "socials": "",
    "email": "marieke.schreuder@kuleuven.be",
    "image_url": "files/images/Schreuder.jpg"
  },
  {
    "id": "Guðrún_Guðmundsdóttir",
    "first_name": "Guðrún",
    "last_name": "Guðmundsdóttir",
    "current_position": "PhD student",
    "institution": "Maastricht University",
    "interests": "I'm interested in all things ESM, particularly in response processes (e.g., how do people interpret and use slider scales?), time-scale considerations (e.g., how frequently should we measure a construct based on its variability in daily life?), and the why and how of using open-text responses (e.g., what is the added value of written responses beyond what we can infer from closed items?).",
    "socials": "",
    "email": "gudrun.rut.gudmundsdottir@gmail.com",
    "image_url": "files/images/Guðmundsdóttir.jpg"
  },
  {
    "id": "Laura_Bringmann",
    "first_name": "Laura",
    "last_name": "Bringmann",
    "current_position": "Associate professor",
    "institution": "University of Groningen",
    "interests": "Using mixed methods, such as reliability analysis and open-ended text boxes, to improve the reliability and validity of ESM. Not psychometrics, but ESMmetrics!",
    "socials": "https://www.laurabringmannlab.com/",
    "email": "l.f.bringmann@rug.nl",
    "image_url": "files/images/Bringmann.jpg"
  },
  {
    "id": "Marieke A._Helmich",
    "first_name": "Marieke A.",
    "last_name": "Helmich",
    "current_position": "Postdoctoral research fellow",
    "institution": "University of Oslo",
    "interests": "Change processes in emotion and symptom time series; Meaningful measurement",
    "socials": "www.mariekehelmich.com, mahelmich.bsky.social, @MariekeHelmich",
    "email": "marieke.a.helmich@gmail.com",
    "image_url": "files/images/Helmich.jpg"
  }
];

// Convert array to object with id as key
rawMembersData.forEach(member => {
  membersData[member.id] = member;
});

console.log("Member data loaded successfully. Available members:", Object.keys(membersData));

function openModal(memberId) {
  console.log("Opening modal for member:", memberId);
  
  const member = membersData[memberId];
  if (!member) {
    console.error("Member not found:", memberId);
    return;
  }

  document.getElementById("modalName").textContent = `${member.first_name} ${member.last_name}`;
  document.getElementById("modalPosition").textContent = member.current_position;
  document.getElementById("modalInstitution").textContent = member.institution;
  document.getElementById("modalInterests").textContent = member.interests;
  document.getElementById("modalImage").src = member.image_url;
  document.getElementById("modalImage").alt = `${member.first_name} ${member.last_name}s Image`;

  // Handle contact links
  const contactsDiv = document.getElementById("modalContacts");
  contactsDiv.innerHTML = "";
  
  if (member.email) {
    const emailLink = document.createElement("a");
    emailLink.href = `mailto:${member.email}`;
    emailLink.className = "contact-link";
    emailLink.innerHTML = "📧 Email";
    contactsDiv.appendChild(emailLink);
  }
  
  if (member.socials && member.socials.trim() !== "") {
    const socialDiv = document.createElement("div");
    socialDiv.className = "social-text";
    socialDiv.innerHTML = `<strong>Links & Socials:</strong><br>${member.socials}`;
    contactsDiv.appendChild(socialDiv);
  }

  // Show/hide contact section
  const contactSection = document.getElementById("contactSection");
  contactSection.style.display = (member.email || member.socials) ? "block" : "none";

  document.getElementById("memberModal").style.display = "block";
  document.body.style.overflow = "hidden";
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

