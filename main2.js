let resultDiv = document.querySelector(".result");
let rockDiv = document.getElementById("rockID");
let paperDiv = document.getElementById("paperID");
let scissorsDiv = document.getElementById("scissorsID");
let imageDiv = document.getElementById("imageID");
let UserHand = document.getElementById("userHandID");
let computerHand = document.getElementById("computerHandID");



function takeComGuess() {
    let guess = [ 'rock', 'paper', 'scissors' ];
    let randomGuess = Math.floor(Math.random() * 3);
    return guess[randomGuess];  
}


function game(userGuess) {
    let computerGuess = takeComGuess();

    if (userGuess === "rock") {

             if (computerGuess === "rock") {
                document.getElementById("computerHandID").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpD3K8bBeVJUWTmhtJjTm2OgaYYNr60RhDH8dahnCc4X1FqSAo&s";
                document.getElementById("imageID").src = "http://technewsdestination.com/wp-content/uploads/2019/08/190808-human-vs-ai-lg.jpg";
                resultDiv.innerHTML = `Oops. We made the same choice. Lets start again.`;
             }
    
            else if (computerGuess === "scissors") {

                document.getElementById("computerHandID").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbVAf4scWY9palle-oco-zqOxkLf423dIW50drxV4Is2siFYWT&s"
                document.getElementById("imageID").src = "https://www.zastavki.com/pictures/1600x1200/2009/3D-graphics_Cool_smile_014046_.jpg";
                resultDiv.innerHTML = resultDiv.innerHTML = `${userGuess}  beats   ${computerGuess} . You win`;

            }else {

                document.getElementById("computerHandID").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7sLH3gseM2bk2jdwDhHDruM8NEw8TlYozc1tV4rOzTJ8m4oY&s"
                document.getElementById("imageID").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn60BEPP2mO6Is2PW92UoOP1S6_m6u19J_mcHAvQspMLiTsOXo&s"
                resultDiv.innerHTML = resultDiv.innerHTML = `${userGuess}  defeats by  ${computerGuess} . You lost`;
            }    
    }

    if (userGuess === "paper") {

        if (computerGuess === "paper") {
            document.getElementById("computerHandID").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7sLH3gseM2bk2jdwDhHDruM8NEw8TlYozc1tV4rOzTJ8m4oY&s";
            document.getElementById("imageID").src = "http://technewsdestination.com/wp-content/uploads/2019/08/190808-human-vs-ai-lg.jpg";
            resultDiv.innerHTML = `Oops. We made the same choice. Lets start again.`;
        }

        else if (computerGuess === "rock") {

            document.getElementById("imageID").src = "https://www.zastavki.com/pictures/1600x1200/2009/3D-graphics_Cool_smile_014046_.jpg";
            document.getElementById("computerHandID").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpD3K8bBeVJUWTmhtJjTm2OgaYYNr60RhDH8dahnCc4X1FqSAo&s";
            resultDiv.innerHTML = resultDiv.innerHTML = `${userGuess}  beats   ${computerGuess} . You win`;

        }else {

            document.getElementById("imageID").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn60BEPP2mO6Is2PW92UoOP1S6_m6u19J_mcHAvQspMLiTsOXo&s";
            document.getElementById("computerHandID").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbVAf4scWY9palle-oco-zqOxkLf423dIW50drxV4Is2siFYWT&s";
            resultDiv.innerHTML = resultDiv.innerHTML = `${userGuess}  defeats by  ${computerGuess} . You lost`;
        } 
    }

    if (userGuess === "scissors") {

        if (computerGuess === "scissors") {
            document.getElementById("computerHandID").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbVAf4scWY9palle-oco-zqOxkLf423dIW50drxV4Is2siFYWT&s";
            document.getElementById("imageID").src = "http://technewsdestination.com/wp-content/uploads/2019/08/190808-human-vs-ai-lg.jpg";
            resultDiv.innerHTML = `Oops. We made the same choice. Lets start again.`;
        }

        else if (computerGuess === "paper") {

            document.getElementById("imageID").src = "https://www.zastavki.com/pictures/1600x1200/2009/3D-graphics_Cool_smile_014046_.jpg";
            document.getElementById("computerHandID").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7sLH3gseM2bk2jdwDhHDruM8NEw8TlYozc1tV4rOzTJ8m4oY&s";
            resultDiv.innerHTML = resultDiv.innerHTML = `${userGuess}  beats   ${computerGuess} . You win`;

        }else {

            document.getElementById("imageID").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn60BEPP2mO6Is2PW92UoOP1S6_m6u19J_mcHAvQspMLiTsOXo&s";
            document.getElementById("computerHandID").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpD3K8bBeVJUWTmhtJjTm2OgaYYNr60RhDH8dahnCc4X1FqSAo&s"
            resultDiv.innerHTML = resultDiv.innerHTML = `${userGuess}  defeats by  ${computerGuess} . You lost`;
        }
    }
}

game("rock, paper, scissors");


function main() {  
    rockDiv.addEventListener('click', function () {
        game("rock");
        document.getElementById("userHandID").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpD3K8bBeVJUWTmhtJjTm2OgaYYNr60RhDH8dahnCc4X1FqSAo&s";
    })

    paperDiv.addEventListener('click', function () {
        game("paper");
        document.getElementById("userHandID").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7sLH3gseM2bk2jdwDhHDruM8NEw8TlYozc1tV4rOzTJ8m4oY&s";
    })

    scissorsDiv.addEventListener('click', function () {
        game("scissors");
        document.getElementById("userHandID").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbVAf4scWY9palle-oco-zqOxkLf423dIW50drxV4Is2siFYWT&s";
    })
}
main();



