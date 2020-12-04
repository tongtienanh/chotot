var openTab = document.querySelectorAll(".open-tab");
var button_toggle=document.querySelector(".dropdown-btn");
var toggle=document.querySelector(".toggle");
var icon_click=document.querySelector(".fillter-icon");
var list_2=document.querySelector(".list-2");
var list_1=document.querySelector(".list-1");

console.log(list_1)
for (var i = 0; i < openTab.length; i++) {
    openTab[i].addEventListener('click', function (event) {
        var index = event.target.getAttribute("data-target");
        document.querySelector(".list-show").classList.remove('list-show');
        console.log(document.querySelectorAll(".list-1"));
        console.log(index);
        document.querySelectorAll(".list-1")[index - 1].classList.add('list-show');
    });
}

button_toggle.addEventListener('click',function () {
    if(toggle.style.display==="block"){
        toggle.style.display="none";
    }
    else {
        toggle.style.display="block";
    }
})
console.log(list_1)
icon_click.addEventListener('click',function () {
    document.getElementById("div").classList.toggle("hidden");
    document.querySelector(".show-list").classList.toggle("hidden");
    list_1.classList.toggle("hidden");
    list_2.classList.toggle("flex");
})
