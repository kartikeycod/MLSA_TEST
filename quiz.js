
const questions = [
  { id: 1, question: "A man saves ₹480 every month. After saving for 6 months, he invests half of his total savings at 10% p.a. for 2 years. Find the interest earned.", options: ["₹288", "₹144", "₹240", "₹120"], correctAnswer: "₹288" },

  { id: 2, question: "The average of 8 numbers is 15. If one number is removed, the average becomes 14. Find the number removed.", options: ["20", "22", "14", "21"], correctAnswer: "22" },

  { id: 3, question: "A train passes a platform 200 m long in 30 seconds and a man standing on the platform in 18 seconds. Find the length of the train.", options: ["150 m", "180 m", "300 m", "120 m"], correctAnswer: "300 m" },

  { id: 4, question: "A sum of money doubles itself in 8 years at simple interest. Find the rate of interest per annum.", options: ["12.5%", "15%", "10%", "20%"], correctAnswer: "12.5%" },

  { id: 5, question: "Two pipes can fill a tank in 10 minutes and 15 minutes respectively. A third pipe empties it in 30 minutes. How long will it take to fill the tank if all three are opened together?", options: ["8 min", "7.5 min", "10 min", "12 min"], correctAnswer: "7.5 min" },

  { id: 6, question: "If 40% of A = 50% of B, find A : B.", options: ["4 : 5", "5 : 4", "2 : 3", "3 : 2"], correctAnswer: "5 : 4" },

  { id: 7, question: "Pointing to a man, a woman says: 'He is the son of the only son of my father.' How is the man related to the woman?", options: ["Son", "Nephew", "Brother", "Cousin"], correctAnswer: "Nephew" },

  { id: 8, question: "A can finish a work in 18 days, B is 50% more efficient than A. In how many days can B finish it?", options: ["9", "12", "10", "15"], correctAnswer: "12" },

  { id: 9, question: "If 12 workers can make 480 toys in 8 days, how many toys can 18 workers make in 6 days?", options: ["540", "600", "810", "720"], correctAnswer: "540" },

  { id: 10, question: "A milkman adds water to milk in the ratio 3:1 and sells at cost price. Find his gain percent.", options: ["20%", "25%", "30%", "33⅓%"], correctAnswer: "33⅓%" },

  { id: 11, question: "A and B can complete a task in 12 and 18 days respectively. They start together, but A leaves after 3 days. In how many more days will B complete the remaining work?", options: ["8", "10", "12", "9"], correctAnswer: "9" },

  { id: 12, question: "The simple interest on ₹2500 for 4 years at 8% per annum is equal to compound interest on ₹2000 for 2 years at the same rate. Find the CI.", options: ["₹320", "₹324.8", "₹330", "₹315"], correctAnswer: "₹324.8" },

  { id: 13, question: "The ratio of two numbers is 3:5. If 10 is subtracted from each, the ratio becomes 1:2. Find the numbers.", options: ["15, 25", "30, 50", "20, 30", "35, 55"], correctAnswer: "15, 25" },

  { id: 14, question: "A train running at 72 km/h passes a platform in 30 seconds and a man in 18 seconds. Find the length of the platform.", options: ["180 m", "240 m", "300 m", "360 m"], correctAnswer: "240 m" },

  { id: 15, question: "The sum of three consecutive even numbers is 222. Find the numbers.", options: ["72, 74, 76", "74, 76, 78", "70, 72, 74", "68, 70, 72"], correctAnswer: "74, 76, 78" },

  { id: 16, question: "If the cost price of 12 articles equals selling price of 9 articles, find the gain %. ", options: ["20%", "25%", "33⅓%", "40%"], correctAnswer: "33⅓%" },

  { id: 17, question: "Two pipes fill a tank in 20 and 30 minutes. A waste pipe empties it in 60 minutes. If all opened together, find the filling time.", options: ["10 min", "12 min", "15 min", "18 min"], correctAnswer: "12 min" },

  { id: 18, question: "Average of 7 students decreases by 3 when one student's 72 marks are replaced by 48. Find new average.", options: ["63", "60", "66", "69"], correctAnswer: "60" },

  { id: 19, question: "A sum becomes ₹2420 in 2 years and ₹2662 in 3 years at CI. Find the rate.", options: ["8%", "9%", "10%", "12%"], correctAnswer: "10%" },

  { id: 20, question: "A tower is 50 m high. Angle of depression of a car changes from 30° to 60° as it approaches. Distance travelled?", options: ["57.7 m", "86.6 m", "100 m", "43.3 m"], correctAnswer: "86.6 m" },

  { id: 21, question: "Find the total number of diagonals in a polygon with 12 sides.", 
    options: ["54", "60", "66", "72"], 
    correctAnswer: "54" 
  },

  { id: 22, question: "A card is drawn from a deck of 52 cards. Find the probability of getting a king or a heart.", 
    options: ["4/13", "17/52", "16/52", "13/52"], 
    correctAnswer: "4/13" 
  },

  { id: 23, question: "In a mixture of 60 litres where milk:water = 2:1, how much water should be added to make ratio 1:1?", 
    options: ["10 L", "15 L", "20 L", "30 L"], 
    correctAnswer: "20 L" 
  },

  { id: 24, question: "A number when divided by 7 gives remainder 5. What will be the remainder when its square is divided by 7?", 
    options: ["4", "3", "2", "1"], 
    correctAnswer: "4" 
  },

  { id: 25, question: "If 3 log₁₀2 + 2 log₁₀3 = x, find x.", 
    options: ["log₁₀24", "log₁₀12", "log₁₀18", "log₁₀72"], 
    correctAnswer: "log₁₀72" 
  },

  { id: 26, question: "The sum of digits of a two-digit number is 12. Reversing digits increases number by 18. Find the number.", 
    options: ["57", "66", "84", "93"], 
    correctAnswer: "57" 
  },

  { id: 27, question: "A cube’s side is increased by 10%. Find the % increase in volume.", 
    options: ["30%", "33.1%", "10%", "25%"], 
    correctAnswer: "33.1%" 
  },

  { id: 28, question: "In how many ways can 5 identical balls be placed into 3 different boxes?", 
    options: ["15", "18", "21", "20"], 
    correctAnswer: "21" 
  },

  { id: 29, question: "A 3-digit number has sum of digits = 9. Adding 198 reverses its digits. Find the number.", 
    options: ["234", "252", "333", "324"], 
    correctAnswer: "234" 
  },

  { id: 30, question: "In how many ways can the letters of MATHEMATICS be arranged?", 
    options: ["4989600", "498960", "990", "2494800"], 
    correctAnswer: "4989600" 
  },

];

