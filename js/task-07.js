const rangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

rangeEl.addEventListener("input", onFontSizeControl);

function onFontSizeControl(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}

