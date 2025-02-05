let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0"; // Make all slides invisible
    slides[i].style.display = "none"; 
    slides[i].style.position = "absolute"; // Keep slides in place
    slides[i].style.transition = "opacity 0.8s ease-in-out";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.opacity = "1"; 
  slides[slideIndex - 1].style.display = "block"; 
  slides[slideIndex - 1].style.position = "relative";
  dots[slideIndex - 1].classList.add("active");
}
