// // controls:
// // Ii = inventory
// // space = action
// // a = card 1
// // d = card 2

// //functions:
// // fight use fight()
// // puzzle use puz()
// // death use death("death message")

// // inventory 
// let beaconPcs = 0;
// let bullets = 0;
// let medkits = 0;

// let hth = 100;

// let levcomp = [false, false, false, false, false, false]
// // to log game completion push these to local storage
// function start(lvl, levs) {
//     if (levs === true) {
//         document.querySelector('.pro').style.display = 'flex';
//         document.querySelector('.dia').style.display = 'flex';
//         document.querySelector('.lvl').style.display = 'none';
//         document.querySelector('.invbut').style.display = 'block';
//         document.querySelector('.ibrd').style.display = 'block';
//         document.querySelector('.inv').style.display = 'flex';
//         // document.querySelector('.health').style.display = 'flex';
//         inv()
//         inv()
//     }
//     switch (lvl) {
//         case 0:
//             for (let i = 0; i < 5; i++) {
//                 if (levcomp[i]) {
//                     let lev = document.querySelector('.lvl' + i);
//                     lev.style.backgroundColor = 'red';
//                     lev.onclick = null;
//                 }
//             }
//             document.querySelector('.lvl').style.display = 'flex';
//             break;
//         case 1:
//             cardScene(game[0][0])
//             break;
//         case 2:
//             cardScene(game[1][0])
//             break;
//         case 3:
//             cardScene(game[2][0])
//             break;
//         case 4:
//             cardScene(game[3][0])
//             break;
//         case 5:
//             cardScene(game[4][0])
//             break;
//     }
// }

// let open = false;
// function inv(use, slot) {
//     if (use) {
//         switch (slot) {
//             case 1:
//                 console.log("slot " + slot + " clicked")
//                 break;
//             case 2:
//                 console.log("slot " + slot + " clicked")
//                 break;
//             case 3:
//                 console.log("slot " + slot + " clicked")
//                 break;
//             case 4:
//                 console.log("slot " + slot + " clicked")
//                 break;
//             case 5:
//                 console.log("slot " + slot + " clicked")
//                 break;
//             case 6:
//                 console.log("slot " + slot + " clicked")
//                 break;
//         }
//     } else {
//         let but = document.querySelector('.invbut');
//         let brd = document.querySelector('.ibrd');
//         let its = document.querySelector('.inv');
//         let amt;
//         let pos;
//         if (open === false) {
//             amt = 88;
//             open = true;
//             pos = 180;
//             its.style.left = "96.5dvw"
//         } else {
//             amt = 96;
//             open = false;
//             pos = 0;
//             its.style.left = "105dvw"
//         }
//         but.style.transform = `rotate(${pos}deg)`;
//         but.style.left = amt + "dvw";
//         brd.style.left = (amt + 3) + "dvw";
//     }
// }

// document.addEventListener('keydown', function (event) {
//     if (event.key === 'i' || event.key === 'I') {
//         inv()
//     }
// });

// function death(msg) {
//     document.querySelector('.dia').style.display = 'none';
//     document.querySelector('.invbut').style.display = 'none';
//     document.querySelector('.dthscn').style.display = 'flex';
//     document.getElementById('dm').textContent = msg;
// }

// class Cards {
//     constructor(text, path, dm, dia) {
//         this.text = text;
//         this.path = path;
//         this.dm = dm;
//         this.dia = dia;
//     }
// }

// // const testCard0 = new Cards("test card 0", '0.1', ' ', false)
// // const testCard0A = new Cards("test card 0A", '0.3', ' ', false)
// // const testCard0B = new Cards("test card 0B", '0.0', ' ', false)
// // const testCard1 = new Cards("test card 1", '0.2', ' ', false)
// // const testCard1A = new Cards("test card 1A", '0.4', ' ', false)
// // const testCard1B = new Cards("test card 1B", '0.0', ' ', false)

