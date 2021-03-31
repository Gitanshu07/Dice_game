var randomNumber1 = Math.floor(Math.random()*6) +1;
var randomdiceimage = "dice" + randomNumber1 + ".png";
var randomimagesource = "images/"+randomdiceimage;
var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomimagesource);

var randomnumber2 = Math.floor(Math.random()*6) +1 ;
var randomdiceimage2 = "images/dice"+randomnumber2+".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomdiceimage2);

if(randomNumber1>randomnumber2){

    document.querySelector("h1").innerHTML = "Player 1 Wins";

}

else if(randomNumber1<randomnumber2){

    document.querySelector("h1").innerHTML = "Player 2 Wins";
}

else{

    document.querySelector("h1").innerHTML = "Draw";
}