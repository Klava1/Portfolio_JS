const btn = document.querySelector(".btn");
const result = document.querySelector(".show");
const interpretation = document.querySelector(".interpretation");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let score = 0;
  let allQuestionsAnswered = true;

  const questions = document.querySelectorAll(".question");
  for (let i = 0; i < questions.length; i++) {
    const selectedAnswer = questions[i].querySelector(
      "input[type='radio']:checked"
    );
    if (selectedAnswer) {
      score += parseInt(selectedAnswer.value, 10);
    } else {
      allQuestionsAnswered = false;
      break;
    }
  }
  if (!allQuestionsAnswered) {
    Swal.fire({
      icon: "warning",
      title: "Please answer all the questions!",
    });
  } else {
    console.log(score);
    result.textContent = "Your total score is: " + score;
    interpretation.style.display = "block";
  }

  const doneRadioButtons = document.querySelectorAll("input[type='radio']");
  for (let i = 0; i < doneRadioButtons.length; i++) {
    doneRadioButtons[i].checked = false;
  }
});

gsap.from("h1", { opacity: 0, y: 100, duration: 1 });
gsap.from(".question", {
  opacity: 0,
  y: 100,
  duration: 1,
  scaleX: 0,
  scaleY: 0,
});
gsap.from(".btn", { opacity: 0, y: 100, duration: 1.2, scaleX: 0, scaleY: 0 });

