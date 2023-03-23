const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener('input', onChangeFontSize)

function onChangeFontSize (event) {
    const input = event.currentTarget;
    spanEl.style.fontSize = `${input.value}px`
}