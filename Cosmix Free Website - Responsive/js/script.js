// javascript toggle menu

var navlink = document.getElementById('navlinks');

function showMenu(){
    navlink.style.right = "0px";
}

function hideMenu(){
    navlink.style.right = "-200px";
}

/*----- Slide show --------- */
let slideIndex = 1;
showSlides(slideIndex);


//Next/previus controls
function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}


function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if ( n > slides.length)
    {
        slideIndex = 1;
    }
    if (n < 1)
    {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    for (i = 0;  i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// features of tabcontent

function openBtn(evt, numbers){
    var i, tabcontent, tablink;

    tabcontent = document.getElementsByClassName("btncontent");
    for(i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablink = document.getElementsByClassName("btn-one");
    for(i=0; i<tablink.length; i++){
        tablink[i].className = tablink[i].className.replace(" active", "");
    }

    document.getElementById(numbers).style.display = "block";
    evt.currentTarget.className += " active";
}