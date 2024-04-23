// controls:
// Ii = inventory
// space = action
// a = card 1
// d = card 2

//functions:
// fight use fight()
// puzzle use puz()
// death use death("death message")

// inventory 
let beaconPcs = 0;
let bullets = 0;
let medkits = 0;

let hth = 100;

let levcomp = [false, false, false, false, false, false]
// to log game completion push these to local storage
function start(lvl, levs) {
    if (levs === true) {
        document.querySelector('.pro').style.display = 'flex';
        document.querySelector('.dia').style.display = 'flex';
        document.querySelector('.lvl').style.display = 'none';
        document.querySelector('.invbut').style.display = 'block';
        document.querySelector('.ibrd').style.display = 'block';
        document.querySelector('.inv').style.display = 'flex';
        document.querySelector('.health').style.display = 'flex';
        inv()
        inv()
    }
    switch (lvl) {
        case 0:
            for (let i = 0; i < 5; i++) {
                if (levcomp[i]) {
                    let lev = document.querySelector('.lvl' + i);
                    lev.style.backgroundColor = 'red';
                    lev.onclick = null;
                }
            }
            document.querySelector('.lvl').style.display = 'flex';
            document.querySelector('.srt').style.display = 'none';
            break;
        case 1:
            cardScene(game[0][0])
            break;
        case 2:
            cardScene(game[1][0])
            break;
        case 3:
            cardScene(game[2][0])
            break;
        case 4:
            cardScene(game[3][0])
            break;
        case 5:
            cardScene(game[4][0])
            break;
    }
}

let open = false;
function inv(use, slot) {
    if (use) {
        switch (slot) {
            case 1:
                console.log("slot " + slot + " clicked")
                break;
            case 2:
                console.log("slot " + slot + " clicked")
                break;
            case 3:
                console.log("slot " + slot + " clicked")
                break;
            case 4:
                console.log("slot " + slot + " clicked")
                break;
            case 5:
                console.log("slot " + slot + " clicked")
                break;
            case 6:
                console.log("slot " + slot + " clicked")
                break;
        }
    } else {
        let but = document.querySelector('.invbut');
        let brd = document.querySelector('.ibrd');
        let its = document.querySelector('.inv');
        let amt;
        let pos;
        if (open === false) {
            amt = 88;
            open = true;
            pos = 180;
            its.style.left = "96.5dvw"
        } else {
            amt = 96;
            open = false;
            pos = 0;
            its.style.left = "105dvw"
        }
        but.style.transform = `rotate(${pos}deg)`;
        but.style.left = amt + "dvw";
        brd.style.left = (amt + 3) + "dvw";
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'i' || event.key === 'I') {
        inv()
    }
});

function death(msg) {
    document.querySelector('.dia').style.display = 'none';
    document.querySelector('.invbut').style.display = 'none';
    document.querySelector('.dthscn').style.display = 'flex';
    document.getElementById('dm').textContent = msg;
}

class Cards {
    constructor(text, path, dm, dia) {
        this.text = text;
        this.path = path;
        this.dm = dm;
        this.dia = dia;
    }
}

const testCard0 = new Cards("test card 0", '0.1', ' ', false)
const testCard0A = new Cards("test card 0A", '0.3', ' ', false)
const testCard0B = new Cards("test card 0B", '0.0', ' ', false)
const testCard1 = new Cards("test card 1", '0.2', ' ', false)
const testCard1A = new Cards("test card 1A", '0.4', ' ', false)
const testCard1B = new Cards("test card 1B", '0.0', ' ', false)

const dialogue0 = new Cards("next", 'death', 'ur a idiot', true);
const dialogue1 = new Cards("next", 'death', 'ur a idiot', true);

// needs to be filled out with game PRIORITY
let game = [
    [
        ["choose one card", testCard0, testCard1],
        ["this is text card zero", testCard0A, testCard0B],
        ["this is text card one", testCard1A, testCard1B],
        ["this is diolouge zero", dialogue0],
        ["this is diolouge one", dialogue1]
    ],
    [[]],
    [[]],
    [[]],
    [[]],
];

