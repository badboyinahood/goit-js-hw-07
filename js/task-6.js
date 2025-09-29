function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("#controls input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.btnCreate.addEventListener("click", onCreate);
refs.btnDestroy.addEventListener("click", destroyBoxes);

function onCreate() {
  const amount = Number(refs.input.value);
  // валідація 1..100
  if (!Number.isInteger(amount) || amount < 1 || amount > 100) return;

  // замінюємо попередню колекцію
  destroyBoxes();
  createBoxes(amount);
  refs.input.value = "";
}

function createBoxes(amount) {
  const elems = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.className = "box";
    elems.push(div);
    size += 10;
  }

  refs.boxes.append(...elems); // одна операція додавання
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}
