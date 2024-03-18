// firebaseApikey.jsからexportされているオブジェクトを
// main.jsでfirebaseConfigという変数名で取り扱うよ、という記述。
import firebaseConfig from "./firebaseApikey.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged }
            from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const app = initializeApp(firebaseConfig);

// Google Auth(認証用)
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const auth = getAuth();

// login処理
    $(".socialBtn1").on("click", function() {
        // google認証完了後の処理
        signInWithPopup(auth, provider).then((result) => {
            // login後のページ遷移
            location.href = "memo_app.html"; //遷移先
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;

            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
        })
    })