// // const dialogue0 = new Cards("next", 'death', 'ur a idiot', true);
// // const dialogue1 = new Cards("next", 'death', 'ur a idiot', true);

// // needs to be filled out with game PRIORITY
// // const fight
// const next1 = new Cards("Next", '0.1', ' ', true)
// const run2 = new Cards("Run!", '0.2', ' ', false)
// const fight2 = new Cards("Fight!", '0.3', ' ', false)
// const deaths3 = new Cards("death", null, 'The zerg catches up to you with its fast adaptive legs and consumes you and your team.', false)


// let game = [
//     // mission 1
//     [
//         ["Beginning your journey to finding the other four pieces of the recon beacon, you begin hiking through the forest.", next1],
//         ["You encounter a wolf-like figure with its fur looking hard and rigid with black stone color to it.", run2, fight2],
//         ['death', deaths3],
//         ['fightscene', 1]
//     ],
//     // mission 2
//     [[]],
//     // mission 3
//     [[]],
//     // mission 4
//     [[]],
//     // mission 5
//     [[]],
// ];

// // First is the dialogue, second is the row (starts at 0 and the next number is the card in figma 10 is 0.10), third is death message, fourth is false:dialogue True:dialogue
// // This is for 6 (advert the crisis)
// const next6Dot1 = new Cards("Next", '2.1', '', false)
// const next6Dot2 = new Cards("death", null, 'You continue your everyday job on the space craft')

// // This is for 4-5 (Dan)
// const next4Dot1 = new Cards("Next", '1.1', '', true)
// const next4Dot2 = new Cards("Next", '1.2', '', true)
// const next4Dot3 = new Cards("Next", '1.3', '', true)
// // const option4Dot1 = new Cards("You choose to stay put and survive.", '1.')
// // This is the on card 4 option 1 and it leads to a death card

// // This is for 1-3 (soldier)
// const next1Dot1 = new Cards("Next", '0.1', '', true)
// const

