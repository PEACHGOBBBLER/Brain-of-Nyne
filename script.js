/*NAV*/

/*Pages*/
let comics=document.getElementById("comics-content");
let gallery=document.getElementById("gallery-content");
let about=document.getElementById("about-content");

/*NavButtons*/
let comicsButton=document.querySelector(".comicsbtn");
let galleryButton=document.querySelector(".gallerybtn");
let aboutButton=document.querySelector(".aboutbtn");

comicsButton.addEventListener("click", function() {
        comics.style.display="flex";
        gallery.style.display="none";
        about.style.display="none";
});

galleryButton.addEventListener("click", function() {
        comics.style.display="none";
        gallery.style.display="flex";
        about.style.display="none";
});

aboutButton.addEventListener("click", function() {
        comics.style.display="none";
        gallery.style.display="none";
        about.style.display="flex";
});


         /*Contact-page*/


/*Poster Modal (Thank you W3Schools)*/

/*Get the modal*/
var modal=document.getElementById("myModal");

var img=document.getElementById("BoN-Poster");
var modalImg=document.getElementById("img01");
var captionText=document.getElementById("caption");

img.onclick=function() {
    modal.style.display="block";
    modalImg.src=this.src;
    captionText.innerHTML=this.alt;
    document.querySelector("body").style.overflow="hidden";
}


var span=document.getElementsByClassName("close")[0];

/*Close the modal*/
span.onclick=function() {
    modal.style.display="none";
    document.querySelector("body").style.overflow="visible";
}


         /*Gallery-page*/


/*Gallery Modal*/

document.querySelectorAll(".image-container img").forEach(image => {
    image.onclick = () => {
        document.querySelector(".gallery-modal").style.display = "block";
        document.querySelector(".gallery-modal img").src = image.getAttribute("src");
    }
});

document.querySelector(".gallery-modal span").onclick = () => {
    document.querySelector(".gallery-modal").style.display = "none";
}




