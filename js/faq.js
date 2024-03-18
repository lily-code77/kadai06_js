//using selectors inside the element
const questions = document.querySelectorAll(".question");

// console.log({questions});
questions.forEach(function (question) {
    // クリックされたquestionのボタン
    const btn = question.querySelector(".question-btn");
    // console.log({btn});

    btn.addEventListener("click", function () {
        // console.log({question});

        // itemはquestions内の一つずつのquestion
        questions.forEach(function (item) {
            // console.log({item});
        if (item !== question) {
            item.classList.remove("show-answer");
        }
        });

        question.classList.toggle("show-answer");
    });
});
