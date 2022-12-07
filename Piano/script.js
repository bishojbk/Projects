const keys = document.querySelectorAll(".piano");
const volume = document.querySelector(".volume");
const showKeys = document.querySelector(".show-keys");
const whiteKeys = document.querySelectorAll(".alpha");
const blackKeys = document.querySelectorAll(".alphaB");

let allKeys = [];
let audio = new Audio("Tunes/tunes/a.wav");

keys.forEach((piano) => {
  allKeys.push(piano.dataset.set);
  piano.addEventListener("click", () => {
    playTune(piano.dataset.set);
  });
});

function playTune(keysValue) {
  audio.src = `Tunes/tunes/${keysValue}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-set="${keysValue}"]`);

  if (clickedKey.classList.contains("keys-white")) {
    clickedKey.classList.add("active");
  }

  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 200);

  if (clickedKey.classList.contains("keys-black")) {
    clickedKey.classList.add("black-key");
  }

  setTimeout(() => {
    clickedKey.classList.remove("black-key");
  }, 200);
}

const keyboardTune = (e) => {
  let alphabetClicked = e.key;

  alphabet = alphabetClicked.toUpperCase();
  if (allKeys.includes(alphabet)) {
    playTune(alphabet);
  }
};

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

let count = 0;
function keysVisible() {
  count++;

  if (count % 2 === 1) {
    whiteKeys.forEach((whiteKeys) => {
      whiteKeys.style.display = "block";
    });

    blackKeys.forEach((blackKeys) => {
      blackKeys.style.display = "block";
    });
  }
  if (count % 2 === 0) {
    whiteKeys.forEach((whiteKeys) => {
      whiteKeys.style.display = "none";
    });

    blackKeys.forEach((blackKeys) => {
      blackKeys.style.display = "none";
    });
  }
}
volume.addEventListener("input", handleVolume);
document.addEventListener("keydown", keyboardTune);
showKeys.addEventListener("click", keysVisible);
