
//variable for random number for image 1
// let randomNumber1 = Math.floor(Math.random() * 6) + 1;

//variable based on location of the images is declared through concatenating
// let randomDice1 = "dice" + randomNumber1 + ".png";
// let imageSource1 = "/Users/alhassanawal/Desktop/images/" + randomDice1;

//Image 1 is selected or called and the attribute is set based on the source of the image
// let pic1 = document.querySelector(".dice .img1");
// pic1.setAttribute("src", imageSource1);

// let randomNumber1 = null;
// let randomNumber2 = null;

const buttonPlayer1 = document.querySelector("#P1");
const buttonPlayer2 = document.querySelector("#P2");
const playerResult = document.querySelector("h1");

function rPlayer1() {
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomDice1 = "dice" + randomNumber1 + ".png";
    let imageSource1 = "images/" + randomDice1;
    let pic1 = document.querySelector(".dice .img1");
    pic1.setAttribute("src", imageSource1);
    // checkWinner();
}


// same thing is done for image 2
// const buttonPlayer2 = document.querySelector("#P2");
// const playerResult = document.querySelector("h1");
// let randomNumber2 = Math.floor(Math.random() * 6) + 1;

function rPlayer2() {
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let randomDice2 = "dice" + randomNumber2 + ".png";
    let imageSource2 = "images/" + randomDice2;
    let pic2 = document.querySelector(".dice .img2");
    pic2.setAttribute("src", imageSource2);
    checkWinner();
}

function checkWinner() {
    if (randomNumber1 > randomNumber2) {
        playerResult.textContent = "Player 1 wins";
    } else if (randomNumber2 > randomNumber1) {
        playerResult.textContent = "Player 2 wins";
    } else {
        playerResult.textContent = "Draw";
    }
}

buttonPlayer1.addEventListener("click", rPlayer1);
buttonPlayer2.addEventListener("click", rPlayer2);

// let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// let randomDice2 = "dice" + randomNumber2 + ".png";
// let imageSource2 = "/Users/alhassanawal/Desktop/images/" + randomDice2;

// let pic2 = document.querySelector(".dice .img2");
// pic2.setAttribute("src", imageSource2);


//h1 tag is called and modified based on the difference between the randonNumber of the two images
// const playerResult = document.querySelector("h1");

// function checkWinner() {
//     if (randomNumber1 > randomNumber2) {
//         playerResult.textContent = "Player 1 wins";
//     } else if (randomNumber2 > randomNumber1) {
//         playerResult.textContent = "Player 2 wins";
//     } else {
//         playerResult.textContent = "Draw";
//     }
// }


// if (player1Clicked > player2Clicked) {
//     playerResult.textContent = "Player 1 wins";
// } else if (player1Clicked < player2Clicked) {
//     playerResult.textContent = "player 2 wins";
// } else {
//     playerResult.textContent = "Draw";
// }



