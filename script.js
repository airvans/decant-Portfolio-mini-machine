
const sections = document.querySelectorAll(".same")
const listitems = document.querySelectorAll(".nav-indicator")
const listelement = document.querySelectorAll(".nav-element")
let item = Array.from(listitems)
let item2 = Array.from(listelement)



function checkSlide() {
   
   sections.forEach((x)=>{

   const slideInAt = (window.scrollY + window.innerHeight) - x.offsetTop / 4;
   const imageBottom = x.offsetTop + x.clientHeight;
   const isHalfShown = slideInAt > x.offsetTop;
   const isNotScrolledPast = window.scrollY < imageBottom;
   const match = item.find( (list) => list.dataset.item == x.dataset.item)
   const match2 = item2.find( (list) => list.dataset.item == x.dataset.item)
   


   if(isHalfShown && isNotScrolledPast){
     match.classList.add("active")
     match2.classList.add("active")

   }else{
     match.classList.remove("active")
     match2.classList.remove("active")


   }

   })}



window.addEventListener('scroll', debounce(checkSlide));

function debounce(func, wait = 10, immediate = true) {
     var timeout;
     return function() {
       var context = this, args = arguments;
       var later = function() {
         timeout = null;
         if (!immediate) func.apply(context, args);
       };
       var callNow = immediate && !timeout;
       clearTimeout(timeout);
       timeout = setTimeout(later, wait);
       if (callNow) func.apply(context, args);
     };
   };