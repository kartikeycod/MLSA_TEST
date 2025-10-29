// ✅ Import Firebase initialization and Firestore modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// ✅ Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzsZ6oLvhb1Utlf-u9vp4OYic6smCGNLs",
  authDomain: "mlsa-test.firebaseapp.com",
  projectId: "mlsa-test",
  storageBucket: "mlsa-test.firebasestorage.app",
  messagingSenderId: "396133928089",
  appId: "1:396133928089:web:fc41f74d4c12da053c7c08",
  measurementId: "G-07ZGVSSVJ5"
};

// ✅ Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Handle Form Submission
const form = document.getElementById("userForm");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Collect input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const branch = document.getElementById("branch").value.trim();
  const rollNo = document.getElementById("rollNo").value.trim();
  const phone = document.getElementById("phone").value.trim();

  // ✅ Validation Patterns
  const emailPattern = /^[a-zA-Z0-9._%+-]+@kiet\.edu$/;
  const phonePattern = /^[0-9]{10}$/;

  // ✅ Basic Validation
  if (!name || !email || !branch || !rollNo || !phone) {
    alert("⚠️ Please fill all fields before proceeding.");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("⚠️ Please use your KIET email (example@kiet.edu).");
    return;
  }

  if (!phonePattern.test(phone)) {
    alert("⚠️ Phone number must be exactly 10 digits.");
    return;
  }

  try {
    // ✅ Check if the roll number already exists in Firestore
    const userRef = doc(db, "users", rollNo);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      // 🚫 User already registered or attempted test
      alert("⚠️ This roll number has already submitted the test. Multiple attempts are not allowed.");
      return;
    }

    // ✅ Otherwise, save the new user data
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

    // ✅ Store roll number locally for session tracking
    localStorage.setItem("rollNo", rollNo);

    alert("✅ Registration successful! Redirecting to instructions...");
    setTimeout(() => {
      window.location.href = "instructions.html";
    }, 1200);

  } catch (error) {
    console.error("❌ Firestore Error:", error);
    alert("❌ Failed to register. Please check your internet connection or try again.");
  }
});
