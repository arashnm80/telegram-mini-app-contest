// doesn't work, don't know why!!!!
// document.getElementById("headerColor")?.textContent = Telegram.WebApp.headerColor;

// headerColor
const headerColorElement = document.getElementById("headerColor");
headerColorElement.textContent = Telegram.WebApp.headerColor;

// version
const versionElement = document.getElementById("version");
versionElement.textContent = Telegram.WebApp.version;