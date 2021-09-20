// dark mode tools
const darkMode = document.getElementById("dark-mode");

darkMode.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// portfolio
$(".image").click(function () {
  $(".image").removeClass("active");
  $(this).addClass("active");
});

// $("#img").on("click", function () {
//   // console.log("hello world ");
//   // alert("merci");
// });
//

$("#img").on("click", function () {
  $(".imagepreview").attr("src", $(this).find("img").attr("src"));
  $("#imagepreview").modal("show");
});
// ajout d'un span a la fin du body
$("<span/>").appendTo("body");
