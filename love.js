
document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bgMusic');

  const startMusic = () => {
    music.play().catch(err => console.log('Playback blocked:', err));
    document.removeEventListener('click', startMusic);
  };

  document.addEventListener('click', startMusic);
});



const message = "Every heartbeat reminds me of you ❤️";

let i = 0;

function typeWriter(){

  if(i < message.length){

    document.getElementById("typing").innerHTML += message.charAt(i);

    i++;

    setTimeout(typeWriter,70);

  }

}

typeWriter();



const startDate = new Date("2026-03-01"); // change if your real start date is different

function updateTimer() {
  const now = new Date();

  const diff = now - startDate; // milliseconds

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const displaySeconds = seconds % 60;
  const displayMinutes = minutes % 60;
  const displayHours = hours % 24;

  document.getElementById("timer").innerText =
    `${days} days ${displayHours}h ${displayMinutes}m ${displaySeconds}s ❤️`;
}

setInterval(updateTimer, 1000);
updateTimer();



function createHeart(){

  const heart = document.createElement("div");

  heart.className = "heart";

  heart.innerHTML = "❤️";

  heart.style.left = Math.random()*100 + "vw";

  heart.style.fontSize = (Math.random()*25+18)+"px";

  heart.style.animationDuration = (Math.random()*5+4)+"s";

  document.body.appendChild(heart);

  setTimeout(()=>{

    heart.remove();

  },9000);

}

setInterval(createHeart,250);
