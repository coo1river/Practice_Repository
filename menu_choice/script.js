const button = document.querySelector(".btn_add");
const addMenu = document.querySelector(".menu_list");
const input = document.querySelector("input");

button.addEventListener("click", () => {
  const menuList = document.createElement("li");
  menuList.textContent = input.value;
  addMenu.appendChild(menuList);

  input.value = "";
});
