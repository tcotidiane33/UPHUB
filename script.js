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

// jQeury pour cacher tous les elements de la page .
// $("div").hide();
//  Pour connaitre le nombre de div
// $("div").length();
// pour renvoyer tout les balise(*)
$("*");
// pour renvoyer tous les div de class content
$("div.content");
// objets de class menu et d'identifiant content
$(".menu , #content");

// recherche de p contenant des object avec class header
// et afficher le contenu de l'objects
$("p").find("header").show();
// ou $("selecteur", "context")
$(".header", $("p")).show();
// recupperer tous les elements et les extraires
$("div").get(2);
// équivalent
$("div")[2];
// recuperation d'un élement
$("div").eq(2);
// recupération d'un "élement à partir de la fin"
$("div").eq(-2);
//
