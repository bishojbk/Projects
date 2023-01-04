const audio = document.querySelector("audio");
const play=document.querySelector(".play")

play.addEventListener("click",playAudio)

function playAudio() {
  audio.play();
}
