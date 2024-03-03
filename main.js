
let homePoints = document.getElementById("homepoints");
let guestsPoints = document.getElementById("guestspoints");

function plus1home(){
    let currentPoints = parseInt(homePoints.textContent);
    currentPoints ++;
    homePoints.textContent = currentPoints;
}

function plus2home(){
    let currentPoints = parseInt(homePoints.textContent);
    currentPoints += 2;
    homePoints.textContent = currentPoints;
}

function plus3home(){
    let currentPoints = parseInt(homePoints.textContent);
    currentPoints += 3;
    homePoints.textContent = currentPoints;
}

function plus1guests(){
    let currentPoints = parseInt(guestsPoints.textContent);
    currentPoints++;
    guestsPoints.innerText = currentPoints;
}
function plus2guests(){
    let currentPoints = parseInt(guestsPoints.textContent);
    currentPoints+=2;
    guestsPoints.innerText = currentPoints;
}
function plus3guests(){
    let currentPoints = parseInt(guestsPoints.textContent);
    currentPoints+=3;
    guestsPoints.innerText = currentPoints;
}

function reset(){
    guestsPoints.innerText = 0;
    homePoints.textContent = 0;
}