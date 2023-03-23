const ulEl = document.querySelector("#categories");
const categoryEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryEl.length}`);

const itemEl = categoryEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
