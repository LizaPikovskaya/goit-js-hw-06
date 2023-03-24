const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onChangeTextInput);

function onChangeTextInput (event) {
spanEl.textContent = event.currentTarget.value.trim();
if (event.currentTarget.value.trim() === "") {
  spanEl.textContent = "Anonymous";
}
}
