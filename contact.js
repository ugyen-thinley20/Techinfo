function hit() {
    alert("Thank you for your feedback. We will improve according to your feedback");
 }
 
 const toggleButton = document.getElementsByClassName('toggle-button')[0];
 const navbarLinks = document.getElementsByClassName('navbar-links')[0];
 
 toggleButton.addEventListener('click', () => {
     navbarLinks.classList.toggle('active');
 });