let currentQuestionIndex = 0;
const answers = {};
const totalTime = 40 * 60 * 1000; // 40 minutes
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

/** Update jump buttons */
function updateJumpButtons() {
  jumpContainer.innerHTML = '';
  questions.forEach((q, i) => {
    const btn = document.createElement('button');
    btn.className = 'jump-btn';
    if (i === currentQuestionIndex) btn.classList.add('active');
    if (answers[q.id]) btn.classList.add('attempted');
    btn.textContent = i + 1;
    btn.addEventListener('click', () => {
      saveAnswer();
      currentQuestionIndex = i;
      renderQuestion();
    });
    jumpContainer.appendChild(btn);
  });
}

/** Timer */
function startTimer() {
  const startTime = Number(localStorage.getItem('testStartTime'));
  if (!startTime || isNaN(startTime)) {
    alert('Test start time missing or invalid. Please restart the test.');
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

/** Submit test */
async function submitTest() {
  saveAnswer();
  clearInterval(timerInterval);

  let score = 0;
  for (const q of questions) {
    if (answers[q.id] === q.correctAnswer) score += 4;
  }

  const startTime = Number(localStorage.getItem('testStartTime'));
  if (!startTime || isNaN(startTime)) {
    alert('Test start time missing or invalid when submitting. Please restart the test.');
    window.location.href = 'instructions.html';
    return;
  }
  
  // Calculate time taken
  const timeTakenMs = Date.now() - startTime;
  const mins = Math.floor(timeTakenMs / 60000);
  const secs = Math.floor((timeTakenMs % 60000) / 1000);
  const formattedTime = `${mins}m ${secs}s`;

  console.log("Submitting:", { answers, score, formattedTime });

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
      time_taken: formattedTime, // ✅ human-readable time
      submitted: true
    });

    alert(`Test submitted successfully!`);
    window.location.href = 'conclusion.html';

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

// Initial load
renderQuestion();
startTimer();

