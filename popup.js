// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");
let time = 0;
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

function setColor() {
  changeColor.style.backgroundColor = time % 2 == 1 ? "red" : "blue";
  time++;
}

setInterval(setColor, 1000);
