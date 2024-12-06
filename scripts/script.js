// JavaScript Document
console.log("hi");

let menuButton = document.querySelector("header section > button")
menuButton.addEventListener("click", openMenu)

function openMenu(){
    let nav = document.querySelector("nav")
    nav.classList.add("toonMenu")
  }

  let sluitButton = document.querySelector("header nav > button")
  sluitButton.addEventListener("click", sluitMenu)
  
  function sluitMenu(){
    let nav = document.querySelector("nav");
    nav.classList.remove("toonMenu");
  }


  const video = document.querySelector("video");
  const pauseKnop = document.querySelector("#pauseKnop");
  
  pauseKnop.addEventListener("click", pause);
  
  function pause() {
    if (video.paused) {
      video.play(); 
      pauseKnop.textContent = "Pause Video"; 
    } else {
      video.pause();
      pauseKnop.textContent = "Play Video"; 
    }
  }