let background = [
    // 1-3 Soldier(Neo) 43 CARDS
    [
        ["You are one of the many soldiers with the duty of patrolling the space craft protecting the Mothership.", ],
        ["The ships around the Mothership gets surprised attacked by zergs. The space craft your on happens to be closest to the start of the Zerg's attack, having the space craft your on to crash land on the planet Vakto.", ],
        ["You wake up with ringing ears, and blurry vision. As time passes your hearing and vision get clearer, allowing you to see that the ship is badly damaged with wires sticking out the steel wall and you could hear a faint sound of crackling fire. You also see blood stains on the floor and walls.", ],
        ["You know before the crash you were in the lounge room with a couple other people, but you just see corpses.", ],
        ["You choose to leave the lounge room.", ],
        ["Make your way to the command room", ],
        ["As you push open the command room's door you see the commander John dead in his chair.", ],
        ["It looks like when the ship crashed, a broken fragment of the ship's wall was lodged into his body.", ],
        ["As you touch the control panel, the screen glitches and makes a crackling sound. The image eventually forms into a figure in the corner of the screen. You recognize the shape as Eve, the ship's A.I.", ],
        ['There is a pause and then Eve says, "Communication has been cut off because of the damage the ship has received. I would recommend restarting and minimal repair to the communication system for planetary communication.', ],
        ["Eve: The ship has sustained heavy damage with the crash and needs to restart a series of programs to better help the survivors", ],
        ["Eve: I will give you a list of programs I have deemed most important to least important.", ],
        ['1.The emergency power system 2. The life detector system 3. The defense system 4. The communication system', ],
        ["Eve: Currently the ship has at most 7 more hours of power before it's out.", ],
        ["After waiting for an hour, the lights in the command room suddenly gain more power, brightening the room. This startles you and then some time later you see someone come into the command room.", ],
        ["A man comes into the room and introduces himself as Dan the zerg zoologist of the ship and that he was lucky enough to have survived the crash.", ],
        ["Eve: To restart the emergency power, you need to head to the power room and flip all of the red switches down, then up.", ],
        ["Arriving in the power room you see five red switches on each of the walls in the pentagon room.", ],
        ["You do as Eve said before, flipping the switches up and down. After that is done, the energy core in the center of the room starts to rotate and light up. Along with the power starting up again, a screen lights up prompting a list of program names and other functions of the ship to restart.", ],
        ["When you return back to the command room after resources you meet another survivor, Dan the Zerg zoologist.", ],
        ["When you reach the command room you meet another survivor,  Dan the Zerg zoologist", ],
        ["Eve: Emergency power system has been restarted, along with the life detector system, defense system, and the communication system.", ],
        ["Eve: The next step to ensure the crew's survival is to contact the Mothership. You must rebuild and set-up the recon beacon.", ],
        // Add tracker
        ["Eve: Currently with the ship's scanning system, it has detected the second-half of the ship contains the frame and first piece of the recon beacon. The other five pieces of the recon beacon were split off during the crash. To have a more accurate location of the other four pieces, you would need to first get the frame and use this tracker to find the other pieces of the recon beacon.", ],
        ["Eve: Before you go I must remind you that according to the interstellar crash landing manual, the crashies must inform the Mothership of their survival within 10 days. Otherwise the Mother Ship will proclaim them dead.", ],
        ["Following the coordinates Eve gave you. You see in the distance broken and crushed trees following a trajectory leading to the other half of the broken ship.", ],
        // End of first ship (26) | Dan needs to jump on 27 and onwards
        ["Seeing the second half of the ship slightly sunken in the ground. You see an air hatch leading into the second ship.", ],
        ["Having the expectation of having to open the air hatch manually. You prepare to be on guard as Omar opens the air hatch, but to your surprise the air hatch did a quick scan and automatically let the crew in.", ],
        ["Cautiously searching through the ship you meet the Seth cartographer.", ],
        ["Seth:When I woke up the ship was in a state of running out of power, so I followed the spacecraft X099 manual of how to restart the emergency power. After that I did a little bit of exploring and then met you guys.", ],
        ["Seth: No... At least I haven't met one.", ],
        ["Do you know where the recon beacon is?", ],
        ["Seth:Yes, but its locked in a cell only the commander has access to.", ],
        ["With the help of Omar we can try to unlock it.", ],
        ["Seth:Good luck, but you won’t get that thing open.", ],
        // circuts upbove
        // add frame and piece to inventory
        ["You open the beacon only to find all but one of the 5 sectors is missing", ],
        ["Going down the hallway you find the armory.", ],
        ["Seth: There is an armory down the hall, we should try and open it.", ],
        // circuts upbove
        ["You get into the armory.", ],
        // Add lazer gun and some ammo
        ["You acquire a laser gun and some ammunition.", ],
        ["Dan:I think we are forgetting something.", ],
        ["Suddenly remembering that you need to find the rest of the beacons", ],
        ["Hooking up the tracker to one of the ship's screens you see four red dots on a rough sketch of the planet's terrain, one forest, one in a lake, one in a cave, and one in the mountain.", ]
        // goes to mission page
    ],
    // 4-5 Dan 13 CARDS
    [
        ["You are one of the many... zoologists with the duty to travel on the space craft and record, observe, and advise the crew while the space craft guards the Mothership.", next4Dot1],
        ["The ships around the Mothership gets surprised attacked by zergs. The space craft your on happens to be closest to the start of the Zerg's attack, having the space craft your on to crash land on the planet Vakto.", next4Dot2],
        ["You wake up with ringing ears, and blurry vision. As time passes your hearing and vision get clearer, allowing you to see that the ship is badly damaged with wires sticking out the steel wall and you could hear a faint sound of crackling fire. You also see blood stains on the floor and walls.", next4Dot3],
        // Under I did not link any cards
        ["You know before the crash you were in the cafeteria with a couple other researchers, but you just see corpses.", ],
        ["You choose to leave the cafeteria.", ],
        ["Arriving in the power room you see five red switches on each of the walls in the pentagon room.", ],
        ["Flipping the switches up and down, the emergency power restarts.", ],
        ["You decide to go to the command room to assume command of the ship or follow command from someone, more suited to command any survivors.", ],
        ["Arriving into the command room, you find another survivor, Neo, one of the soldiers on the ship.", ],
        ["Eve the AI on the ship gives a brief report of what has happen so far.", ],
        ["You decide to go with Neo and follow his lead...", ],
        ["You are Neo the soldier", ],
        ["Following the coordinates Eve gave you. You see in the distance broken and crushed trees following a trajectory leading to the other half of the broken ship.", ]
        // goes to 27 on soldier(1)
    ],
    // 6 Advert the crisis 2 CARDS
    [["The ships around the Mothership gets surprised attacked by zergs. Luckily the space craft that you are on was able to make an evasive movement and retreat back to the safety of the Mothership.", next6Dot1],
    // ["death", next6Dot2]
    ]
]
// let dm;
// let lpath;
// let rpath;
// function cardScene(scene) {
//     console.log('card load')
//     console.log(scene)
//     if (scene[0] == 'death') {
//         console.log("you died");
//         death(scene[1].dm);
//         return;
//     }
//     console.log("continue")
//     if (scene[0] == 'fightscene') {
//         console.log("fight")
//         fightActive(scene[1])
//         return;
//     }
//     let but1 = document.getElementById('op1');
//     let but2 = document.getElementById('op2');
//     but2.style.display = 'block';
//     if (scene == 'left') {
//         let pth = game[lpath[0]][lpath[2]];
//         console.log("right: " + pth)
//         cardScene(pth);
//     } else if (scene == 'right') {
//         let pth = (game[rpath[0]][rpath[2]]);
//         console.log("right: " + pth)
//         cardScene(pth);
//     } else {
//         if (scene[1].dia) {
//             but2.style.display = 'none';
//         } else {
//             but2.innerHTML = scene[2].text;
//             rpath = scene[2].path
//         }
//         document.getElementById('prompt').innerHTML = scene[0];
//         but1.innerHTML = scene[1].text;
//         lpath = scene[1].path
//         console.log("left :" + lpath + "right :" + rpath)
//     }
//     console.log("---------------------------------------------------------------------------")
// }

