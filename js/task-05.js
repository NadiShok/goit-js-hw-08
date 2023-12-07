function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener("DOMContentLoaded", onbody);
function onbody() {
   const changeColorButton = document.querySelector(".change-color");
   const changeColorSpan = document.querySelector(".color");

   changeColorButton.addEventListener("click", onclick);
   function onclick() {
     const randomColor = getRandomHexColor();
     document.body.style.backgroundColor = randomColor;
     changeColorSpan.textContent = randomColor;
   }
 }
