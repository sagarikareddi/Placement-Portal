
// slide show start

let si = 0;
Slides();
function Slides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  si++;
  if (si > slides.length) {si = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[si-1].style.display = "block";  
  dots[si-1].className += " active";
  setTimeout(Slides, 3000);
}



// slide show end
