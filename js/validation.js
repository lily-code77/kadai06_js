let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    logIn = id("logIn"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

logIn.addEventListener("submit", (e) => {
    // form要素に送信先が指定されていない場合、現在のURLに対してフォームの内容を送信する。（submitイベントの本来の動作を止める）
    //Firebaseを設定したら消したほうがいいかも
    e.preventDefault();

    engine(username, 0, "Enter Your Username");
    engine(email, 1, "Enter Your Email");
    engine(password, 2, "Enter Your Password");
});

let engine = (id, index, message) => {
    if (id.value.trim() === "") {
        errorMsg[index].innerHTML = message;
        id.style.border = "2px solid red";
        failureIcon[index].style.opacity = "1";
        successIcon[index].style.opacity = "0";
    }
    else {
        errorMsg[index].innerHTML = "";
        id.style.border = "2px solid green";
        failureIcon[index].style.opacity = "0";
        successIcon[index].style.opacity = "1";
    }
};
