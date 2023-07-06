let yourName =prompt("Adinizi giriniz:")
let nameSurname = document.querySelector("#nameSurname");
nameSurname.innerHTML =`${yourName}`


function timeCircle(){
    let date =new Date();
    let clock = document.getElementById("myClock");
    let hours = document.getHours();
    let minutes = document.getMinutes();
    let seconds = document.getSecond();

    hours = ('0'+ hours).slice(-2);
    let days =['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let dayName = days[days.getDay()];

    minutes = ('0'+ minutes).slice(-2);
    seconds = ('0'+ seconds).slice(-2);

    clock.innerHTML =`${dayName}:${minutes}:${seconds}:${dayName}`;
}
setInterval(timeCircle, 1000);