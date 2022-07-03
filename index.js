var randomNum1 = Math.floor(Math.random()*6)+1;
var randomimage1 = "images/dice"+randomNum1+".png";
document.querySelector(".img1").setAttribute("src", randomimage1);
var randomNum2 = Math.floor(Math.random()*6)+1;
var randomimage2 = "images/dice"+randomNum2+".png";
document.querySelector(".img2").setAttribute("src",randomimage2);

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML = "🏴‍☠️ Player 1 WINS!";
}
else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML = "🏴‍☠️ Player 2 WINS!";
}
else{
    document.querySelector("h1").innerHTML = "DRAW 🏴‍☠️ DRAW !";
}