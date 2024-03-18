// firebaseApikey.jsからexportされているオブジェクトを
// main.jsでfirebaseConfigという変数名で取り扱うよ、という記述。
import firebaseConfig from "./firebaseApikey.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, push, set, onChildAdded }
    from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
