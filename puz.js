let stored = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let rArr = ['0110', '0110', '0100', '0100', '0100', '0100', '1110', '1111', '0110', '0101', '0110', '0110', '0111', '0101', '1110', '1110', '0110', '0110', '0110', '0100', '0100', '0110', '0100', '0110', '0100'];
let kArr = ['0011', '1001', '0001', '0001', '0001', '0100', '0111', '1111', '1100', '0101', '0011', '1100', '0111', '1010', '1101', '0111', '1001', '0110', '1001', '0100', '0100', '0110', '1000', '0110', '1000'];
function rotate(a, b, c) {
    let ang = stored[b];
    let nAng = ang + 90;
    document.getElementById(a).style.transform = 'rotate(' + nAng + 'deg)';
    stored[b] = nAng;
    let cor = 0;
    let x = rArr[c].slice(-1);
    rArr[c] = x + rArr[c].slice(0, -1);
    for (let i = 0; i < rArr.length; i++) {
        if (rArr[i] == kArr[i]) {
            cor = cor += 1;
        }
    }
    if (cor == rArr.length) {
        document.getElementById('cr').style.display = "none";
        document.getElementById('wn').style.display = "flex";
    }
}