// Thème clair / sombre. À charger dans <head> (avant le rendu) pour éviter le flash.
// Choix mémorisé dans localStorage ("light" | "dark") ; sinon, préférence système.
(function () {
  var KEY = "lnt-theme";
  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function apply(t) {
    if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t);
    else document.documentElement.removeAttribute("data-theme");
  }
  function current() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  apply(stored());
  window.LNT_THEME = {
    toggle: function () {
      var next = current() === "dark" ? "light" : "dark";
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      render();
    }
  };
  function render() {
    var btns = document.querySelectorAll(".theme-toggle");
    var dark = current() === "dark";
    for (var i = 0; i < btns.length; i++) {
      btns[i].textContent = dark ? "☀️" : "🌙";
      btns[i].setAttribute("aria-label", dark ? "Passer en mode clair" : "Passer en mode sombre");
      btns[i].title = btns[i].getAttribute("aria-label");
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    render();
    document.addEventListener("click", function (e) {
      var b = e.target.closest && e.target.closest(".theme-toggle");
      if (b) { e.preventDefault(); window.LNT_THEME.toggle(); }
    });
  });
})();
