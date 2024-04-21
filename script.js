let levcomp = [false, false, false, false, false, false]
// to log game completion push these to local storage
function start(lvl, levs) {
    if (levs === true) {
        document.querySelector('.dia').style.display = 'flex';
        document.querySelector('.lvl').style.display = 'none';
        document.querySelector('.invbut').style.display = 'block';
        document.querySelector('.ibrd').style.display = 'block';
        document.querySelector('.inv').style.display = 'flex';
    } else if (lvl == 0) {
        console.log("levs")
        for (let i = 0; i < 5; i++) {
            if (levcomp[i]) {
                let lev = document.querySelector('.lvl' + i);
                lev.style.backgroundColor = 'red';
                lev.onclick = null;
            }   
        }        
        document.querySelector('.lvl').style.display = 'flex';
        document.querySelector('.srt').style.display = 'none';
    } else {
        switch (lvl) {
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
    brd.style.left = (amt + 2) + "dvw"; 
    }
}

class Cards {
    constructor(text, path, dm) {
        this.text = text;
        this.path = path;
        this.dm = dm;
    }
}

const testCard0 = new Cards("test card 0", '0.1', null)
const testCard0A = new Cards("test card 0A", '0.2', null)
const testCard0B = new Cards("test card 0B", '0.2', null)
const testCard1 = new Cards("test card 1", '0.2', null)
const testCard1A = new Cards("test card 1A", '0.2', null)
const testCard1B = new Cards("test card 1B", '0.2', null)
let game = [
    [["choose one card", testCard0, testCard1], ["this is text card zero", testCard0A, testCard0B], ["this is text card one", testCard1A, testCard1B]],
    [[]],
    [[]],
    [[]],
    [[]]
];


let rpath;
let lpath;
function cardScene(scene) {
    if (scene == 'left') { 
        cardScene(game[rpath[0]][rpath[2]]);
    } else if (scene == 'right') {
        cardScene(game[lpath[0]][lpath[2]]);
    } else {
    let but1 = document.getElementById('op1');
    let but2 = document.getElementById('op2');
    document.getElementById('prompt').innerHTML = scene[0];
    but1.innerHTML = scene[1].text;
    but2.innerHTML = scene[2].text;      
    rpath = scene[1].path
    lpath = scene[2].path
    }
}



function death() {

}