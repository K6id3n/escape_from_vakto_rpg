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
// mission 1:
const next1 = new Cards("Next", '0.1', ' ', true)
const run2 = new Cards("Run!", '0.2', ' ', false)
const fight3 = new Cards("Fight!", '0.3', ' ', false)
const deaths2 = new Cards("death", null, 'The zerg catches up to you with its fast adaptive legs and consumes you and your team.', false)
const deaths13 = new Cards("death", null, 'Fleeing this early in the game... Shame on you.', false)

// mission 1 options:(will tell you where it goes on click)
// 3: *fight is done* ->(4)
// 4: Next (5)
// 5: Inspect the box (circuts->ammo / 6) | Continue walking (6)
// 6: Run! (deaths13) | Fight! (deaths13 / 7)
// 7: Continue walking (8) | Search for more (7 ->limit once)
// 8: Run! (deaths13) | Fight! (9)
// 9: Next (9)
// 10: Shoot them from a distance. (fight? / 11) | run up with your melee weapon and try to defeat them all at once. (deaths13)
// 11: Next (12)
// 12: (get second piece) Next (goes to mission page)


// mission 2:
const M2next1 = new Cards("Next", '1.1', ' ', true)
const M2run2 = new Cards("Run!", '0.13', ' ', false)
const M2fight3 = new Cards("Fight!", '0.3', ' ', false)
// deaths ↓
const M2deaths13 = new Cards("death", null, 'Your footsteps alert them of your position and the zergs quickly surround you and your companions.', false)
const M2deaths14 = new Cards("death", null, 'You get overpowered by the vast amount of small agile zergs.', false)
const M2deaths15 = new Cards("death", null, 'The super charged shot is able to shatter the rock… Along with a supporting structure behind the rock. You and your team are crushed to death.', false)
const M2deaths16 = new Cards("death", null, 'You slip and fall over as the larger zerg catches up to you and drags you into the depths of the cave.', false)
const M2deaths17 = new Cards("death", null, 'You miss the zerg and it gets a hold of you and drags you into the depths of the cave.', false)
const M2deaths18 = new Cards("death", null, 'The laser gun is too loud and alerts the other bat zergs to your position, with their large population, they quickly overpower you.', false)
// 2 ↓
const M2optionTwo1 = new Cards("Fight with your gun.", '1.14', ' ', false)
const M2optionTwo2 = new Cards("Fight with your melee weapon.", '1.3', ' ', false)
// 3 ↓
const M2next4 = new Cards("Continuing through the cave, you find resources along the way.", '1.4', ' ', true)
// 4 ↓
const M2optionFour1 = new Cards("Push it with the help of your team.", '1.5', ' ', false)
const M2optionFour2 = new Cards("Super charge your laser gun and shoot it at the rock.", '1.15', ' ', false)
// 5 ↓ 
const M2optionFive1 = new Cards("Block!", '1.6', ' ', false)
const M2optionFive2 = new Cards("Dodge!", '1.8', ' ', false)
// 6 ↓
const M2optionSix1 = new Cards("Shoot!", '1.7', ' ', false)
const M2optionSix2 = new Cards("Try to run!", '1.17', ' ', false)
// 7 ↓ (timer) is it also true? not false?
const M2optionSevenLive = new Cards("You hit the zerg and kill with one strike.", '1.10', ' ', false)
const M2optionSevenDeath = new Cards("You fail hit the zerg.", '1.17', ' ', false)
// 8 ↓ (timer)
const M2optionEightLive = new Cards("You get a chance to slice the bat zerg.", '1.9', ' ', false)
const M2optionEightDeath = new Cards("You fail to slice the bat zerg.", '1.17', ' ', false)
// 9 ↓
const M2next10 = new Cards("Next", '1.10', ' ', true)
// 10 ↓
const M2optionTen1 = new Cards("Try to shoot the zergs.", '1.18', ' ', false)
const M2optionTen2 = new Cards("Try to slice the zergs.", '1.11', ' ', false)
// 11 ↓
const M2next12 = new Cards("Next", '1.12', ' ', true)
// 12 ↓
// missionPage


