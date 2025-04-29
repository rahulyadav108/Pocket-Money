// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Login function
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Admin Login Check
    if (email === "Rahul Yadav" && password === "@Rahul7044") {
        alert("Admin Login Successful!");
        window.location.href = "admin.html";  // Redirect to admin panel
        return;
    }

    // User Login Firebase
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("User Login Successful!");
            window.location.href = "dashboard.html"; // Redirect to user dashboard
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Show register form
function showRegister() {
    document.getElementById('registerSection').style.display = 'block';
}

// Register function
function register() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Registration Successful!");
        })
        .catch((error) => {
            alert(error.message);
        });
}
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const auth = getAuth();
const provider = new GoogleAuthProvider();

document.getElementById("google-login").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert("Welcome, " + user.displayName);
      // Redirect to user dashboard
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error(error.message);
      alert("Google Sign-In failed.");
    });
});

