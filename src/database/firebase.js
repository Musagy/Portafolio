import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfP9zvRCb52UknX7T7CuX6n9hd_ZZcfpI",
  authDomain: "musagywebsite.firebaseapp.com",
  projectId: "musagywebsite",
  storageBucket: "musagywebsite.appspot.com",
  messagingSenderId: "252873523180",
  appId: "1:252873523180:web:6921adc2136cb0eb6f8ac9"
};

const fbApp = initializeApp(firebaseConfig);

export default fbApp