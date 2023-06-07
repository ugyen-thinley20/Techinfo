const toggleButton = document.getElementsByClassName('toggle-button')[0];
 const navbarLinks = document.getElementsByClassName('navbar-links')[0];
 
 toggleButton.addEventListener('click', () => {
     navbarLinks.classList.toggle('active');
 });



var slideIndex = 0;

showSlides();
 
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("autoSlides");
  var dots = document.getElementsByClassName("doot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}




