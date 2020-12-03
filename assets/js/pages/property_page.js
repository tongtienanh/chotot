// function openTab(listTab) {
//     var i;
//     var x = document.getElementsByClassName("list-category");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     document.getElementById(listTab).style.display = "block";
// }


var openTab = document.querySelectorAll(".js-open-tab");
console.log(openTab)
for(var i =0;i<openTab.length;i++){
    openTab[i].addEventListener('click',function (event) {
        var index = event.target.getAttribute("data-target");
        document.querySelector(".list-show").classList.remove('list-show');
        console.log(document.querySelectorAll(".list-categories"));
        document.querySelectorAll(".list-categories")[index-1].classList.add('list-show')
    });
}