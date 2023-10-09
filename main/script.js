var learnMoreButtons = document.querySelectorAll(".learn-more");

learnMoreButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    var toggleContent = button.nextElementSibling;
    toggleContent.classList.toggle("hidden");
  });
});