let dm;
let lpath;
let rpath;
function cardScene(scene) {        
    let but1 = document.getElementById('op1');
        let but2 = document.getElementById('op2');
    but2.style.display = 'block';
    if (!(dm = ' ')) {
        death(dm);
    }
    if (scene == 'left') {
        let pth = game[lpath[0]][lpath[2]];
        console.log(pth)
        console.log(pth.dm)
        dm = pth.dm;
        cardScene(pth);
    } else if (scene == 'right') {
        let pth = (game[rpath[0]][rpath[2]]);
        console.log(pth)
        console.log(pth.dm)
        dm = pth.dm;
        cardScene(pth);
    } else {
        if (scene[1].dia) {
            but2.style.display = 'none';
        } else {
            but2.innerHTML = scene[2].text;     
            rpath = scene[2].path
        }
        document.getElementById('prompt').innerHTML = scene[0];
        but1.innerHTML = scene[1].text;
        lpath = scene[1].path  
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        cardScene('left')
    } else if (event.key === 'd' || event.key === 'D') {
        cardScene('right')
    }
});

function puz() {
    document.querySelector('.dia').style.display = 'none';
    document.querySelector('.invbut').style.display = 'none';
    document.querySelector('.cr').style.display = 'flex';

}

let stored = [
    0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0
];

let rArr = [
    '0010', '0010', '1001', '0010', '0010',
    '0101', '0010', '1011', '1001', '0101',
    '0101', '1001', '1111', '1011', '1001',
    '1001', '1011', '1011', '1001', '1001',
    '0010', '1001', '0010', '0010', '1001',
];

let kArr = [
    "0010", "0100", "1001", "0010", "0010",
    "0101", "0010", "0111", "1100", "0101",
    "0101", "0110", "1111", "1011", "1100",
    "0110", "1011", "1101", "0110", "1001",
    "0100", "1100", "1000", "0100", "1100"
];
function rotate(a, b) {
    let ang = stored[b];
    let nAng = ang + 90;
    document.getElementById(a).style.transform = 'rotate(' + nAng + 'deg)';
    stored[b] = nAng;
    let cor = 0;
    let x = rArr[b].slice(-1);
    rArr[b] = x + rArr[b].slice(0, -1);
    for (let i = 0; i < rArr.length; i++) {
        if (rArr[i] == kArr[i]) {
            cor = cor += 1;
        }
    }
    if (cor == rArr.length) {
        document.querySelector('.cr').style.display = 'none';
    }
}

function probar(numSections) {
    let canvas = document.getElementById('pro');
    let ctx = canvas.getContext("2d");
    let sectionWidth = Math.floor(canvas.width / 5);

    for (let i = 1; i <= numSections; i++) {
        ctx.fillStyle = "green";
        ctx.fillRect(sectionWidth * (i - 1), 0, sectionWidth, canvas.height);
        ctx.beginPath();
        ctx.moveTo(Math.floor(sectionWidth * i) + 0.5, 0);
        ctx.lineTo(Math.floor(sectionWidth * i) + 0.5, canvas.height);
        ctx.stroke();
    }
}

function fight() {
    document.querySelector('.dia').style.display = 'none';
    document.querySelector('.invbut').style.display = 'none';
    let arr = document.querySelector('.arr');
    arr.style.display = 'block';
    document.querySelector('.dmg').style.display = 'block';
    setInterval(mvArr, 1000);

}

let going = true;
let posX = 0;

function mvArr() {
    let arr = document.querySelector('.arr');
    if (going) {
        posX += 99;
        arr.style.left = posX + '%';
        going = false;
    } else {
        posX -= 99;
        arr.style.left = posX + '%';
        going = true;
    }
    document.addEventListener('keydown', function (event) {
        if (event.key === 'r') {
            return fightEnd();
        }
    });
}

let fend = 0;

function fightEnd() {
    if (fend == 0) {
        console.log("stop")
        clearInterval(mvArr);
        const rect = document.querySelector('.arr').getBoundingClientRect();
        // output
        console.log('Left:', Math.round(rect.left / (window.innerWidth / 100)));

        document.querySelector('.dia').style.display = 'flex';
        document.querySelector('.invbut').style.display = 'flex';
        document.querySelector('.dmg').style.display = 'none';
        fend += 1;
    }
    setTimeout(function () {
        fend = 0;
    }, 10000)
}

function health() {

    if (hth = 0) {
        death("o:")
    }
}

function save() {

}

function loadsave() {

}
// localStorage.setItem('balence', finalCountString);    let timeRate = localStorage.getItem('rate');
