var drop_item= document.querySelectorAll(".item");
var modal=document.querySelectorAll(".modal");
var close_btn =document.querySelectorAll(".modal .modal-body-head .close-btn");
var openTab = document.querySelectorAll(".open-tab");
drop_item[2].addEventListener('click',function (event) {
    modal[0].style.display="block";
});
drop_item[3].addEventListener('click',function (event) {
    modal[1].style.display="block";
});
drop_item[4].addEventListener('click',function (event) {
    modal[2].style.display="block";
});
drop_item[5].addEventListener('click',function (event) {
    modal[3].style.display="block";
});
drop_item[6].addEventListener('click',function (event) {
    modal[4].style.display="block";
});
drop_item[7].addEventListener('click',function (event) {
    modal[5].style.display="block";
});


close_btn[0].addEventListener("click", function (evt) {
    modal[0].style.display="none";
})
close_btn[1].addEventListener("click", function (evt) {
    modal[1].style.display="none";
})

var model=document.querySelector(".model");
drop_item[1].addEventListener('click',function (event) {
    model.style.display="block";
})

var close_btn =document.querySelector(".modal .modal-body-head .close-btn");
close_btn.addEventListener("click", function (evt) {
    modal.style.display="none";
});

window.onclick = function(event) {
    var modal_overlay=document.querySelectorAll(".modal-overlay");
    if (event.target == modal_overlay[1]) {
        modal[0].style.display = "none";
    }
    if (event.target == modal_overlay[2]) {
        modal[1].style.display = "none";
    }
    if (event.target == modal_overlay[3]) {
        modal[2].style.display = "none";
    }
    if (event.target == modal_overlay[4]) {
        modal[3].style.display = "none";
    }
    if (event.target == modal_overlay[5]) {
        modal[4].style.display = "none";
    }
    if (event.target == modal_overlay[6]) {
        modal[5].style.display = "none";
    }
}
// for(var i =0;i<openTab.length;i++){
//     openTab[i].addEventListener('click',function (event) {
//         var index = event.target.getAttribute("data-target");
//         document.querySelector(".list-show").classList.remove('list-show');
//         console.log(document.querySelectorAll(".list-house"));
//         document.querySelectorAll(".list-house")[index-1].classList.add('list-show')
//         console.log(index);
//     });
// }
