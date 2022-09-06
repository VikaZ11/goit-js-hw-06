const inputEl = document.querySelector('[data-length="6"]');

inputEl.addEventListener("blur", checkLength);

function checkLength(event) {
    inputEl.classList.remove("valid", "invalid");
    if (event.currentTarget.value.length == inputEl.dataset.length) {
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.add("invalid");
    }
}