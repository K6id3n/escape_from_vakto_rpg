function sf() {
    // document.getElementById("fight").classList.toggle("null");
    setInterval(movearr, 2000);
}

function movearr() {
    i = 0;
    var darrElement = document.getElementById("darr");
    darrElement.classList.add("move");
    setTimeout(function () {
        darrElement.classList.remove("move");
    }, 1000);
    document.addEventListener("keydown", function (event) {
        if (event.key === " ") {
            setTimeout(function () {
                darrElement.classList.remove("move");
                darrElement.style.display = 'none';
                document.querySelector('.fight').style.backgroundImage = 'none';
            }, 500);
        }
    });

}



function inv() {
    arrow = document.querySelector('.arrow')
    inventory = document.querySelector('.inventory')
    arrow.classList.toggle('arrowNew')
    inventory.classList.toggle('inventoryNew')
}

