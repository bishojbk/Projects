const textArea = document.querySelector("textarea"),
  voiceList = document.querySelector("select");
speechButton = document.querySelector("button");

let synth = speechSynthesis;
let isSpeaking = true;

function voices() {
  for (let voice of synth.getVoices()) {
    let selected = voice.name === "Google US English" ? "selected" : "";
    let option = `<option value="${voice.name}"${selected}>${voice.name} (${voice.lang})</option>`;
    voiceList.insertAdjacentHTML("beforeend", option);
  }
}
synth.addEventListener("voiceschanged", voices);
function textToSpeech(text) {
  let speech = new SpeechSynthesisUtterance(text);
  for (let voice of synth.getVoices()) {
    if (voice.name === voiceList.value) {
      speech.voice = voice;
    }
  }
  synth.speak(speech);
}

speechButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (textArea.value !== "") {
    if (!synth.speaking) {
      textToSpeech(textArea.value);
    }
    if (textArea.value.length > 8) {
      if (isSpeaking) {
        synth.resume();
        isSpeaking = false;
        speechButton.innerText = "Pause Speech";
      } else {
        synth.pause();
        isSpeaking = true;
        speechButton.innerText = "Resume Speech";
      }

      setInterval(() => {
        if (!synth.speaking && !isSpeaking) {
          isSpeaking = true;
          speechButton.innerText = "Convert to Speech";
        }
      });
    } else {
      speechButton.innerText = "Convert to Speech";
    }
  }
});
