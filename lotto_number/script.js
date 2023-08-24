const button = document.querySelector(".lotto_btn");
const list = document.querySelector(".num_list");

let lottoArr = [];
const createNumber = function () {
  let current_length = lottoArr.length + 1;
  while (lottoArr.length < current_length) {
    const randomNum = parseInt(Math.random() * 45 + 1);
    if (!lottoArr.includes(randomNum)) {
      lottoArr.push(randomNum);
    }
  }
};

const push = button.addEventListener("click", () => {
  button.textContent = "PUSH";
  if (lottoArr.length < 6) {
    createNumber();
    console.log(lottoArr);
    console.log(lottoArr[lottoArr.length - 1]);
    const createBall = document.createElement("li");
    createBall.textContent = lottoArr[lottoArr.length - 1];
    list.appendChild(createBall);
  } else if (lottoArr.length === 6) {
    button.textContent = "RESET";
    lottoArr.length = 0;
    list.innerHTML = "";
  }
});
