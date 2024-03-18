// local reviews data
const voices = [
    {
        id: 1,
        userName: 'susan smith',
        voiceTitle: 'Cooking is Fun!',
        img: '../img/person-1.png',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        userName: 'anna johnson',
        voiceTitle: 'Cooking is Fun2',
        img: '../img/person-1.png',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        userName: 'peter jones',
        voiceTitle: 'Cooking is Fun3',
        img: '../img/person-1.png',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        userName: 'bill anderson',
        voiceTitle: 'Cooking is Fun4',
        img: '../img/person-1.png',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
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