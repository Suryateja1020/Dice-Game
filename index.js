
var num1 = Math.ceil(Math.random() * 6);

var num2 = Math.ceil(Math.random() * 6);

document.querySelectorAll("img")[0].setAttribute("src", "./images/dice"+num1+".png");

document.querySelectorAll("img")[1].setAttribute("src", "./images/dice"+num2+".png");

if(num1 > num2)
{
    document.querySelector('h1').textContent = "🚩 Player 1 Wins!"
}

else if(num1 < num2)
{
    document.querySelector('h1').textContent = "Player 2 Wins 🚩!"
}

else
{
    document.querySelector('h1').textContent = "Draw!"
}




