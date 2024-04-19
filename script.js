function sf() {
    // document.getElementById("fight").classList.toggle("null");
    setInterval(movearr, 2000);
}

function movearr() {
    i = 0;
    var darrElement = document.getElementById("darr");
    darrElement.classList.add("move");
    setTimeout(function() {
        darrElement.classList.remove("move");
    }, 1000);
    document.addEventListener("keydown", function(event) {
        if (event.key === " ") {
            console.log("end");
            clearInterval(movearr); // Clear the interval
            var style = window.getComputedStyle(document.getElementById("darr"));
            var property = "left"; // Assuming you want to stop the left translation
            var currentValue = style.getPropertyValue(property);
            document.getElementById("darr").style[property] = currentValue; // Stop at the current position
        }
    });
    
}



function inv(){
    arrow = document.querySelector('.arrow')
    inventory = document.querySelector('.inventory')
    dialogue = document.querySelector('.dialogue')
    arrow.classList.toggle('arrowNew')
    inventory.classList.toggle('inventoryNew')
    dialogue.classList.toggle('dialogue-shift')
}

sf();
