

function getRandomHexColor() { 
return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const onbuton = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");

onbuton.addEventListener("click",handle_button_backgoundcolor);

function handle_button_backgoundcolor(){
  bodyColor.style.backgroundColor = getRandomHexColor();
}



