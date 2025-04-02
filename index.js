// mobile navbar
function toggleFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "nav-container") {
        x.className += " responsive";
    } else {
        x.className = "nav-container";
    }
}

function checkOrientation() {
    var x = document.getElementById("topnav");
    if (window.matchMedia("(orientation: landscape)").matches) {
        // Change the class name to "landscape" when in landscape orientation

        if (x.className === "nav-container responsive") {
            x.className = "nav-container"
        }
    } else {}
}

checkOrientation();

// Listen for the window resize event to detect orientation changes
window.addEventListener('resize', checkOrientation);


// slider
var timeOut = 2000;
var slideIndex = 0;
var autoOn = true;

autoSlides();

function autoSlides() {
    timeOut = timeOut - 20;

    if (autoOn == true && timeOut < 0) {
        showSlides();
    }
    setTimeout(autoSlides, 20);
}

function prevSlide() {

    timeOut = 2000;

    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i ++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex--;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    if (slideIndex == 0) {
        slideIndex = 3
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlides() {

    timeOut = 3000;

    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i ++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Call showSlides immediately to display the first slide on page load
showSlides();