// mission 2 options:(will tell you where it goes on click)
// 2: Fight with your gun. (death 14) | Fight with your melee weapon. (3)
// 3: Continuing through the cave, you find resources along the way. (4)
// 4: Push it with the help of your team. (5) | Super charge your laser gun and shoot it at the rock. (death 15)
// 5: Block! (death16? / 6) | Dodge! (death16? / 8)
// 6: Shoot! (7) | Try to run! (death 17)
// 7: (timer) You hit the zerg and kill with one strike.(death17 / 10)
// 8: (timer) You get a chance to slice the bat zerg. (death17 / 9)
// 9: Next (10)
// 10: Try to shoot the zergs. (death 18) | Try to slice the zergs. (11)
// 11: Next(12)
// 12: Next(goes to mission page)

let game = [
    // mission 1
    [
        // 0 ↓
        ["Beginning your journey to finding the other four pieces of the recon beacon, you begin hiking through the forest.", next1],
        // 1 ↓
        ["You encounter a wolf-like figure with its fur looking hard and rigid with black stone color to it.", run2, fight3],
        // 2 ↓
        ['death', deaths2],
        // 3 ↓
        ['fightscene', 1],
        // 4 ↓
        ["Dan inspects the zerg and finds out multiple things about them:Zergs in nature are very adaptive with their surroundings and with that they have a flaw where the zergs will have at least one weakness.", ],
        // 5 ↓
        ["While walking through the forest you encounter a box.", ],
        // 6 ↓
        ["You encounter another zerg, this one looks to be a younger version of the wolf zerg and its thick fur looks like it can be penetrated by bullets. Rather than having to aim for the wolf zerg’s weakness.", ],
        // 7 ↓
        ["You get some ammo and a few medkits.", ],
        // 8 ↓
        ["You encounter another zerg, this one looks to be a younger version of the wolf zerg and its thick fur looks like it can be penetrated by bullets. Rather than having to aim for the wolf zerg’s weakness.", ],
        // 9 ↓
        ["Thanks to the spare ammo you found in the box, you were able to kill the zerg with a lucky shot under its mouth.", ],
        // 10 ↓
        ["Looking down at the tracker it says the second piece should be visible. With a quick look, you spot the piece! But it's guarded by multiple wolf zergs because they seem like they are searching for something around the second piece.", ],
        // 11 ↓
        ["Thanks to the spare ammo you found in the box, you were able to kill the zerg with a lucky shot under its mouth.", ],
        // 12 ↓
        // Add second piece
        ["You find the mechanic hiding from the zergs", ],
        // Goes to missions page
        // deaths will go here
        // 13
        ["death", deaths13],
    ],
    // mission 2
    [
        // 0 ↓
        ["Following the tracker, you travel a similar route when you first set off on your adventure, but this time your crew goes past the forest and finds a small cave entrance.", M2next1],
        // 1 ↓
        ["You encounter a group of smaller zergs that resemble bats. These bat-like creatures emit a low white glow from their wings. Sweeping over them with your flashlight, the bat zergs do not react. With this information you assume just like bats they are blind, but have incredible hearing. With their hearing the bat zergs start to twitch.", M2run2, M2fight3 ],
        // 2 ↓
        ["Chose your weapon!", ],
        // 3 ↓
        ["You swiftly kill the zergs with a few blows because they can’t hear where you are.", ],
        // 4 ↓
        ["You encounter a large rock that needs to be moved for you to get past.", ],
        // 5 ↓
        [" With the help of your team you guys are able to get the rock out of the way. A few moments later a bigger version of the bat zergs comes flying at you.", ],
        // 6 ↓
        ["You get knocked on the floor.", ],
        // 7 ↓
        ["Hitting its head, the shot disorients the zerg and now you have a chance to draw your sword and strike.", ],
        // 8 ↓
        ["The zerg misses you and hits its head on the wall, making it wobble in the air.", ],
        // 9 ↓
        ["You hit the zerg and kill with one strike.", ],
        // 10 ↓
        ["You come across a room containing a large collection of bat zergs that look to be in their infancy. Along with the bat zergs you find the third piece.", ],
        // 11 ↓
        ["You quickly slice them and the older bat zergs barely notice your actions because of how quiet your sword is.", ],
        // 12 ↓
        // Add third piece
        ["You find the third piece and put it into the frame with Omar's help.", ],
        // Go to missions page
        // Deaths go down here
        // 13 ↓
        ["death", M2deaths13 ],
        // 14 ↓
        ["death", M2deaths14],
        // 15 ↓
        ["death", M2deaths15],
        // 16 ↓
        ["death", M2deaths16],
        // 17 ↓
        ["death", M2deaths17],
        // 18 ↓
        ["death", M2deaths18],
    ],
    // mission 3
    [
        // 0 ↓
        ["Setting off to find the piece located at the lake, you head off in that direction.", ],
        // 1 ↓
        ["Arriving at the lake, you see a miniature land mass in the middle of the lake. The tracker indicates that the third piece is further in.", ],
        // 2 ↓
        ["We should build a raft", ],
        // 3 ↓
        ["With your best effort you miraculously build a sturdy looking raft.", ],
        // 4 ↓
        ["Using the raft you make it halfway to the land mass in the center of the lake, before the sturdy looking raft snaps in half.", ],
        // 5 ↓
        ["Omar effortlessly breaks down five trees and ties them together. Making a strong and sturdy raft.", ],
        // 6 ↓
        ["Using the raft you reach half way to the land mass in the center of the lake, before you see huge shadows swimming in the water.", ],
        // 7 ↓
        // Set timer
        ["Your bullets hit the shadow making the water bleed red. This irritates the other shadows and the next second you see monstrous fish monsters leap out of the water and try to bite at your face.", ],
        // 8 ↓
        // Set timer
        ["Waiting for a bit you believe that the shadows will pass the raft, but the next moment you see monstrous fish monsters leaping out of the water and trying to bite at your face.", ],
        // 9 ↓
        ["With impeccable aim and speed you are able to defend the raft.", ],
        // 10 ↓
        ["Shooting at the water zergs while the crew paddles the raft. You reach the land mass.", ],
        // 11 ↓
        // Set timer
        ["You dodge the incoming attacks.", ],
        // 12 ↓
        ["Steading your aim and landing your shots on the water zergs. The crew successfully makes it to the land mass.", ],
        // 13 ↓
        ["You successfully keep dodging the water zergs and as you make it closer to the land mass. You can't help but think that the water zergs are decreasing their attacks, so when you turn to look around you find yourself alone on the raft.", ],
        // 14 ↓
        ["Pulling the raft onto the land mass, You finally have time to breath and look around.", ],
        // 15 ↓
        ["Hiking up a relatively small hill you can get an overview of the land and you pull out the track, letting it direct you in the direction of the fourth piece.", ],
        // 16 ↓
        ["Surprisingly there were no other life forms on the land mass beside vegetation.", ],
        // 17 ↓
        // Add fourth piece
        ["You find the fourth piece of the recon beacon in a crater, with lush green grass growing around.", ],
        // 18 ↓
        ["With a sigh you grudgingly walk back to the raft and prepare for a second round of attacks from the water zergs.", ],
        // 19 ↓
        ["Omar does a quick inspection of the raft, to find any parts that need re-tightening. Omar then gives you a signal indicating that the raft is good to go.", ],
        // 20 ↓
        ["Getting on the raft, the crew resumes their previous roles.", ],
        // 21 ↓
        ["After another round of fending off the water zergs the crew makes it back to land. From there, they head back to the home base.", ],
        // Go to missions page
    ],
    // mission 4
    [
        // 0 ↓
        ["Preparing your items to go collect the final piece. You hike up a trail and see a gigantic zerg on top of the mountain. Taking its time to stretch, the zerg then lets out a roar. Looking down at the tracker and it points you in the same direction of the gigantic zerg.", ],
        // 1 ↓
        ["Returning back to the base, it takes a few minutes of brainstorming for Omar to say that the ship had powerful bombs to handle zergs of that size.", ],
        // 2 ↓
        ["Knowing that both of the ships did not have any explosives, Dan says for Eve to calculate possible locations of where the bomb may have landed and not have been damaged by the crash", ],
        // 3 ↓
        ["Heading off to the approximate location, you are back in the forest. The trees there have been growing for countless amount of years, letting the trees reach high above the ground, blocking out the sun.", ],
        // 4 ↓
        ["You look down at your map and you see your location getting closer to the big circle(zone) on the map indicating Eve's approximate location of the bomb.", ],
        // 5 ↓
        ["Immediately once you are in the zone, it starts to shrink and give you a more precise location of the bomb.", ],
        // 6 ↓
        ["Now that you have a more precise location you", ],
        // 7 ↓
        ["Taking your time to search around, you spot a humanoid scaly zerg with four arms.", ],
        // 8 ↓
        ["You kill the tree zerg in one shot, its body falls to the ground and Dan goes up to inspect the body.", ],
        // 9 ↓
        ['After examining the body Dan says, "These tree zergs are extremely mobile, and have strong limbs allowing them to rip apart their enemy. "', ],
        // 10 ↓
        ["You and your teammates quietly make it past the tree zerg only to be spotted by another tree zerg. The tree zerg immidatly screams, alerting the other tree zergs of your presence", ],
        // 11 ↓
        ["Continuing on the path, you hear the trees rustle and then spot a tree zerg looking at you. Before you could do anything, the tree zerg inhales and then lets out a loud scream.", ],
        // 12 ↓
        ["You get there much quicker with the help of a predestined location", ],
        // 13 ↓
        ["You hear a loud inhuman scream. Looking up you see an almost humanoid scaly zerg with four arms.", ],
        // 14 ↓
        ["The tree zerg screams once again, and in the distance you hear screams, almost like the tree zerg was calling for back-up.", ],
        // 15 ↓
        ["Seeing the pack of tree zergs launching themselves through the trees. You know that you can not take them all on at the same time, so you look around to see if there is a place to get an advantage over the tree zergs. You quickly spot a large boulder with a narrow crack in the middle, almost large enough for a grown man to squeeze through. Immediately you tell your companions to drop their bags and get in the crack.", ],
        // 16 ↓
        ["As each person quickly cramps themselves in the crack, you are the last to get in, but all your companions squeeze themselves in the crack. You only have an arm's length of room before your body sticks out of the crack.", ],
        // 17 ↓
        // Set timer
        ["Waiting for the tree zergs to come you...", ],
        // 18 ↓
        ["Steadying your hand you wait for a tree zerg to arrive.", ],
        // 19 ↓
        ["Killing the tree zerg, it falls to the floor and multiple screams of anguish accompanies it. With a brief moment of no movement from both parties, multiple hands start to try and pry their way in and grab you.", ],
        // 20 ↓
        ["Adrenaline flowing through you. You take aim once again and start firing at the tree zergs.", ],
        // 21 ↓
        ["After two hours of you constantly having to kill and be aware of multiple hand, the scream of the last tree zergs rings out and now you have a moment to breath and calm your nerves down.", ],
        // 22 ↓
        ["Pushing yourself out of the crack and pushing the piles of corpses away from the crack. You look around the piles of corpses and make sure there is no hidden threats.", ],
        // 23 ↓
        ["Helping your companions out of the crack, the crew resumes on their journey to the find the bomb.", ],
        // 24 ↓
        ['Up above in the trees you see circular homes of many sticks weaving together. Dan: "These seem to be the homes of the tree zergs, we encountered earlier. We should proceed with caution."', ],
        // 25 ↓
        ["Proceeding with caution, you find to your surprise that the homes are all empty and that there were traces of the tree zergs fleeing from their settlements.", ],
        // 26 ↓
        ["You don't want to think any further on this and count it as a lucky situation.", ],
        // 27 ↓
        // Add bomb to inventory
        ["Using the tracker you quickly find the bomb under some leaves.", ],
        // 28 ↓
        ["You make quick haste back to the base, to get ready for the final battle.", ],
        // Go to mission page
    ],
    // mission 5
    [
        // 0 ↓
        ["You arrive at the second ship with a chance to prepare one last time to defeat the mother zerg and get the final piece.", ],
        // after click from upbove reset hp to 100 and add some ammo
        // 1 ↓
        ["You leave", ],
        // 2 ↓
        ["While you walk you talk to the zoologist about the mother zerg", ],
        // 3 ↓
        ["Dan: Ever since we encountered the mother zerg I've been observing it.", ],
        // 4 ↓
        ["What have you found?", ],
        // 5 ↓
        ["Dan:I've noticed that the mother zerg has moved its previous nest to where the final piece is. I’m guessing the mother zerg finds comfort from the electrical waves the final piece emits.", ],
        // 6 ↓
        ["Can’t we scare it away from the piece? Can’t we scare it away from the piece?", ],
        // 7 ↓
        ["Dan:I don’t think so, and that's going to be dangerous.", ],
        // 8 ↓
        ["Well, okay don't worry. We have prepared enough to take it down.(as you tap the bomb)", ],
        // 9 ↓
        ["Dan:I did notice that it has a major flaw though.", ],
        // 10 ↓
        ["What is it?", ],
        // 11 ↓
        ["Dan:It’s the flaps on its head that allows it to breathe, if you can get a few shots at it or manage to stick the bomb there you could probably knock it out in a few hits.", ],
        // 12 ↓
        ["So aim for the head?", ],
        // 13 ↓
        ["Ending your conversation with Dan, you continue down the path and encounter multiple heavily armored zergs along the way", ],
        // 14 ↓
        ["You get to the edge of the hill and quickly climb up the tree to hide. Peaking through the top of the leaves you can partially see the mother zerg.", ],
        // 15 ↓
        ["Keep hiding", ],
        // 16 ↓
        ["You see a chance to pounce on the mother.", ],
        // 17 ↓
        ["You hit it with a disorienting blow giving you a chance to shoot as she gasps for air.", ],
        // 18 ↓
        ["You find a vantage point where you can place a few shots while being hidden.", ],
        // 19 ↓
        ["You place a few shots as it breathes disorienting and angering the mother zerg.", ],
        // 20 ↓
        ["You manage to land a shot on its breath, dealing a lot of damage and disorienting it.", ],
        // 21 ↓
        ["Getting out of sight and finding cover from the mother zerg and its guards. You decide to stay put to use the med kit.", ],
        // 22 ↓
        ["You get a chance to activate the bomb", ],
        // After activating the bomb, it has a 10% chance to end(The bomb fails to explode and you travel back to the ship hoping that one day you will escape.)
        // 23 ↓
        ["The bomb has a one minute timer and you encounter multiple guard zergs in this time.", ],
        // If you die in battle goes to end(You and your team are consumed by the mother zerg’s guards before the bomb gets a chance to detonate.)
        // 24 ↓
        // Add fifth piece
        ["The bomb goes off! Killing the mother zerg and making all of its guards flee away.", ],
        // 25 ↓
        ["Omar installs the final piece of the recon beacon together and starts the beacon.", ],
        // End card (The Mother ship responds to your distress call and you escape Valkto with your team.)
    ],
];

