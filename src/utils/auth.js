// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// конфігурація firebase
const firebaseConfig = {
  apiKey: "AIzaSyC2173I29I-aXqVOciuKX7RDD1A6thezXk",
  authDomain: "clocktime-test.firebaseapp.com",
  projectId: "clocktime-test",
  storageBucket: "clocktime-test.appspot.com",
  messagingSenderId: "249002576332",
  appId: "1:249002576332:web:5e588a45a35fc93143b569",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// посилання на елементи
const loginButton = document.querySelector("#login-button");
const logoutButton = document.querySelector("#logout-button");
const signUpButton = document.querySelector(".sign_up");
const userIcon = document.querySelector(".user-icon");
let userData;
// отримуємо стан авторизації юзера

auth.onAuthStateChanged((user) => {
  if (user) {
    const savedUserData = localStorage.getItem("user");
    if (savedUserData) {
      userData = JSON.parse(savedUserData);
    }
    loginButton.style.display = "none";
    logoutButton.style.display = "block";
    userIcon.style.display = "block";
    signUpButton.style.display = "none";
    userIcon.src = userData.photoURL;
  } else {
    loginButton.style.display = "block";
    logoutButton.style.display = "none";
    userIcon.style.display = "none";
    signUpButton.style.display = "block";
  }
});

// перевіряємо навність даних в localstorage

// обробник події кліку увійти
loginButton.addEventListener("click", (e) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("Авторизація користувача", user);
      localStorage.setItem("user", JSON.stringify(user));
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error("Помилка авторизації", errorMessage);
    });
});
// обробник події по кліку вийти
logoutButton.addEventListener("click", (e) => {
  signOut(auth)
    .then(() => {
      console.log("Користувач вийшов");
      localStorage.removeItem("user");
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error(errorMessage);
    });
});
