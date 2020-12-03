var openTab = document.querySelectorAll(".open-tab");
console.log(openTab)
for (var i = 0; i < openTab.length; i++) {
    openTab[i].addEventListener('click', function (event) {
        var index = event.target.getAttribute("data-target");
        document.querySelector(".active").classList.remove(".active");
        document.querySelector(".list-show").classList.remove('list-show');
        console.log(document.querySelector(".active"));
        document.querySelectorAll(".list-house")[index - 1].classList.add('list-show')
    });
}