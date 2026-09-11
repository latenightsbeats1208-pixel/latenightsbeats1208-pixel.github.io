// Remplit les prix et les boutons d'achat à partir de PRICING (défini en tête de chaque page).
(function () {
  var P = window.PRICING || {};
  document.querySelectorAll("[data-price]").forEach(function (el) {
    var launch = P.launch, full = P.full;
    el.innerHTML = (launch && launch < full ? '<span class="old">' + full + ' €</span>' : "") +
      (launch || full) + ' €<small> · paiement unique</small>';
  });
  document.querySelectorAll("[data-buy]").forEach(function (a) {
    if (P.buyUrl) { a.href = P.buyUrl; a.textContent = a.getAttribute("data-buy") || "Acheter la version Pro"; }
    else { a.href = P.contactUrl || "#"; a.classList.add("soon"); a.textContent = "Version Pro — bientôt (me prévenir)"; }
  });
  document.querySelectorAll("[data-download]").forEach(function (a) {
    a.href = P.downloadUrl || P.repoUrl;
  });
})();