// document.addEventListener('keydown', function (event) {
//     if (event.key === 'a' || event.key === 'A') {
//         cardScene('left')
//     } else if (event.key === 'd' || event.key === 'D') {
//         cardScene('right')
//     }
// });

// function puz() {
//     document.querySelector('.dia').style.display = 'none';
//     document.querySelector('.invbut').style.display = 'none';
//     document.querySelector('.cr').style.display = 'flex';

// }

// let stored = [
//     0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0
// ];

// let rArr = [
//     '0010', '0010', '1001', '0010', '0010',
//     '0101', '0010', '1011', '1001', '0101',
//     '0101', '1001', '1111', '1011', '1001',
//     '1001', '1011', '1011', '1001', '1001',
//     '0010', '1001', '0010', '0010', '1001',
// ];

// let kArr = [
//     "0010", "0100", "1001", "0010", "0010",
//     "0101", "0010", "0111", "1100", "0101",
//     "0101", "0110", "1111", "1011", "1100",
//     "0110", "1011", "1101", "0110", "1001",
//     "0100", "1100", "1000", "0100", "1100"
// ];
// function rotate(a, b) {
//     let ang = stored[b];
//     let nAng = ang + 90;
//     document.getElementById(a).style.transform = 'rotate(' + nAng + 'deg)';
//     stored[b] = nAng;
//     let cor = 0;
//     let x = rArr[b].slice(-1);
//     rArr[b] = x + rArr[b].slice(0, -1);
//     for (let i = 0; i < rArr.length; i++) {
//         if (rArr[i] == kArr[i]) {
//             cor = cor += 1;
//         }
//     }
//     if (cor == rArr.length) {
//         document.querySelector('.cr').style.display = 'none';
//     }
// }