// First is the dialogue, second is the row (starts at 0 and the next number is the card in figma 10 is 0.10), third is death message, fourth is false:dialogue True:dialogue
// This is for 6 (advert the crisis)
const next6Dot1 = new Cards("Next", '2.1', ' ', false)
// End card
const next6Dot2 = new Cards("death", null, 'You continue your everyday job on the space craft')

// This is for 4-5 (Dan)
const next4Dot1 = new Cards("Next", '1.1', ' ', true)
const next4Dot2 = new Cards("Next", '1.2', ' ', true)
const next4Dot3 = new Cards("Next", '1.3', ' ', true)
// const option4Dot1 = new Cards("You choose to stay put and survive.", '1.')
// This is the on card 4 option 1 and it leads to a death card

// This is for 1-3 (soldier)
const next1Dot1 = new Cards("Next", '0.1', ' ', true)
const next1Dot2 = new Cards("Next", '0.2', ' ', true)
const next1Dot3 = new Cards("Next", '0.3', ' ', true)
const option1Dot1 = new Cards("You choose to stay put and survive", '0.4', ' ', false)
const option1Dot2 = new Cards("You choose to leave the lounge room.", '0.1', ' ', false)
const Sdead4 = new Cards("death", null, 'You are eventually eaten by zergs with no way to protect yourself.', false)
const Sdead44 = new Cards("death", null, ' Forgetting your original goal of building the recon beacon, time flies by and the Mothership has deemed you dead.', false)
// Soldier options:(will tell you where it goes on click)
// 3: You choose to stay put and survive (Sdead4) | You choose to leave the lounge room. (5)
// 5: Choose to go back and stay put and survive(Sdead4) | Make your way to the command room (6)
// 6: Next(7)
// 7: Search around the command room (9) | Inspect commander John's body (8)
// 8: Next(9)
// 9: Ask Eve to do a damage check on the ship. (11) | Ask Eve to contact the mother ship to send a rescue team. (10)
// 10: Ask Eve to do a damage check on the ship.(11)
// 11: Tell me what programs need to be restarted. (12) | Ask Eve to contact the mother ship to send a rescue team. (10)
// 12: Next (13)
// 13: Next (14)
// 14: How do I restart the emergency power system? (17) | Can't I just wait a bit for someone more suitable to come here? I can't be the only one who survived the crash. (15)
// 15: Next (16)
// 16: Next (22)
// 17: Leave to the power room. (18)
// 18: Next (19)
// 19: Head back to the command room. (21) | Go look around the ship to try and scavenge whatever your hands could get on. (20)
// 20: You decide to go with Dan to find the recon beacon. (25)
// 21: Next (22)
// 22: Next (23)
// 23: Next (24)
// 24: You decide to go with Dan to find the recon beacon. (25/add tracker to inventory)
// 25: Next (26)
// 26: Next (27)
// reminder end of first ship
// 27: Next (28)
// 28: Next (29)
// 29: Are there any other survivors? (31) | What have you been doing? (30)
// 30: Next(32)
// 31: What have you been doing? (30)
// 32: Next (33)
// 33: Next (34)
// 34: Next (35)
// 35: Next (36/circut puzzle)
// 36: (add frame and first piece to inventory) Search the ship. (37) | Ask Seth what else is on the ship. (38)
// 37: Try to open the armory (38) 
// 38: Next (39/circuts)
// 39: Next (40)
// 40: (add lazer gun & ammo) Choose to leave the ship. (41) | Following Eve's previous instructions, you sync the tracker to the frame to find the other pieces. (43)
// 41: Nah we should go. (Sdeath44) | Wait a minute, I think we are forgetting something. (42)
// 42: Following Eve's previous instructions, you sync the tracker to the frame to find the other pieces. (43)
// 43: Next(goes to mission page)


