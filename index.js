let randnum = Math.floor(Math.random() * 6) + 1; 

console.log(randnum)

let randnum2 = Math.floor(Math.random() * 6) + 1; 
console.log(randnum2);

if (randnum2 < randnum) {
  document.querySelector("h1").innerHTML =
    "<i class='bi bi-flag'></i> Player 1 wins ";
} else if (randnum < randnum2) {
  document.querySelector("h1").innerHTML =
    "player 2 wins <i class='bi bi-flag'></i>";
}else{
  document.querySelector("h1").innerHTML = "Try again";
}

if (randnum == 1) {
  let img1 = document.querySelector(".img1");
  img1.setAttribute("src", "./images/dice1.png");
} else if (randnum == 2) {
  let img1 = document.querySelector(".img1");
  img1.setAttribute("src", "./images/dice2.png");
} else if (randnum == 3) {
  let img1 = document.querySelector(".img1");
  img1.setAttribute("src", "./images/dice3.png");
} else if (randnum == 4) {
  let img1 = document.querySelector(".img1");
  img1.setAttribute("src", "./images/dice4.png");
} else if (randnum == 5) {
  let img1 = document.querySelector(".img1");
  img1.setAttribute("src", "./images/dice5.png");
} else if (randnum == 6) {
  let img1 = document.querySelector(".img1");
  img1.setAttribute("src", "./images/dice6.png");
} else {
  let img1 = document.querySelector(".img1");
  img1.setAttribute("src", "./images/dice2.png");
}

if (randnum2 == 1) {
  let img2 = document.querySelector(".img2");
  img2.setAttribute("src", "./images/dice1.png");
} else if (randnum2 == 2) {
  let img2 = document.querySelector(".img2");
  img2.setAttribute("src", "./images/dice2.png");
} else if (randnum2 == 3) {
  let img2 = document.querySelector(".img2");
  img2.setAttribute("src", "./images/dice3.png");
} else if (randnum2 == 4) {
  let img2 = document.querySelector(".img2");
  img2.setAttribute("src", "./images/dice4.png");
} else if (randnum2 == 5) {
  let img2 = document.querySelector(".img2");
  img2.setAttribute("src", "./images/dice5.png");
} else if (randnum2 == 6) {
  let img2 = document.querySelector(".img2");
  img2.setAttribute("src", "./images/dice6.png");
} else {
  let img2 = document.querySelector(".img2");
  img2.setAttribute("src", "./images/dice2.png");
}

// let img1 = document.querySelector(".img1")
// img1.setAttribute("src", "./images/dice1.png");
