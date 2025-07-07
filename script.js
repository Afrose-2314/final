const games = [
  { name: "Color", file: "color.html", instruction: "Match the text color, not the word!" },
  { name: "Math", file: "math.html", instruction: "Solve as many math problems as possible!" },
  { name: "Guess", file: "guess.html", instruction: "Guess the number between 1-100!" },
  { name: "Memory", file: "memory.html", instruction: "Match all pairs before time runs out!" },
  { name: "Typing", file: "typing.html", instruction: "Type sentences quickly and correctly!" }
];

let spinning = false;
let selectedIndex = 0;

function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

function spinWheel() {
  if (spinning) return;
  spinning = true;

  selectedIndex = Math.floor(Math.random() * games.length);
  const deg = 360 * 5 + selectedIndex * (360 / games.length);
  const wheel = document.getElementById("wheel");
  wheel.style.transition = "transform 4s ease-out";
  wheel.style.transform = `rotate(${deg}deg)`;

  setTimeout(() => {
    document.getElementById("gameName").innerText = "🎯 Selected: " + games[selectedIndex].name;
    showInstruction();
    spinning = false;
  }, 4500);
}

function showInstruction() {
  const instruction = document.getElementById("instruction");
  const message = document.getElementById("message");
  const okBtn = document.getElementById("okBtn");

  message.innerText = games[selectedIndex].instruction;
  instruction.style.display = "block";

  okBtn.onclick = function () {
    instruction.style.display = "none";
    window.location.href = games[selectedIndex].file;
  };
}
