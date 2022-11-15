let score = 0;
let clickers = 1;
let autoClickers = 0;





document.querySelector("#score").addEventListener("click", function () {
   
    score = score + clickers;
    document.querySelector("#scoreText").innerText = "Score   : "+ score + " " + "Likes";
    if (score>100) {
        document.querySelector("#score").style.display="none" ;
        document.querySelector("#score2").style.display="block" ;
        }
});


document.querySelector("#score2").addEventListener("click", function () {
    score = score + clickers;
    document.querySelector("#scoreText").innerText = "Score: " + score + " " + "Likes";
    if (score>=100) {
        document.querySelector("#score").style.display="none" ;
        document.querySelector("#score2").style.display="block" ;
        }
});

  
let n = 10;
document.querySelector("#buy").addEventListener("click", function () {
    
    if (score < n) {
        var audio = document.getElementById("audio1");
audio.play();
        alert("vous n'avez pas assez de clicks!");
    } else if (score >= n) {
        var audio = document.getElementById("audio");
audio.play();
        clickers = clickers + 1;
        score = score - n;
        n = n * 2
        document.querySelector("#clicker").innerText = "x" + clickers;
        document.querySelector("#scoreText").innerText = "Score: " + score + " " + "Likes";
        document.querySelector("#clicker1").innerHTML = 'Prix du Clicker : ' + n + ' clicks <img class="likess" src="images/1024px-Facebook_Like_button.svg.png"> ';
    }
});

document.querySelector("#reset").addEventListener("click", function () {

        window.location.reload();
    }) ;

    var money = 0;
var currentMoney = document.getElementById("scoretext");

    function addOne() {
        money++;
        currentMoney.innerHTML = money;
      
        var moneyAnimation = document.createElement("p");
        moneyAnimation.innerHTML = "+1";
        document.getElementById("scoretext").appendChild(moneyAnimation);
        moneyAnimation.classList.add("scoretext"); // Add the class that animates
      }

let x = 100;
document.querySelector("#buy-auto-clicker").addEventListener("click", function () {
    if (score < x) {
        alert("vous n'avez pas assez de clicks!");
    } else if (score >= x) {
        autoClickers = autoClickers + 1;
        score = score - x;
        x = x * 2;
        document.querySelector("#scoreText").innerText = "Score: " + score;
        document.querySelector("#auto-clickers").innerText = "x" + autoClickers;
        document.querySelector("#auto").innerHTML = "Prix d'auto Clicker : " + x + ' clicks <img class="likess" src="images/[CITYPNG.COM]Cute Fb Care React Reaction Emoji - 720x720.png"> ';


        setInterval(function () {
            score = score + clickers;
            document.querySelector("#scoreText").innerText = "Score: " + score + " " + "Likes";
        }, 1000);
    }
});
