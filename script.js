const quiz = {
  name: "鬼滅之刃",
  correct: "images/kimetsu1.jpg",
  options: [
    "images/kimetsu1.jpg",
    "images/naruto1.jpg",
    "images/onepiece1.jpg",
    "images/bleach1.jpg"
  ]
};

function loadQuiz() {
  document.getElementById("anime-name").textContent = quiz.name;

  const imgs = document.querySelectorAll(".image-container img");

  imgs.forEach((img, index) => {
    img.src = quiz.options[index];
    img.onclick = () => {
      checkAnswer(img.src === quiz.correct);
    };
  });
}

function checkAnswer(isCorrect) {
  const result = document.getElementById("result");

  if (isCorrect) {
    result.textContent = "🎉 答對了！";
    result.style.color = "green";
  } else {
    result.textContent = "❌ 答錯了！";
    result.style.color = "red";
  }
}

loadQuiz();
