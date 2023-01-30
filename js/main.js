const buttons = document.getElementsByTagName("input");
const result = document.getElementById("result");
const buttonPressed = e => {
  switch (e.target.id) {
    case ("NavBarDownload"):
      window.location.replace("http://localhost:63342/DiscoBot/Downloads.html?_ijt=b3j4oea1so1b25ejddk04jee1h");
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
  window.location.replace("http://localhost:63342/DiscoBot/index.html?_ijt=b3j4oea1so1b25ejddk04jee1h");
}

function download(version) {
  alert(version);
}
