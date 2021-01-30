let countdown;
const timerDisplay = document.querySelector(".display_time");
const endTime = document.querySelector(".display_end");
const buttons = document.querySelectorAll("[data-time]");


function timer(seconds){
    clearInterval(countdown)
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds)
    displayEndTime(then);
     countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now())/1000);
        if(secondsLeft < 0){
            clearInterval(countdown)
            return;
        }
        displayTimeLeft(secondsLeft)
    }, 1000)
}

function displayTimeLeft (seconds){
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    timerDisplay.textContent = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
    
}


function displayEndTime(timestamp){
        const end = new Date(timestamp);
        const hours = end.getHours();
        const adjustedHour = hours > 12 ? hours -12 : hours;
        const minutes = end.getMinutes();
        endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? "0" : " "}${minutes}`;
        
}
function startTimer(){
    const seconds = parseInt(this.dataset.time)
    timer(seconds)
     
}


buttons.forEach(button => button.addEventListener("click", startTimer))
document.customform.addEventListener("submit", function(e){
    e.preventDefault();
    const seconds = parseInt((this.minutes.value) * 60);
    timer(seconds)
    this.reset();
});