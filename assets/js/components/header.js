var notify = document.querySelector(".item");
var notify_open = document.querySelector(".notify");
console.log(notify);


var AddMore = document.querySelector(".add");
var add_open = document.querySelector(".menu");
AddMore.addEventListener('click',function (evt) {
    add_open.style.display="block";
})


var removeClass = true;
notify.addEventListener('click', function () {
    notify_open.style.display="block";
    removeClass = false;
})

document.addEventListener("click", function () {
    if (removeClass) {
        notify_open.style.display="none";
    }
    removeClass = true;
})

// AddMore.addEventListener('click',function () {
//     add_open.style.display="block";
//     removeClass="false";
// })
// document.addEventListener("click", function () {
//     if (removeClass) {
//         add_open.style.display="none";
//     }
//     removeClass = true;
// })

