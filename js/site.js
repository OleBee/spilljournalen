(function () {
  var filters = document.querySelectorAll("[data-filter]");
  var cards = document.querySelectorAll("[data-tags]");
  if (!filters.length) return;
  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filters.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var f = btn.getAttribute("data-filter");
      cards.forEach(function (card) {
        var tags = (card.getAttribute("data-tags") || "").split(/\s+/);
        var show = f === "alle" || tags.indexOf(f) !== -1;
        card.style.display = show ? "" : "none";
      });
    });
  });
})();
