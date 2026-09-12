// ——— CATALOGUE LATE NIGHTS TOOLS ———
// Pour ajouter une application : une entrée ici, un dossier <slug>/index.html (copier une page existante).
// status : "live" (page + dépôt en ligne) | "preview" (page en ligne, dépôt et installeur à venir)
//          | "soon" (annoncée, ni page ni dépôt)
window.TOOLS = [
  {
    slug: "jobscout",
    name: "JobScout",
    icon: "🎯",
    audience: "Recherche d'emploi",
    tagline: "Scanne 7 sites d'emploi, note chaque offre selon votre profil, génère un CV + une lettre ATS d'une page dans la langue de l'annonce, sans rien inventer.",
    repo: "https://github.com/latenightsbeats1208-pixel/jobscout",
    release: "https://github.com/latenightsbeats1208-pixel/jobscout/releases/latest",
    version: "3.4.8",
    pro: "Installeur Windows + 200 dossiers IA inclus",
    status: "live",
    demo: true          // assets/demo/<slug>.mp4 + .jpg présents
  },
  {
    slug: "genius-scout",
    name: "Genius Scout",
    icon: "🎛️",
    audience: "Beatmakers · placement de prods",
    tagline: "Collez un album : les producteurs de chaque titre (Genius, Spotify, MusicBrainz, Discogs) et leur Instagram vérifié, prêts pour la prospection.",
    repo: "https://github.com/latenightsbeats1208-pixel/genius-scout",
    release: "https://github.com/latenightsbeats1208-pixel/genius-scout/releases/latest",
    version: "1.0.0",
    pro: "Installeur Windows 1-clic, Chrome dédié configuré",
    status: "live",
    demo: true          // assets/demo/<slug>.mp4 + .jpg présents
  },
  {
    slug: "contact-tracker",
    name: "Contact Tracker",
    icon: "📇",
    audience: "Producteurs · vente high ticket",
    tagline: "Le CRM de prospection musicale : pipeline en 11 étapes, relances datées, scripts de DM et d'appel, entonnoir chiffré. Une méthode de vente dans un outil.",
    repo: "https://github.com/latenightsbeats1208-pixel/contact-tracker",
    release: "https://github.com/latenightsbeats1208-pixel/contact-tracker/releases/latest",
    version: "1.0.0",
    pro: "Installeur Windows + guide de vente PDF",
    status: "live",
    demo: true          // assets/demo/<slug>.mp4 + .jpg présents
  },
  {
    slug: "drop",
    name: "Drop",
    icon: "🚀",
    audience: "Beatmakers · publication quotidienne",
    tagline: "Publie une prod de bout en bout : cover, vidéo, track BeatStars programmée et vidéo YouTube programmée avec le lien. Une demi-heure de clics en moins par prod.",
    repo: "",
    release: "",
    version: "0.1",
    pro: "Installeur Windows, ffmpeg embarqué",
    status: "preview",
    demo: true          // assets/demo/<slug>.mp4 + .jpg présents
  }
  // Prochaine application : copier une entrée ci-dessus, status "soon" tant que la page n'existe pas.
];
