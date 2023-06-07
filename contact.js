const toggleButton = document.getElementsByClassName('toggle-button')[0];
 const navbarLinks = document.getElementsByClassName('navbar-links')[0];
 
 toggleButton.addEventListener('click', () => {
     navbarLinks.classList.toggle('active');
 });

 const form = document.querySelector("form");
 const Btn = document.querySelector(".send-btn");
 
 const allInput = document.querySelectorAll("input");
 Btn.addEventListener("click", ()=> {
allInput.forEach(input => {
 if(input.value != ""){
     form.classList.add('secActive');
 }else{
     form.classList.remove('secActive');
 }
});
function hit() {
    alert("Thank you for your feedback. We will improve according to your feedback");
 }
});



 
 