// function probar(numSections) {
//     let canvas = document.getElementById('pro');
//     let ctx = canvas.getContext("2d");
//     let sectionWidth = Math.floor(canvas.width / 5);

//     for (let i = 1; i <= numSections; i++) {
//         ctx.fillStyle = "green";
//         ctx.fillRect(sectionWidth * (i - 1), 0, sectionWidth, canvas.height);
//         ctx.beginPath();
//         ctx.moveTo(Math.floor(sectionWidth * i) + 0.5, 0);
//         ctx.lineTo(Math.floor(sectionWidth * i) + 0.5, canvas.height);
//         ctx.stroke();
//     }
// }

// // fighting------------------------------------------------------------------------------------------------------ isaac was here you stinky boy
// let mvArrInt;
// function fight() {
//     document.querySelector('.fut').style.display = 'none';
//     console.log("fighting...")
//     let arr = document.querySelector('.arr');
//     arr.style.display = 'block';
//     document.querySelector('.dmg').style.display = 'block';
//     mvArr();
//     mvArrInt = setInterval(function () {
//         console.log("fight bar active")
//         let arr = document.querySelector('.arr');
//         if (going) {
//             posX += 99;
//             arr.style.left = posX + '%';
//             going = false;
//         } else {
//             posX -= 99;
//             arr.style.left = posX + '%';
//             going = true;
//         }
//         document.addEventListener('keydown', function (event) {
//             if (event.key === 'f' || event.key === 'F') {
//                 return fightEnd();
//             }
//         });
//     }, 1000);
// }

// let enHealth = 100;
// let phealth = 100;

// function fightActive(enemy) {
//     document.querySelector(".en" + enemy).style.display = 'block';
//     document.querySelector('.dia').style.display = 'none';
//     document.querySelector('.invbut').style.display = 'none';
//     fight()
// }

// let going = true;
// let posX = 0;

// function mvArr() {

// }

// let fend = 0;

// function fightEnd() {
//     if (fend == 0) {
//         console.log("stop")
//         clearInterval(mvArr);
//         const rect = document.querySelector('.arr').getBoundingClientRect();
//         // output
//         console.log('Left:', Math.round(rect.left / (window.innerWidth / 100)));

//         // document.querySelector('.dia').style.display = 'flex';
//         // document.querySelector('.invbut').style.display = 'flex';
//         document.querySelector('.dmg').style.display = 'none';
//         fend += 1;
//         enHealth -= Math.floor(100 - (window.innerWidth / 100));
//         console.log("enemyy health: " + enHealth)
//         phealth -= 5;
//         console.log("player health: " + phealth);
//         clearInterval(mvArrInt);
//         if (phealth <= 0) {
//             death("ur bad")
//         }
//         if (enHealth > 0) {
//             console.log("display but")
//             document.querySelector('.fut').style.display = 'block';

//             document.getElementById('hit').classList.toggle('redscn');
//             setTimeout(function () {
//                 document.getElementById('hit').classList.toggle('redscn');
//             }, 100)
//         } else {
//             for (i = 1; i < 6; i++) {
//                 if (document.getElementById("en" + i) != null) {
//                     console.log("exist      ")
//                 }    
//             }
//         }


//     }

//     setTimeout(function () {
//         fend = 0;
//     }, 10000)
// }

// function health() {

//     if (hth = 0) {
//         death("o:")
//     }
// }

// function save() {

// }

// function loadsave() {

// }
// // localStorage.setItem('balence', finalCountString);    let timeRate = localStorage.getItem('rate');

function  dice() {
     document.querySelector('.srt').style.display = 'none';
}