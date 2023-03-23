const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onValidationBlur);

function onValidationBlur(event) {
  const input = event.currentTarget;
  if (
    Number(event.currentTarget.dataset.length) ===
    event.currentTarget.value.length
  ) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.add("valid");
  }
}
