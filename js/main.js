const buttons = document.getElementsByTagName("input");
const result = document.getElementById("result");
const buttonPressed = e => {
  switch (e.target.id) {
    case ("NavBarDownload"):
      window.location.href = "~/Downloads";
      break;
    case ("NavBarHelp"):
      alert("help")
      break;
    case ("NavBarAbout"):
      alert("About")
      break;
    case ("NavBarFeatures"):
      alert("Features")
      break
    default:
      break
  }

  // result.innerHTML = `<strong>${e.target.id}</strong>`;
}

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}

function home() {
  window.location.href = "~";
}

function download(version) {
  alert(version);
}
