function playSound(src){
  const audio = new Audio(src);
  audio.play();
}

document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase(); 
    
    if (key === "a") {
      playSound("./sounds/clap.wav");
    } else if (key === "s") {
      playSound("./sounds/hihat.wav");
    } else if (key === "d") {
      playSound("./sounds/kick.wav");
    } else if (key === "f") {
      playSound("./sounds/openhat.wav");
    } else if (key === "g") {
      playSound("./sounds/boom.wav");
    } else if (key === "h") {
      playSound("./sounds/ride.wav");
    } else if (key === "j") {
      playSound("./sounds/snare.wav");
    } else if (key === "k") {
      playSound("./sounds/tom.wav");
    } else if (key === "l") {
      playSound("./sounds/tink.wav");
    }
  });
//   const box = document.getElementById("button");

//  document.addEventListener("keydown", function (event) {
//     const key = event.key.toLowerCase();
//     if (event.key == key) {
//       box.classList.add("active");

//       // Optional: remove the class after 200ms
//       setTimeout(() => {
//         box.classList.remove("active");
//       }, 200);
//     }
//   });

document.addEventListener("keydown", function (event) {
  const keyPressed = event.key.toLowerCase();
  const keyDiv = document.querySelector(`.key[data-key="${keyPressed}"]`);

  if (keyDiv) {
    keyDiv.classList.add("active");
    setTimeout(() => {
      keyDiv.classList.remove("active");      
    }, 200);
  }
});