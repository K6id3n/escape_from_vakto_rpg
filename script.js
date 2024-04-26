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
        // document.querySelector('.health').style.display = 'flex';
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

// const testCard0 = new Cards("test card 0", '0.1', ' ', false)
// const testCard0A = new Cards("test card 0A", '0.3', ' ', false)
// const testCard0B = new Cards("test card 0B", '0.0', ' ', false)
// const testCard1 = new Cards("test card 1", '0.2', ' ', false)
// const testCard1A = new Cards("test card 1A", '0.4', ' ', false)
// const testCard1B = new Cards("test card 1B", '0.0', ' ', false)

// const dialogue0 = new Cards("next", 'death', 'ur a idiot', true);
// const dialogue1 = new Cards("next", 'death', 'ur a idiot', true);

// needs to be filled out with game PRIORITY
// const fight
const next1 = new Cards("Next", '0.1', ' ', true)
const run2 = new Cards("Run!", '0.2', ' ', false)
const fight2 = new Cards("Fight!", '0.3', ' ', false)
const deaths3 = new Cards("death", null, 'The zerg catches up to you with its fast adaptive legs and consumes you and your team.', false)


let game = [
    // mission 1
    [
        ["Beginning your journey to finding the other four pieces of the recon beacon, you begin hiking through the forest.", next1],
        ["You encounter a wolf-like figure with its fur looking hard and rigid with black stone color to it.", run2, fight2],
        ['death', deaths3],
        ['fightscene', 1]
        ["Dan inspects the zerg and finds out multiple things about them:Zergs in nature are very adaptive with their surroundings and with that they have a flaw where the zergs will have at least one weakness.", ]
        ["While walking through the forest you encounter a box.", ],
        ["You encounter another zerg, this one looks to be a younger version of the wolf zerg and its thick fur looks like it can be penetrated by bullets. Rather than having to aim for the wolf zerg’s weakness.", ],
        ["You get some ammo and a few medkits.", ],
        ["You encounter another zerg, this one looks to be a younger version of the wolf zerg and its thick fur looks like it can be penetrated by bullets. Rather than having to aim for the wolf zerg’s weakness.", ],
        ["Thanks to the spare ammo you found in the box, you were able to kill the zerg with a lucky shot under its mouth.", ],
        ["Looking down at the tracker it says the second piece should be visible. With a quick look, you spot the piece! But it's guarded by multiple wolf zergs because they seem like they are searching for something around the second piece.", ],
        ["Thanks to the spare ammo you found in the box, you were able to kill the zerg with a lucky shot under its mouth.", ],
        // Add second piece
        ["You find the mechanic hiding from the zergs", ],
        // Goes to missions page
    ],
    // mission 2
    [
        ["Following the tracker, you travel a similar route when you first set off on your adventure, but this time your crew goes past the forest and finds a small cave entrance.", ],
        ["You encounter a group of smaller zergs that resemble bats. These bat-like creatures emit a low white glow from their wings. Sweeping over them with your flashlight, the bat zergs do not react. With this information you assume just like bats they are blind, but have incredible hearing. With their hearing the bat zergs start to twitch.", ],
        ["Chose your weapon!", ],
        ["You swiftly kill the zergs with a few blows because they can’t hear where you are.", ],
        ["You encounter a large rock that needs to be moved for you to get past.", ],
        [" With the help of your team you guys are able to get the rock out of the way. A few moments later a bigger version of the bat zergs comes flying at you.", ],
        ["You get knocked on the floor.", ],
        ["Hitting its head, the shot disorients the zerg and now you have a chance to draw your sword and strike.", ],
        ["The zerg misses you and hits its head on the wall, making it wobble in the air.", ],
        ["You hit the zerg and kill with one strike.", ],
        ["You come across a room containing a large collection of bat zergs that look to be in their infancy. Along with the bat zergs you find the third piece.", ],
        ["You quickly slice them and the older bat zergs barely notice your actions because of how quiet your sword is.", ],
        // Add third piece
        ["You find the third piece and put it into the frame with Omar's help.", ],
        // Go to missions page
    ],
    // mission 3
    [
        ["Setting off to find the piece located at the lake, you head off in that direction.", ],
        ["Arriving at the lake, you see a miniature land mass in the middle of the lake. The tracker indicates that the third piece is further in.", ],
        ["We should build a raft", ],
        ["With your best effort you miraculously build a sturdy looking raft.", ],
        ["Using the raft you make it halfway to the land mass in the center of the lake, before the sturdy looking raft snaps in half.", ],
        ["Omar effortlessly breaks down five trees and ties them together. Making a strong and sturdy raft.", ],
        ["Using the raft you reach half way to the land mass in the center of the lake, before you see huge shadows swimming in the water.", ],
        // Set timer
        ["Your bullets hit the shadow making the water bleed red. This irritates the other shadows and the next second you see monstrous fish monsters leap out of the water and try to bite at your face.", ],
        // Set timer
        ["Waiting for a bit you believe that the shadows will pass the raft, but the next moment you see monstrous fish monsters leaping out of the water and trying to bite at your face.", ],
        ["With impeccable aim and speed you are able to defend the raft.", ],
        ["Shooting at the water zergs while the crew paddles the raft. You reach the land mass.", ],
        // Set timer
        ["You dodge the incoming attacks.", ],
        ["Steading your aim and landing your shots on the water zergs. The crew successfully makes it to the land mass.", ],
        ["You successfully keep dodging the water zergs and as you make it closer to the land mass. You can't help but think that the water zergs are decreasing their attacks, so when you turn to look around you find yourself alone on the raft.", ],
        ["Pulling the raft onto the land mass, You finally have time to breath and look around.", ],
        ["Hiking up a relatively small hill you can get an overview of the land and you pull out the track, letting it direct you in the direction of the fourth piece.", ],
        ["Surprisingly there were no other life forms on the land mass beside vegetation.", ],
        // Add fourth piece
        ["You find the fourth piece of the recon beacon in a crater, with lush green grass growing around.", ],
        ["With a sigh you grudgingly walk back to the raft and prepare for a second round of attacks from the water zergs.", ],
        ["Omar does a quick inspection of the raft, to find any parts that need re-tightening. Omar then gives you a signal indicating that the raft is good to go.", ],
        ["Getting on the raft, the crew resumes their previous roles.", ],
        ["After another round of fending off the water zergs the crew makes it back to land. From there, they head back to the home base.", ],
        // Go to missions page
    ],
    // mission 4
    [
        ["Preparing your items to go collect the final piece. You hike up a trail and see a gigantic zerg on top of the mountain. Taking its time to stretch, the zerg then lets out a roar. Looking down at the tracker and it points you in the same direction of the gigantic zerg.", ],
        ["Returning back to the base, it takes a few minutes of brainstorming for Omar to say that the ship had powerful bombs to handle zergs of that size.", ],
        ["Knowing that both of the ships did not have any explosives, Dan says for Eve to calculate possible locations of where the bomb may have landed and not have been damaged by the crash", ],
        ["Heading off to the approximate location, you are back in the forest. The trees there have been growing for countless amount of years, letting the trees reach high above the ground, blocking out the sun.", ],
        ["You look down at your map and you see your location getting closer to the big circle(zone) on the map indicating Eve's approximate location of the bomb.", ],
        ["Immediately once you are in the zone, it starts to shrink and give you a more precise location of the bomb.", ],
        ["Now that you have a more precise location you", ],
        ["Taking your time to search around, you spot a humanoid scaly zerg with four arms.", ],
        ["You kill the tree zerg in one shot, its body falls to the ground and Dan goes up to inspect the body.", ],
        ['After examining the body Dan says, "These tree zergs are extremely mobile, and have strong limbs allowing them to rip apart their enemy. "', ],
        ["You and your teammates quietly make it past the tree zerg only to be spotted by another tree zerg. The tree zerg immidatly screams, alerting the other tree zergs of your presence", ],
        ["Continuing on the path, you hear the trees rustle and then spot a tree zerg looking at you. Before you could do anything, the tree zerg inhales and then lets out a loud scream.", ],
        ["You get there much quicker with the help of a predestined location", ],
        ["You hear a loud inhuman scream. Looking up you see an almost humanoid scaly zerg with four arms.", ],
        ["The tree zerg screams once again, and in the distance you hear screams, almost like the tree zerg was calling for back-up.", ],
        ["Seeing the pack of tree zergs launching themselves through the trees. You know that you can not take them all on at the same time, so you look around to see if there is a place to get an advantage over the tree zergs. You quickly spot a large boulder with a narrow crack in the middle, almost large enough for a grown man to squeeze through. Immediately you tell your companions to drop their bags and get in the crack.", ],
        ["As each person quickly cramps themselves in the crack, you are the last to get in, but all your companions squeeze themselves in the crack. You only have an arm's length of room before your body sticks out of the crack.", ],
        // Set timer
        ["Waiting for the tree zergs to come you...", ],
        ["Steadying your hand you wait for a tree zerg to arrive.", ],
        ["Killing the tree zerg, it falls to the floor and multiple screams of anguish accompanies it. With a brief moment of no movement from both parties, multiple hands start to try and pry their way in and grab you.", ],
        ["Adrenaline flowing through you. You take aim once again and start firing at the tree zergs.", ],
        ["After two hours of you constantly having to kill and be aware of multiple hand, the scream of the last tree zergs rings out and now you have a moment to breath and calm your nerves down.", ],
        ["Pushing yourself out of the crack and pushing the piles of corpses away from the crack. You look around the piles of corpses and make sure there is no hidden threats.", ],
        ["Helping your companions out of the crack, the crew resumes on their journey to the find the bomb.", ],
        ['Up above in the trees you see circular homes of many sticks weaving together. Dan: "These seem to be the homes of the tree zergs, we encountered earlier. We should proceed with caution."', ],
        ["Proceeding with caution, you find to your surprise that the homes are all empty and that there were traces of the tree zergs fleeing from their settlements.", ],
        ["You don't want to think any further on this and count it as a lucky situation.", ],
        // Add bomb to inventory
        ["Using the tracker you quickly find the bomb under some leaves.", ],
        ["You make quick haste back to the base, to get ready for the final battle.", ],
        // Go to mission page
    ],
    // mission 5
    [
        ["You arrive at the second ship with a chance to prepare one last time to defeat the mother zerg and get the final piece.", ],
        // after click from upbove reset hp to 100 and add some ammo
        ["You leave", ],
        ["While you walk you talk to the zoologist about the mother zerg", ],
        ["Dan: Ever since we encountered the mother zerg I've been observing it.", ],
        ["What have you found?", ],
        ["Dan:I've noticed that the mother zerg has moved its previous nest to where the final piece is. I’m guessing the mother zerg finds comfort from the electrical waves the final piece emits.", ],
        ["Can’t we scare it away from the piece? Can’t we scare it away from the piece?", ],
        ["Dan:I don’t think so, and that's going to be dangerous.", ],
        ["Well, okay don't worry. We have prepared enough to take it down.(as you tap the bomb)", ],
        ["Dan:I did notice that it has a major flaw though.", ],
        ["What is it?", ],
        ["Dan:It’s the flaps on its head that allows it to breathe, if you can get a few shots at it or manage to stick the bomb there you could probably knock it out in a few hits.", ],
        ["So aim for the head?", ],
        ["Ending your conversation with Dan, you continue down the path and encounter multiple heavily armored zergs along the way", ],
        ["You get to the edge of the hill and quickly climb up the tree to hide. Peaking through the top of the leaves you can partially see the mother zerg.", ],
        ["Keep hiding", ],
        ["You see a chance to pounce on the mother.", ],
        ["You hit it with a disorienting blow giving you a chance to shoot as she gasps for air.", ],
        ["You find a vantage point where you can place a few shots while being hidden.", ],
        ["You place a few shots as it breathes disorienting and angering the mother zerg.", ],
        ["You manage to land a shot on its breath, dealing a lot of damage and disorienting it.", ],
        ["Getting out of sight and finding cover from the mother zerg and its guards. You decide to stay put to use the med kit.", ],
        ["You get a chance to activate the bomb", ],
        // After activating the bomb, it has a 10% chance to end(The bomb fails to explode and you travel back to the ship hoping that one day you will escape.)
        ["The bomb has a one minute timer and you encounter multiple guard zergs in this time.", ],
        // If you die in battle goes to end(You and your team are consumed by the mother zerg’s guards before the bomb gets a chance to detonate.)
        // Add fifth piece
        ["The bomb goes off! Killing the mother zerg and making all of its guards flee away.", ],
        ["Omar installs the final piece of the recon beacon together and starts the beacon.", ],
        // End card (The Mother ship responds to your distress call and you escape Valkto with your team.)
        ["", ],
        ["", ],
        ["", ],
        ["", ],
        ["", ],
        ["", ],
        ["", ],
        ["", ],
        ["", ],
        
    ],
];

