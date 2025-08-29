// Definiramo vprašanja in pravilne odgovore v objektu
const questions = [
  {
    question: "Kdo ima nekje hrano, ampak si je nikoli ne vzame sam/-a?",
    answer: "Piki",
  },
  {
    question: "Kje ima Piki spravljeno hrano? Ko to najdeš, boš v vreči s Pikijevimi vitaminčki našel listek. V besedilno polje napiši, kar piše na njem.",
    answer: "radi",
  },
  {
    question: "Kje shranjujemo elektroniko, ki je ne uporabljamo zmeraj? Pojdi tja in notri boš našel listek. V besedilno polje napiši, kar piše na njem.",
    answer: "te",
  },
  {
    question: "Pod napravo, ki trenutno edina meri svetlost v sobi, boš našel še en listek. V besedilno polje napiši, kar piše na njem.",
    answer: "imamo",
  },
];

// Določimo spremenljivko za trenutno vprašanje
let currentQuestionIndex = 0;

// Pridobimo elemente iz HTML-ja
const questionEl = document.getElementById("question");
const answerInputEl = document.getElementById("answer-input");
const submitBtnEl = document.getElementById("submit-btn");
const resultMessageEl = document.getElementById("result-message");

// Funkcija za prikaz vprašanja
function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    // Pokažemo naslednje vprašanje
    questionEl.textContent = questions[currentQuestionIndex].question;
    answerInputEl.value = ""; // Počistimo vnosno polje
    resultMessageEl.textContent = ""; // Počistimo sporočilo
  } else {
    // Kviz je končan
    questionEl.textContent = "Tvoje darilo se skriva...";
    answerInputEl.style.display = "none"; // Skrijemo vnosno polje
    submitBtnEl.style.display = "none"; // Skrijemo gumb
    resultMessageEl.style.display = "none";
  }
}

// Funkcija za preverjanje odgovora
function checkAnswer() {
  const userAnswer = answerInputEl.value.trim().toLowerCase(); // Prilagodimo odgovor
  const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    resultMessageEl.textContent = "Pravilen odgovor!";
    resultMessageEl.style.color = "green";
    currentQuestionIndex++; // Gremo na naslednje vprašanje
  } else {
    resultMessageEl.textContent = "Napačen odgovor. Poskusite znova.";
    resultMessageEl.style.color = "red";
  }

  // Počakamo malo preden pokažemo naslednje vprašanje
  setTimeout(displayQuestion, 1500);
}

// Dodamo poslušalca dogodkov (event listener) na gumb
submitBtnEl.addEventListener("click", checkAnswer);

answerInputEl.addEventListener('keydown', function(e) {
  // Preverimo, ali je pritisnjena tipka 'Enter'
  if (e.key === "Enter") {
    checkAnswer();
  }
});

/*function handleKeyDown(e) {
  // Tipka je bila pritisnena
  console.log("Tipka", e.keyCode);
  if(e.keyCode === 13){
    submitBtnEl.addEventListener(checkAnswer);
  }
}
*/

// Prikaz prvega vprašanja ob zagonu
displayQuestion();

