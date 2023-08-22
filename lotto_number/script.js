const button = document.querySelector(".lotto_btn");
const list = document.querySelector(".btn_list");

const createNumber = function () {
  let lottoArr = [];
  while (lottoArr.length < 6) {
    const randomNum = parseInt(Math.random() * 45 + 1);
    if (!lottoArr.includes(randomNum)) {
      lottoArr.push(randomNum);
    }
  }
  return lottoArr;
};

let lottoArr;
let btnCount = 0;
button.addEventListener("click", () => {
  if (list.querySelectorAll("li").length === 0) {
    lottoArr = createNumber();
  }
  const createBall = document.createElement("li");
  createBall.textContent = lottoArr[btnCount];
  list.appendChild(createBall);
  btnCount++;

  if (list.querySelectorAll("li").length === 6) {
    button.textContent = "RESET";
    button.classList.add("reset");

    const reset = document.querySelector(".reset");

    const fun = () => {
      while (list.firstChild) {
        list.firstChild.remove();
      }

      button.textContent = "PUSH";
      button.classList.remove("reset");
      btnCount = 0;
      reset.removeEventListener("click", fun);
    };
    reset.addEventListener("click", fun);
  }
});
