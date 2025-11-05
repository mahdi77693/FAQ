const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const icons = document.querySelectorAll(".icon img");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    answers.forEach((answer, index) => {
      if (index !== i) {
        answer.classList.remove("show-answer");
        icons[index].src = "/my-app/src/assets/icon-plus.svg";
      }
    });
    answers[i].classList.toggle("show-answer");
    if (answers[i].classList.contains("show-answer")) {
      icons[i].src = "/my-app/src/assets/icon-minus.svg";
    } else {
      icons[i].src = "/my-app/src/assets/icon-plus.svg";
    }
  });
}
