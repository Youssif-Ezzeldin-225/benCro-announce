const targetDate = new Date("November 15, 2026 18:00:00").getTime();
const updateCountdown =()=>{
    const now = new Date().getTime();
    const distnce = targetDate - now;
    const days = Math.floor(distnce/(1000*60*60*24));
    const hours = Math.floor(distnce%(1000*60*60*24)/(1000*60*60));
    const minutes = Math.floor(distnce%(1000*60*60)/(1000*60));
    const seconds = Math.floor(distnce%(1000*60)/1000);

    document.getElementById("days").innerText = String(days).padStart(2,'0');
    document.getElementById("hours").innerText = String(hours).padStart(2,'0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2,'0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2,'0');
    
    if (distnce < 0){
        clearInterval(intervalId);
        document.getElementById("countdown").innerHTML = "<h2>Time's Up!</h2>";
    }
}
updateCountdown();
const intervalId = setInterval(updateCountdown,1000)