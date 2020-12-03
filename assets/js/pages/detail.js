var click = document.querySelector(".phone-call");
var number = document.querySelector(".phone-number");
var modal = document.querySelectorAll(".modal");
var report = document.querySelectorAll(".censorship .btn-report .invalid-btn");

click.addEventListener('click',function () {
    click.style.display="none";
    number.style.display="block";
})
console.log(report[0]);
console.log("alo alo");
report[0].addEventListener('click',function () {
    modal[0].style.display="block";
})
report[1].addEventListener('click',function () {
    modal[1].style.display="block";
})
window.onclick = function(event) {
    var modal_overlay = document.querySelectorAll(".modal-overlay");
    console.log(modal_overlay);
    if (event.target == modal_overlay[0]) {
        console.log('alo')
        modal[0].style.display = "none";
    }
    if (event.target == modal_overlay[1]) {
        console.log('alo')
        modal[1].style.display = "none";
    }
}