// First is the dialogue, second is the row (starts at 0 and the next number is the card in figma 10 is 0.10), third is death message, fourth is false:dialogue True:dialogue
// This is for 6 (advert the crisis)
const next6Dot1 = new Cards("Next", '2.1', '', false)
const next6Dot2 = new Cards("death", null, 'You continue your everyday job on the space craft')

// This is for 4-5 (Dan)
const next4Dot1 = new Cards("Next", '1.1', '', true)
const next4Dot2 = new Cards("Next", '1.2', '', true)
const next4Dot3 = new Cards("Next", '1.3', '', true)
// const option4Dot1 = new Cards("You choose to stay put and survive.", '1.')
// This is the on card 4 option 1 and it leads to a death card

// This is for 1-3 (soldier)
const next1Dot1 = new Cards("Next", '0.1', '', true)

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
let dm;
let lpath;
let rpath;
function cardScene(scene) {
    console.log('card load')
    console.log(scene)
    if (scene[0] == 'death') {
        console.log("you died");
        death(scene[1].dm);
        return;
    }
    console.log("continue")
    if (scene[0] == 'fightscene') {
        console.log("fight")
        fightActive(scene[1])
        return;
    }
    let but1 = document.getElementById('op1');
    let but2 = document.getElementById('op2');
    but2.style.display = 'block';
    if (scene == 'left') {
        let pth = game[lpath[0]][lpath[2]];
        console.log("right: " + pth)
        cardScene(pth);
    } else if (scene == 'right') {
        let pth = (game[rpath[0]][rpath[2]]);
        console.log("right: " + pth)
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
        console.log("left :" + lpath + "right :" + rpath)
    }
    console.log("---------------------------------------------------------------------------")
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

// fighting------------------------------------------------------------------------------------------------------ isaac was here you stinky boy
let mvArrInt;
function fight() {
    document.querySelector('.fut').style.display = 'none';
    console.log("fighting...")
    let arr = document.querySelector('.arr');
    arr.style.display = 'block';
    document.querySelector('.dmg').style.display = 'block';
    mvArr();
    mvArrInt = setInterval(function () {
        console.log("fight bar active")
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
            if (event.key === 'f' || event.key === 'F') {
                return fightEnd();
            }
        });
    }, 1000);
}

