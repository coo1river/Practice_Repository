const button = document.querySelector(".lottoBtn");
const list = document.querySelector(".btnList");

const lottoArray = [];
const createNumber = function () {
  const randomNum = parseInt(Math.random() * 45 + 1);
  if (!lottoArray.includes(randomNum)) {
    lottoArray.push(randomNum);
  }
};

button.addEventListener("click", () => {
  createNumber();
  const createBall = document.createElement("li");
  createBall.innerText = lottoArray[lottoArray.length - 1];
  list.appendChild(createBall);
  if (list.querySelectorAll("li").length === 6) {
    button.disabled = true;
  }
});
