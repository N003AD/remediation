
let joursEl = document.getElementById("j");
let heuresEl = document.getElementById("h");
let minutesEl = document.getElementById("m");
let secondesEl = document.getElementById("s");

function compteArebours(){
    let nowYear= moment('2023','YYYY');
    let now=moment();
    let difference= nowYear - now ;
    let nbJours=nowYear.diff(now,"day");
    let duration=moment.duration(difference,'milliseconds')
    joursEl.textContent = nbJours;
    heuresEl.textContent =  duration._data.hours;
    minutesEl.textContent = duration._data.minutes;
    secondesEl.textContent = duration._data.seconds;
}

setInterval(() => {
    compteArebours();
}, 1000);
