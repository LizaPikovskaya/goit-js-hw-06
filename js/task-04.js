const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

btnDecrementEl.addEventListener("click", onDecrementClick);
btnIncrementEl.addEventListener("click", onIncrementClick);

let counterValue = 0;

function onIncrementClick(event) {
    counterValue += 1;
    value.textContent = counterValue;
}

function onDecrementClick(event) {
  counterValue -= 1;
  value.textContent = counterValue;
}

