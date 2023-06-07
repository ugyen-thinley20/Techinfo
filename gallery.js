const toggleButton = document.getElementsByClassName('toggle-button')[0];
 const navbarLinks = document.getElementsByClassName('navbar-links')[0];
 
 toggleButton.addEventListener('click', () => {
     navbarLinks.classList.toggle('active');
 });


const categoryList = document.querySelectorAll("#topic li"); 
const allCards = document.querySelectorAll(".card-gallery-wrapper li");


function onFilterClick(e) {
const categoryNumber = e.target.getAttribute("data-group");
    allCards.forEach((list) => {
        if (categoryNumber == 0) {
            list.classList.remove("hidden");
        }
   
        else {
           
            if (list.getAttribute("data-group") != categoryNumber)  { 
                list.classList.add("hidden");  
            }
            
          
            else { 
                list.classList.remove("hidden");
            }
        }   
    });    
} 
categoryList.forEach((list) => {
    list.addEventListener("click", onFilterClick);  
});