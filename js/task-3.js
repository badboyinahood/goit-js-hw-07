const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  const val = e.currentTarget.value.trim();
  output.textContent = val ? val : "Anonymous";
});
