
 var playerName1=prompt("Player 1 Name");
 var playerName2=prompt("player 2 Name");
// alert("nilesh");
// document.getElementById("player").innerHTML= playerName1 +" & "+ playerName2;
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage="dice" + randomNumber1+".png";

var randomImageSource="images/" + randomDiceImage;
// console.log(randomDiceImage)
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage="dice" + randomNumber2+".png";

var randomImageSource="images/" + randomDiceImage;
// console.log(randomDiceImage)
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML=" 🤩"+playerName1+" win the game";
}
else if( randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML=" 🤩"+playerName2+" win the game";
}
else{
    document.querySelector("h1").innerHTML="🙁Play Agian";
}


