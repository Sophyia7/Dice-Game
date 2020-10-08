var randomNumber1 = Math.floor(Math.random() * 6) +1; //creates random number from 1-6

var randomDiceimage = "dice" + randomNumber1 + ".png"; // image of random dice

var randomDiceSource = "images/" + randomDiceimage; //image source of random dice

var image1 = document.querySelectorAll("img")[0] // this targets the first dice

image1.setAttribute("src", randomDiceSource); // this targets the first dice source

var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomDiceSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins!🚩";
}
 else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!"
}
