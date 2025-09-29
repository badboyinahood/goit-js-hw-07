// Порахує кількість категорій та для кожної виведе заголовок і кількість елементів
const items = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector("h2")?.textContent ?? "";
  const count = item.querySelectorAll("ul li").length;
  console.log(`Category: ${title}\nElements: ${count}`);
});
