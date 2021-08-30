const darkMode = document.getElementById("dark-mode");

darkMode.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

$(".image").click(function () {
  $(".image").removeClass("active");
  $(this).addClass("active");
});
