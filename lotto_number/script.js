const pushBtn = document.querySelector(".lotto_btn");
const list = document.querySelector(".num_list");

const lottoArr = [];
const createNumber = function () {
  let current_length = lottoArr.length + 1;
  while (lottoArr.length < current_length) {
    const randomNum = parseInt(Math.random() * 45 + 1);
    if (!lottoArr.includes(randomNum)) {
      lottoArr.push(randomNum);
    }
  }
};

const resetNumber = () => {
  if (lottoArr.length === 6) {
    pushBtn.textContent = "RESET";
  }
};

const pushNumber = () => {
  pushBtn.textContent = "PUSH";
  list.style.display = "flex";

  if (lottoArr.length < 6) {
    createNumber();
    const createBall = document.createElement("li");
    createBall.textContent = lottoArr[lottoArr.length - 1];
    list.appendChild(createBall);
  } else {
    const resetConfirm = confirm("리셋하시겠습니까?");
    if (resetConfirm === true) {
      lottoArr.length = 0;
      list.innerHTML = "";
    }
  }
};

pushBtn.addEventListener("click", () => {
  pushNumber();
  resetNumber();
});
