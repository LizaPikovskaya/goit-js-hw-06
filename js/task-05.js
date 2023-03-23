const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onChangeTextInput);
inputEl.addEventListener("blur", onCleanTextInput);

function onChangeTextInput (event) {
spanEl.textContent = event.currentTarget.value;
}

function onCleanTextInput(event) {
    if(spanEl.textContent === '') {
       spanEl.textContent = "Anonymous"}
}