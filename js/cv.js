const photoCV = document.getElementById("resume-photo");
const videoCV = document.getElementById("rick-video");
let compteurPiege = 0;

photoCV.onclick = rickroll;

function rickroll(){
    compteurPiege++;
    if(compteurPiege === 4){
        photoCV.classList.remove("visible");
        photoCV.classList.add("hidden");
        videoCV.classList.remove("hidden");
        videoCV.classList.add("visible");
        document.getElementById('video').src += "?autoplay=1";
    }
}