// firebaseApikey.jsからexportされているオブジェクトを
// main.jsでfirebaseConfigという変数名で取り扱うよ、という記述。
// firebase名　"test"
import firebaseConfig from "./authFirebaseApikey.js";
// import firebaseConfig from "./testFirebaseApikey.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, push, set, onChildAdded }
    from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db, "authexample");

//Saveボタンのクリックイベントの作成
let editedRecipe = "";

$("#save").on("click", function() {
    editedRecipe = $(".textedImg").val();

    console.log({editedRecipe});
    const fixedRecipe = {
        name: $("#recipeName").val(),
        recipe: editedRecipe
    }
    const newPostRef = push(dbRef);
    set(newPostRef, fixedRecipe);
    $("#recipeName").val("");
    $(".textedImg").val("");
    $(".preview").html("");
    $("#input").val("");
})

// firebaseに保存したレシピをマイレシピ集として画面に表示する
//最初のデータ取得＆onSnapshotでリアルタイムにデータを取得

onChildAdded(dbRef, function(data) {
    const newRecipe = data.val();

    const output = 
        '<li class="list">' +
        // 画像(p141)
        '<h3 class="title">' +
        newRecipe.name +
        '</h3>' +
        '<p class="content">' +
        newRecipe.recipe +
        '</p>' +
        '</li>';

    $('.item').append(output);
})