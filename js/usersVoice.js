// local reviews data
const voices = [
    {
        id: 1,
        userName: '山田　花子',
        voiceTitle: 'Cooking is Fun!',
        img: '../img/person-1.png',
        text: "レシピラボのおかげで、色々なところに保存していたレシピを一元管理できるようになって、本当に楽になったわ！",
    },
    {
        id: 2,
        userName: '田中　太郎',
        voiceTitle: 'オリジナル料理のリパートリーが増えた！',
        img: '../img/person-2.png',
        text: '試行錯誤の結果、超絶品のBBQソースの開発に成功！レシピラボで、色々な案を試せたし、試す過程も記録ができたから効率的に味の研究ができたよ！',
    },
    {
        id: 3,
        userName: '高橋　なな',
        voiceTitle: '夫にも家庭料理を簡単に引き継げた',
        img: '../img/person-3.png',
        text: '私の出張中、夫に私のレシピを簡単に引き継げたので、アレルギー持ちの息子の食事も問題なく用意してもらえました！',
    }
];

// select items
const img = document.getElementById('person-img');
const userName = document.getElementById('userName');
const voiceTitle = document.getElementById('voiceTitle');
const voiceDetail = document.getElementById('voiceDetail');

const uPrevBtn = document.querySelector('.prev-btn');
const uNextBtn = document.querySelector('.next-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    showPerson();
});

// show person based on item
function showPerson() {
    const item = voices[currentItem];
    // console.log({item});
    img.src = item.img;
    userName.textContent = item.userName;
    voiceTitle.textContent = item.voiceTitle;
    voiceDetail.textContent = item.text;
}

// show next person
uNextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > voices.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

// show prev person
uPrevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
    currentItem = voices.length - 1;
    }
    showPerson();
});