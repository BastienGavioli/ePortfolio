const toggle = document.getElementById("toggle");
let compteurNav = 0;

toggle.addEventListener('click', function () {
    document.body.classList.toggle('open');
    compteurNav++;
    // if scroll happens, set it to the previous value
    if (compteurNav % 2 === 1){
        // To get the scroll position of current webpage
        const topScroll = window.scrollY || document.documentElement.scrollTop;
        const leftScroll = window.scrollX || document.documentElement.scrollLeft;
        window.onscroll = function() { window.scrollTo(leftScroll, topScroll); };
    } else {
        window.onscroll = function() {};
    }

});

window.addEventListener('scroll', function (){
    if (window.scrollY > 50)
        document.getElementsByTagName("header")[0].style.boxShadow = "0 1px 5px black";
    else document.getElementsByTagName("header")[0].style.boxShadow = "";
});