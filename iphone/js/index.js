document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".link a");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var href = this.getAttribute("href");
      if (href && href.charAt(0) === "#") {
        event.preventDefault();
        var targetId = href.substring(1);
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
