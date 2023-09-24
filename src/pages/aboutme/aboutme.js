const hamburger_button = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function toggleButton(){
    navList.classList.toggle('show');
}

hamburger_button.addEventListener('click', toggleButton);

// Logic for displaying image slides
var slideIndex = 1
showSlides(slideIndex)

function addSlide(k){
    showSlides(slideIndex += k) 
}

function curSlide(k){
    showSlides(slideIndex = k) 
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("picframe");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","") 
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}



var width=height=null;

function handler(){
    width=document.getElementById('image').clientWidth;
    height=document.getElementById('image').clientWidth;
    console.log(width);
    console.log(height);
}

let kdd_pics = document.getElementsByClassName("kdd_pic");
for(i = 0; i < kdd_pics.length; i++){
    kdd_pics[i].addEventListener("load", function() {
        console.log("image has loaded");
        console.log(kdd_pics[i].height);
      });
}