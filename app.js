// Import Firebase initialization and Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDzsZ6oLvhb1Utlf-u9vp4OYic6smCGNLs",
  authDomain: "mlsa-test.firebaseapp.com",
  projectId: "mlsa-test",
  storageBucket: "mlsa-test.firebasestorage.app",
  messagingSenderId: "396133928089",
  appId: "1:396133928089:web:fc41f74d4c12da053c7c08",
  measurementId: "G-07ZGVSSVJ5"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById('userForm');
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const branch = document.getElementById('branch').value.trim();
  const rollNo = document.getElementById('rollNo').value.trim();
  const phone = document.getElementById('phone').value.trim();

  // ✅ Validation Rules
  const emailPattern = /^[a-zA-Z0-9._%+-]+@kiet\.edu$/;
  const phonePattern = /^[0-9]{10}$/;

  if (!name || !email || !branch || !rollNo || !phone) {
    alert('Please fill all fields');
    return;
  }

  if (!emailPattern.test(email)) {
    alert('Enter kiet email');
    return;
  }

  if (!phonePattern.test(phone)) {
    alert('Phone number must be exactly 10 digits');
    return;
  }

  try {
    // Check if user document exists
    const userRef = doc(db, 'users', rollNo);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      alert('User already logged in. Redirecting to instructions...');
      window.location.href = 'instructions.html';
      return;
    }

    // Save new user data
    await setDoc(userRef, {
      name,
      email,
      branch,
      roll_no: rollNo,
      phone,
      answers: {},
      score: 0,
      time_taken: 0,
      submitted: false
    });
    localStorage.setItem("rollNo", rollNo);

    alert('User registered successfully! Redirecting to instructions...');
    window.location.href = 'instructions.html';

  } catch (error) {
    console.error('Error adding user:', error);
    alert('Failed to register user');
  }
});
