function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function destroyBoxes() {
  boxes.innerHTML = "";
}

function createBoxes(amount) {
  destroyBoxes();
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(newBox);
    size += 10;
  }
}

createButton.addEventListener('click', onCreate);
function onCreate() {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    return;
  }
  createBoxes(amount)
  input.value;
}

destroyButton.addEventListener('click', onDestroy);
function onDestroy() {
  destroyBoxes();
  input.value = "";
}
