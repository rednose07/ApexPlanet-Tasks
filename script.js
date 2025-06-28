const questionElement = document.getElementById("question");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const totalQuestionsElement = document.getElementById("total-questions");
const quizButtonsDiv = document.getElementById("quiz-buttons");
const restartQuizBtn = document.getElementById("restart-quiz-btn");

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  { q: "The capital of France is Paris?", a: true },
  { q: "Water boils at 100 degrees Celsius at sea level?", a: true },
  { q: "The sun is a planet?", a: false },
  { q: "HTML is a programming language?", a: false },
  { q: "JavaScript is primarily used for styling web pages?", a: false }
];

totalQuestionsElement.textContent = questions.length;

function loadQuestion() {
  if (currentQuestionIndex < questions.length) {
    questionElement.textContent = questions[currentQuestionIndex].q;
    feedbackElement.textContent = "";
    quizButtonsDiv.style.display = 'block';
    restartQuizBtn.style.display = 'none'; 
  } else {
    questionElement.textContent = "Quiz complete! Your final score is " + score + " out of " + questions.length + ".";
    feedbackElement.textContent = "";
    quizButtonsDiv.style.display = 'none';
    restartQuizBtn.style.display = 'block';
  }
}

function checkAnswer(userAnswer) {
  if (currentQuestionIndex < questions.length) {
    const correctAnswer = questions[currentQuestionIndex].a;

    if (userAnswer === correctAnswer) {
      feedbackElement.textContent = "Correct!";
      feedbackElement.className = "correct"; 
      score++;
    } else {
      feedbackElement.textContent = "Incorrect. The correct answer was " + (correctAnswer ? "True" : "False") + ".";
      feedbackElement.className = "incorrect";
    }
    scoreElement.textContent = score; 
    setTimeout(() => {
      currentQuestionIndex++;
      loadQuestion();
    }, 1000); 
  }
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.textContent = score;
  loadQuestion();
}


loadQuestion();


const carouselImg = document.getElementById("carousel-img");
const imageCaption = document.getElementById("image-caption");

const images = [
  { src: "https://hips.hearstapps.com/hmg-prod/images/living-room-2-left-663155189da31.jpg", caption: "Cozy living room interior." },
  { src: "https://taleof2backpackers.com/wp-content/uploads/2021/08/Aru-Valley-Travel-Guide-1.jpg", caption: "A vibrant mountain landscape." },
  { src: "https://static.vecteezy.com/system/resources/previews/027/381/151/large_2x/sunrise-silhouette-of-howrah-bridge-a-suspended-span-over-the-hooghly-river-in-west-bengal-free-photo.jpg", caption: "Calm lake at sunset." },
  { src: "https://i.ytimg.com/vi/vsI_pKNcgeQ/maxresdefault.jpg", caption: "Busy city street at night." }
];
let currentImageIndex = 0;

function showImage(index) {
    carouselImg.src = images[index].src;
    imageCaption.textContent = images[index].caption;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}


showImage(currentImageIndex);


const jokeElement = document.getElementById("joke");
const jokeLoadingElement = document.getElementById("joke-loading");
const jokeErrorElement = document.getElementById("joke-error");

async function getJoke() {
  jokeElement.textContent = "";
  jokeErrorElement.style.display = 'none'; 
  jokeLoadingElement.style.display = 'block'; 

  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    jokeElement.textContent = `${data.setup} - ${data.punchline}`;
  } catch (error) {
    console.error("Error fetching joke:", error);
    jokeErrorElement.style.display = 'block'; 
    jokeElement.textContent = " "; 
  } finally {
    jokeLoadingElement.style.display = 'none';
  }
}