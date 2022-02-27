const toggle = document.getElementById("toggle");

toggle.addEventListener('click', function () {
    document.body.classList.toggle('open');
});

window.addEventListener('scroll', function (){
    if (window.scrollY > 50)
        document.getElementsByTagName("header")[0].style.boxShadow = "0 1px 5px black";
    else document.getElementsByTagName("header")[0].style.boxShadow = "";
});
