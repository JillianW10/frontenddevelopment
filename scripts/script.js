// JavaScript Document
console.log("hi");

let menuButton = document.querySelector("header section > button");
const video = document.querySelector("video");
const pauseButton = document.querySelector("#pauseButton");
let sluitButton = document.querySelector("header nav > button");

menuButton.addEventListener("click", openMenu);
sluitButton.addEventListener("click", sluitMenu);
pauseButton.addEventListener("click", pause);

function openMenu(){
    let nav = document.querySelector("nav");
    nav.classList.add("toonMenu");
  }
  
function sluitMenu(){
    let nav = document.querySelector("nav");
    nav.classList.remove("toonMenu");
}
  
function pause() {
    if (video.paused) {
      video.play(); 
      pauseButton.textContent = "Pause Video"; 
    } else {
      video.pause();
      pauseButton.textContent = "Play Video"; 
    }
}
