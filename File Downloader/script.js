const fileInput = document.querySelector("input");
const downloadButton = document.querySelector("button");

downloadButton.addEventListener("click", (e) => {
  e.preventDefault();
  downloadButton.innerText = "Downloading File....";
  fetchFile(fileInput.value);
});

function fetchFile(url) {
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      let tempURL = URL.createObjectURL(file);
      let aTag = document.createElement("a");
      aTag.href = tempURL;
      aTag.download = url.replace(/^.*[\\\/]/, "");
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
      URL.revokeObjectURL(tempURL);
      downloadButton.innerText = "Download File";
    });
}
