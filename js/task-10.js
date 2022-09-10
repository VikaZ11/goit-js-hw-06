const inputRef = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

destroyBtn.addEventListener("click", destroyBoxes);
createBtn.addEventListener("click", () => {
  createBoxes(inputRef.value);
});

function createBoxes(amount) {
  destroyBoxes();

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.insertAdjacentHTML("beforeend", box.outerHTML);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