let background = [
    // 1-3 Soldier(Neo) 43 CARDS
    [
        // 0 ↓
        ["You are one of the many soldiers with the duty of patrolling the space craft protecting the Mothership.",
         next1Dot1],
        // 1 ↓
        ["The ships around the Mothership gets surprised attacked by zergs. The space craft your on happens to be closest to the start of the Zerg's attack, having the space craft your on to crash land on the planet Vakto.",
         next1Dot2],
        // 2 ↓
        ["You wake up with ringing ears, and blurry vision. As time passes your hearing and vision get clearer, allowing you to see that the ship is badly damaged with wires sticking out the steel wall and you could hear a faint sound of crackling fire. You also see blood stains on the floor and walls.",
         next1Dot3],
        // 3 ↓
        ["You know before the crash you were in the lounge room with a couple other people, but you just see corpses.",
     ],
        // 4 ↓
        ['death',
         Sdead4],
        // 5 ↓
        ["You choose to leave the lounge room.",
     ],
        // 6 ↓
        ["Make your way to the command room", 
     ],
        // 7 ↓
        ["As you push open the command room's door you see the commander John dead in his chair.",
     ],
        // 8 ↓
        ["It looks like when the ship crashed, a broken fragment of the ship's wall was lodged into his body.",
     ],
        // 9 ↓
        ["As you touch the control panel, the screen glitches and makes a crackling sound. The image eventually forms into a figure in the corner of the screen. You recognize the shape as Eve, the ship's A.I.", ],
        // 10 ↓
        ['There is a pause and then Eve says, "Communication has been cut off because of the damage the ship has received. I would recommend restarting and minimal repair to the communication system for planetary communication.', ],
        // 11 ↓
        ["Eve: The ship has sustained heavy damage with the crash and needs to restart a series of programs to better help the survivors", ],
        // 12 ↓
        ["Eve: I will give you a list of programs I have deemed most important to least important.", ],
        // 13 ↓
        ['1.The emergency power system 2. The life detector system 3. The defense system 4. The communication system', ],
        // 14 ↓
        ["Eve: Currently the ship has at most 7 more hours of power before it's out.", ],
        // 15 ↓
        ["After waiting for an hour, the lights in the command room suddenly gain more power, brightening the room. This startles you and then some time later you see someone come into the command room.", ],
        // 16 ↓
        ["A man comes into the room and introduces himself as Dan the zerg zoologist of the ship and that he was lucky enough to have survived the crash.", ],
        // 17 ↓
        ["Eve: To restart the emergency power, you need to head to the power room and flip all of the red switches down, then up.", ],
        // 18 ↓
        ["Arriving in the power room you see five red switches on each of the walls in the pentagon room.", ],
        // 19 ↓
        ["You do as Eve said before, flipping the switches up and down. After that is done, the energy core in the center of the room starts to rotate and light up. Along with the power starting up again, a screen lights up prompting a list of program names and other functions of the ship to restart.", ],
        // 20 ↓
        ["When you return back to the command room after resources you meet another survivor, Dan the Zerg zoologist.", ],
        // 21 ↓
        ["When you reach the command room you meet another survivor,  Dan the Zerg zoologist", ],
        // 22 ↓
        ["Eve: Emergency power system has been restarted, along with the life detector system, defense system, and the communication system.", ],
        // 23 ↓
        ["Eve: The next step to ensure the crew's survival is to contact the Mothership. You must rebuild and set-up the recon beacon.", ],
        // Add tracker 24 ↓
        ["Eve: Currently with the ship's scanning system, it has detected the second-half of the ship contains the frame and first piece of the recon beacon. The other five pieces of the recon beacon were split off during the crash. To have a more accurate location of the other four pieces, you would need to first get the frame and use this tracker to find the other pieces of the recon beacon.", ],
        // 25 ↓
        ["Eve: Before you go I must remind you that according to the interstellar crash landing manual, the crashies must inform the Mothership of their survival within 10 days. Otherwise the Mother Ship will proclaim them dead.", ],
        // 26 ↓
        ["Following the coordinates Eve gave you. You see in the distance broken and crushed trees following a trajectory leading to the other half of the broken ship.", ],
        // End of first ship (26) | Dan needs to jump on 27 and onwards ↓
        ["Seeing the second half of the ship slightly sunken in the ground. You see an air hatch leading into the second ship.", ],
        // 28 ↓
        ["Having the expectation of having to open the air hatch manually. You prepare to be on guard as Omar opens the air hatch, but to your surprise the air hatch did a quick scan and automatically let the crew in.", ],
        // 29 ↓
        ["Cautiously searching through the ship you meet the Seth cartographer.", ],
        // 30 ↓
        ["Seth:When I woke up the ship was in a state of running out of power, so I followed the spacecraft X099 manual of how to restart the emergency power. After that I did a little bit of exploring and then met you guys.", ],
        // 31 ↓
        ["Seth: No... At least I haven't met one.", ],
        // 32 ↓
        ["Do you know where the recon beacon is?", ],
        // 33 ↓
        ["Seth:Yes, but its locked in a cell only the commander has access to.", ],
        // 34 ↓
        ["With the help of Omar we can try to unlock it.", ],
        // 35 ↓
        // circuts 
        ["Seth:Good luck, but you won’t get that thing open.", ],
        // 36 ↓
        // add frame and piece to inventory
        ["You open the beacon only to find all but one of the 5 sectors is missing", ],
        // 37 ↓
        ["Going down the hallway you find the armory.", ],
        // 38 ↓
        // circuts 
        ["Seth: There is an armory down the hall, we should try and open it.", ],
        // 39 ↓
        ["You get into the armory.", ],
        // 40 ↓
        // Add lazer gun and some ammo
        ["You acquire a laser gun and some ammunition.", ],
        // 41 ↓
        ["Dan:I think we are forgetting something.", ],
        // 42 ↓
        ["Suddenly remembering that you need to find the rest of the beacons", ],
        // 43 ↓
        ["Hooking up the tracker to one of the ship's screens you see four red dots on a rough sketch of the planet's terrain, one forest, one in a lake, one in a cave, and one in the mountain.", ]
        // goes to mission page
        // deaths will go here
        // 44 ↓
        ["death", death1Dot44],
    ],
    // 4-5 Dan 13 CARDS
    [
        // 0 ↓
        ["You are one of the many... zoologists with the duty to travel on the space craft and record, observe, and advise the crew while the space craft guards the Mothership.", next4Dot1],
        // 1 ↓
        ["The ships around the Mothership gets surprised attacked by zergs. The space craft your on happens to be closest to the start of the Zerg's attack, having the space craft your on to crash land on the planet Vakto.", next4Dot2],
        // 2 ↓
        ["You wake up with ringing ears, and blurry vision. As time passes your hearing and vision get clearer, allowing you to see that the ship is badly damaged with wires sticking out the steel wall and you could hear a faint sound of crackling fire. You also see blood stains on the floor and walls.", next4Dot3],
        // 3 ↓
        ["You know before the crash you were in the cafeteria with a couple other researchers, but you just see corpses.", ],
        // 4 ↓
        ["You choose to leave the cafeteria.", ],
        // 5 ↓
        ["Arriving in the power room you see five red switches on each of the walls in the pentagon room.", ],
        // 6 ↓
        ["Flipping the switches up and down, the emergency power restarts.", ],
        // 7 ↓
        ["You decide to go to the command room to assume command of the ship or follow command from someone, more suited to command any survivors.", ],
        // 8 ↓
        ["Arriving into the command room, you find another survivor, Neo, one of the soldiers on the ship.", ],
        // 9 ↓
        ["Eve the AI on the ship gives a brief report of what has happen so far.", ],
        // 10 ↓
        ["You decide to go with Neo and follow his lead...", ],
        // 11 ↓
        ["You are Neo the soldier", ],
        // 12 ↓
        ["Following the coordinates Eve gave you. You see in the distance broken and crushed trees following a trajectory leading to the other half of the broken ship.", ]
        // goes to 27 on soldier(1)
    ],
    // 6 Advert the crisis 2 CARDS
    [
        // 0 ↓
        ["The ships around the Mothership gets surprised attacked by zergs. Luckily the space craft that you are on was able to make an evasive movement and retreat back to the safety of the Mothership.", next6Dot1],
        // End card? --> You continue your everyday job on the space craft
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
     document.querySelector('.dic').style.display = 'flex';
     document.querySelector('.head').classList.toggle('newh');
     document.querySelector('.dic').classList.toggle('newdic');
     for (i = 0; i < 99; i++) {  
        if (i === 98) {
            setTimeout(function() {
                let path = Math.floor((Math.random() * 3) + 1);
                 document.getElementById('num').innerHTML = path;
                 diceAfter(path);
            }, 50 * i)
        } else {
            setTimeout(function() {
            document.getElementById('num').innerHTML = Math.floor(Math.random() * 10);
        }, 50 * i)
        }
     }
  
}

function diceAfter(a) {
    document.querySelector('.dic').classList.toggle('newdic');
    // cardScene(background[a - 1][0]);
    start(0, false)
}