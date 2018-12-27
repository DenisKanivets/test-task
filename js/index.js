let start = document.getElementById('start');
let again = document.getElementById('again');
let content = document.getElementById('content');
let arrCardsClass = ['heart', 'diamond', 'club', 'spade'];

let startGame = function () {
    start.style.display = 'none';
    again.style.display = 'inline-block';
    let showField = document.createElement('table');
    content.appendChild(showField);
    for (let i = 0; i < 7; i++) {
        let showTr = document.createElement('tr');
        showField.appendChild(showTr);
        for (let j = 0; j < 6; j++) {
            let showTd = document.createElement('td');
            let indexOfClass = Math.floor(Math.random() * arrCardsClass.length);
            showTd.className = arrCardsClass[indexOfClass];
            showTr.appendChild(showTd);
        }
    }
};

start.addEventListener('click', startGame);

content.addEventListener('click', function (e) {
    for (let key of arrCardsClass) {
        if (e.target.className === key) {
            let list = content.getElementsByClassName(key);
            for (let item of list) {
                item.style.backgroundImage = 'none';
                item.style.transform = 'scale(1)';
            }
        }
    }
});

again.addEventListener('click', function () {
    content.innerHTML = '';
    startGame();
});