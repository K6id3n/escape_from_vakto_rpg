let open = false;

function inv() {
    let but = document.querySelector('.invbut');
    let brd = document.querySelector('.ibrd');
    let amt;
    let pos;
    if (open === false) {
        amt = 89;
        open = true;
        pos = 180;
    } else {
        amt = 97;
        open = false;
        pos = 0;
    }
    but.style.transform = `rotate(${pos}deg)`;
    but.style.left = amt + "dvw";
    brd.style.left = (amt + 1) + "dvw";
}
