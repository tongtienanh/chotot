function tab(list) {
    var i;
    var x = document.getElementsByClassName("list-house");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(list).style.display = "block";
}