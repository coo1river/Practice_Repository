const button = document.querySelector(".lottoBtn");
const list = document.querySelector(".btnList");

const lottoArr = [];
const createNumber = function () {
  while (lottoArr.length < 6) {
    const randomNum = parseInt(Math.random() * 45 + 1);
    if (!lottoArr.includes(randomNum)) {
      lottoArr.push(randomNum);
    }
  }
};

createNumber();
console.log(lottoArr);

let btnCount = 0;
button.addEventListener("click", () => {
  const createBall = document.createElement("li");
  createBall.innerText = lottoArr[btnCount];
  btnCount++;
  list.appendChild(createBall);
  if (list.querySelectorAll("li").length === 6) {
    button.disabled = true;
  }
});