let enHealth = 100;
let phealth = 100;

function fightActive(enemy) {
    document.querySelector(".en" + enemy).style.display = 'block';
    document.querySelector('.dia').style.display = 'none';
    document.querySelector('.invbut').style.display = 'none';
    fight()
}

let going = true;
let posX = 0;

function mvArr() {

}

let fend = 0;

function fightEnd() {
    if (fend == 0) {
        console.log("stop")
        clearInterval(mvArr);
        const rect = document.querySelector('.arr').getBoundingClientRect();
        // output
        console.log('Left:', Math.round(rect.left / (window.innerWidth / 100)));

        // document.querySelector('.dia').style.display = 'flex';
        // document.querySelector('.invbut').style.display = 'flex';
        document.querySelector('.dmg').style.display = 'none';
        fend += 1;
        enHealth -= Math.floor(100 - (window.innerWidth / 100));
        console.log("enemyy health: " + enHealth)
        phealth -= 5;
        console.log("player health: " + phealth);
        clearInterval(mvArrInt);
        if (phealth <= 0) {
            death("ur bad")
        }
        if (enHealth > 0) {
            console.log("display but")
            document.querySelector('.fut').style.display = 'block';

            document.getElementById('hit').classList.toggle('redscn');
            setTimeout(function () {
                document.getElementById('hit').classList.toggle('redscn');
            }, 100)
        } else {
            for (i = 1; i < 6; i++) {
                if (document.getElementById("en" + i) != null) {
                    console.log("exist      ")
                }    
            }
        }


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

function  dice() {
     document.querySelector('.srt').style.display = 'none';
     document.querySelector('.head').classList.toggle('newh')
     document.querySelector('.dic').style.display = 'flex';
}