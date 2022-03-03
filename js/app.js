const toggle = document.getElementById("toggle");
const photoCV = document.getElementById("resume-photo");
const videoCV = document.getElementById("rick-video");
let compteurPiege = 0;

toggle.addEventListener('click', function () {
    document.body.classList.toggle('open');
});

window.addEventListener('scroll', function (){
    if (window.scrollY > 50)
        document.getElementsByTagName("header")[0].style.boxShadow = "0 1px 5px black";
    else document.getElementsByTagName("header")[0].style.boxShadow = "";
});

photoCV.addEventListener('click', rickroll);

function rickroll(){
    compteurPiege++;
    if(compteurPiege === 4){
        photoCV.classList.remove("visible");
        photoCV.classList.add("hidden");
        videoCV.classList.remove("hidden");
        videoCV.classList.add("visible");
        document.getElementById('video').play();
    }
}