const toggle = document.getElementById("toggle");
let compteurNav = 0;

toggle.addEventListener('click', function () {
    document.body.classList.toggle('open');
    compteurNav++;
    // if scroll happens, set it to the previous value
    // else, unable to scroll
    if (compteurNav % 2 === 1){
        // To get the scroll position of current webpage
        const leftScroll = window.scrollX || document.documentElement.scrollLeft;
        const topScroll = window.scrollY || document.documentElement.scrollTop;
        window.onscroll = () => window.scrollTo(leftScroll, topScroll);
    } else window.onscroll = () => {};
});