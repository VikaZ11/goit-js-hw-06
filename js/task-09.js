function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorEl = document.querySelector('.color');
const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector('body')

changeColorBtn.addEventListener("click", onChangeColorBtnClick);

function onChangeColorBtnClick() {
    const currentColor = getRandomHexColor();
    
    body.style.backgroundColor = currentColor;
    return colorEl.textContent = currentColor;
}