const questions = [
  { id: 1, question: "Question 1: The capital of India?", options: ["New Delhi", "Mumbai", "Chennai", "Kolkata"], correctAnswer: "New Delhi" },
  { id: 2, question: "Question 2: Who is the inventor of the telephone?", options: ["Tesla", "Bell", "Edison", "Newton"], correctAnswer: "Bell" },
  { id: 3, question: "Question 3: What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], correctAnswer: "100°C" },
  { id: 4, question: "Question 4: Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], correctAnswer: "Mars" },
  { id: 5, question: "Question 5: Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens", "Tolstoy", "Austen"], correctAnswer: "Shakespeare" },
  { id: 6, question: "Question 6: What year did WW2 end?", options: ["1945", "1939", "1918", "1960"], correctAnswer: "1945" },
  { id: 7, question: "Question 7: What is 9×9?", options: ["81", "72", "99", "90"], correctAnswer: "81" },
  { id: 8, question: "Question 8: What is the chemical symbol for Gold?", options: ["Au", "Ag", "Gd", "Go"], correctAnswer: "Au" },
  { id: 9, question: "Question 9: What’s the largest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], correctAnswer: "Pacific" },
  { id: 10, question: "Question 10: What programming language is this app likely built in?", options: ["C++", "Python", "JavaScript", "Ruby"], correctAnswer: "JavaScript" },
  //... Add more questions up to 30 if needed
];

let currentQuestionIndex = 0;
const answers = {};
const totalTime = 30 * 60 * 1000; // 30 minutes in ms
let timerInterval;
let tabSwitchCount = 0;

const questionContainer = document.getElementById('questionContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const jumpContainer = document.getElementById('jumpContainer');
const timerDisplay = document.getElementById('timer');

/** Render question and options */
function renderQuestion() {
  const q = questions[currentQuestionIndex];
  let html = `<h3>${q.question}</h3><ul class="options">`;
  q.options.forEach(opt => {
    const checked = answers[q.id] === opt ? 'checked' : '';
    html += `<li><label><input type="radio" name="option" value="${opt}" ${checked} /> ${opt}</label></li>`;
  });
  html += "</ul>";
  questionContainer.innerHTML = html;

  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.disabled = currentQuestionIndex === questions.length - 1;

  updateJumpButtons();
}

/** Save answer for current question */
function saveAnswer() {
  const selectedOption = document.querySelector('input[name=option]:checked');
  if (selectedOption) {
    answers[questions[currentQuestionIndex].id] = selectedOption.value;
  }
}

/** Update jump buttons and mark answered ones as grey */
function updateJumpButtons() {
  jumpContainer.innerHTML = '';
  questions.forEach((q, i) => {
    const btn = document.createElement('button');
    btn.className = 'jump-btn';
    if (i === currentQuestionIndex) btn.classList.add('active');
    if (answers[q.id]) btn.classList.add('attempted'); // Mark answered question buttons
    btn.textContent = i + 1;
    btn.addEventListener('click', () => {
      saveAnswer();
      currentQuestionIndex = i;
      renderQuestion();
    });
    jumpContainer.appendChild(btn);
  });
}

/** Timer and auto-submit logic */
function startTimer() {
  const startTime = Number(localStorage.getItem('testStartTime'));
  if (!startTime) {
    alert('Test start time not found. Redirecting to instructions.');
    window.location.href = 'instructions.html';
    return;
  }
  timerInterval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const remaining = totalTime - elapsed;

    if (remaining <= 0) {
      timerDisplay.textContent = 'Time Left: 00:00';
      clearInterval(timerInterval);
      alert('Time up! Test will be submitted automatically.');
      submitTest();
      return;
    }
    const mins = Math.floor(remaining / 60000);
    const secs = Math.floor((remaining % 60000) / 1000);
    timerDisplay.textContent = `Time Left: ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }, 1000);
}

/** Monitor tab switches */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    tabSwitchCount++;
    if (tabSwitchCount > 3) {
      alert('Exceeded max allowed tab switches. Submitting test.');
      submitTest();
    } else {
      alert(`Warning: Tab switch detected (${tabSwitchCount}/3)`);
    }
  }
});

/** Submit test: save answers, score, time taken */
async function submitTest() {
  saveAnswer();
  clearInterval(timerInterval);

  let score = 0;
  for (const q of questions) {
    if (answers[q.id] === q.correctAnswer) score += 4;
  }

  const startTime = Number(localStorage.getItem('testStartTime'));
  const timeTakenMinutes = Math.floor((Date.now() - startTime) / 60000);

  try {
    const { getFirestore, doc, updateDoc } = await import("https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js");
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js");

    const firebaseConfig = {
      apiKey: "AIzaSyDzsZ6oLvhb1Utlf-u9vp4OYic6smCGNLs",
      authDomain: "mlsa-test.firebaseapp.com",
      projectId: "mlsa-test",
      storageBucket: "mlsa-test.firebasestorage.app",
      messagingSenderId: "396133928089",
      appId: "1:396133928089:web:fc41f74d4c12da053c7c08",
      measurementId: "G-07ZGVSSVJ5"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const rollNo = prompt("Please enter your Roll No to submit:");
    if (!rollNo) {
      alert("Roll no is required to submit.");
      return;
    }

    const userRef = doc(db, "users", rollNo);
    await updateDoc(userRef, {
      answers,
      score,
      time_taken: timeTakenMinutes,
      submitted: true
    });

    alert(`Test submitted successfully!\n`);
    window.location.href = 'index.html';  // Redirect to login page

  } catch (error) {
    console.error("Error submitting test:", error);
    alert("Failed to submit test. Please try again.");
  }
}

prevBtn.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    saveAnswer();
    currentQuestionIndex--;
    renderQuestion();
  }
});
nextBtn.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length - 1) {
    saveAnswer();
    currentQuestionIndex++;
    renderQuestion();
  }
});
submitBtn.addEventListener('click', () => {
  if (confirm("Are you sure you want to submit the test?")) {
    submitTest();
  }
});

// Initializations
renderQuestion();
startTimer();
