let resultDiv = document.querySelector(".result");
let rockDiv = document.getElementById("rockID");
let paperDiv = document.getElementById("paperID");
let scissorsDiv = document.getElementById("scissorsID");
let imageDiv = document.getElementById("imageID");


function takeComGuess() {
    let guess = [ 'rock', 'paper', 'scissors' ];
    let randomGuess = Math.floor(Math.random() * 3);
    return guess[randomGuess];
}


function game(userGuess) {
    let computerGuess = takeComGuess();

    if (userGuess === computerGuess) {
        document.getElementById("imageID").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqdK-KNxBWMnA1JZjJ3mypOj_YKWy3xI00Rbv1yEL_mebZ_MYT&s";
        resultDiv.innerHTML = `Oops. We made the same choice. Lets start again.`;
    }

    else if (userGuess === "rock") {
            if (computerGuess === "scissors") {
                document.getElementById("imageID").src = "https://www.zastavki.com/pictures/1600x1200/2009/3D-graphics_Cool_smile_014046_.jpg";
                resultDiv.innerHTML = resultDiv.innerHTML = `${userGuess}  beats   ${computerGuess} . You win`;

            }else {
                document.getElementById("imageID").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn60BEPP2mO6Is2PW92UoOP1S6_m6u19J_mcHAvQspMLiTsOXo&s"
                resultDiv.innerHTML = resultDiv.innerHTML = `${userGuess}  defeats by  ${computerGuess} . You lost`;
            }    
    }

    else if (userGuess === "paper") {
        if (computerGuess === "rock") {
            document.getElementById("imageID").src = "https://www.zastavki.com/pictures/1600x1200/2009/3D-graphics_Cool_smile_014046_.jpg";
            resultDiv.innerHTML = resultDiv.innerHTML = `${userGuess}  beats   ${computerGuess} . You win`;

        }else {
            document.getElementById("imageID").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn60BEPP2mO6Is2PW92UoOP1S6_m6u19J_mcHAvQspMLiTsOXo&s"
            resultDiv.innerHTML = resultDiv.innerHTML = `${userGuess}  defeats by  ${computerGuess} . You lost`;
        } 
    }

    else if (userGuess === "scissors") {
        if (computerGuess === "paper") {
            document.getElementById("imageID").src = "https://www.zastavki.com/pictures/1600x1200/2009/3D-graphics_Cool_smile_014046_.jpg";
            resultDiv.innerHTML = resultDiv.innerHTML = `${userGuess}  beats   ${computerGuess} . You win`;

        }else {
            document.getElementById("imageID").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn60BEPP2mO6Is2PW92UoOP1S6_m6u19J_mcHAvQspMLiTsOXo&s"
            resultDiv.innerHTML = resultDiv.innerHTML = `${userGuess}  defeats by  ${computerGuess} . You lost`;
        }
    }
}

game("rock, paper, scissors");


function main() {  
    rockDiv.addEventListener('click', function () {
        game("rock")
    })

    paperDiv.addEventListener('click', function () {
        game("paper")
    })

    scissorsDiv.addEventListener('click', function () {
        game("scissors")
    })
}
main();

