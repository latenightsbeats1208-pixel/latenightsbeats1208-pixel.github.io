// Remplit les prix et les boutons d'achat à partir de PRICING (défini en tête de chaque page).
(function () {
  var P = window.PRICING || {};
  document.querySelectorAll("[data-price]").forEach(function (el) {
    var launch = P.launch, full = P.full;
    el.innerHTML = (launch && launch < full ? '<span class="old">' + full + ' €</span>' : "") +
      (launch || full) + ' €<small> · paiement unique</small>';
  });
  document.querySelectorAll("[data-buy]").forEach(function (a) {
    // Un bouton qui pointe déjà quelque part (ancre #offre du haut de page) garde sa destination :
    // l'écraser envoyait le visiteur sur GitHub au lieu de descendre à la grille tarifaire.
    var placeholder = a.getAttribute("href") === "#";
    if (P.buyUrl) {
      a.href = P.buyUrl;
      a.textContent = a.getAttribute("data-buy") || "Acheter la version Pro";
    } else if (placeholder) {
      a.href = P.contactUrl || "#";
      a.classList.add("soon");
      a.textContent = "Version Pro — bientôt (me prévenir)";
    } else {
      a.classList.add("soon");
    }
  });
  document.querySelectorAll("[data-download]").forEach(function (a) {
    a.href = P.downloadUrl || P.repoUrl;
  });
})();
