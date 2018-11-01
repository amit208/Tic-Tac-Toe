// ===================================
// This code will rotate the card if any of the buttons of the front card is clicked
// ===================================
const btnFriend = document.querySelector("#friend");
const btnComputer = document.querySelector("#computer");
let valueOfFrontCard = "";

// Flip Card function
function flipCard(event) {
    valueOfFrontCard = event.target.value;

    document.querySelector(".cards").classList.toggle("is-flipped");
}

btnFriend.addEventListener("click", flipCard);
btnComputer.addEventListener("click", flipCard);
// =========================================


// ===========================================
// This code will close the card if any of the button of the back of the card is clicked
// and will also remove the semiTransparent black background
// ===========================================
const btnCross = document.querySelector("#cross");
const btnRing = document.querySelector("#ring");
let valueOfBackCard;
let symbol = ["O", "X"];
let symbolOfPlayer1;    //Player1 will always be the user
let symbolOfPlayer2;    //player2 will always be the second player or computer

// Close Card Function
function closeCard(event) {
    valueOfBackCard = event.target.value;
    symbolOfPlayer1 = symbol[valueOfBackCard];

    let indexOfRestSymbol = 1 - valueOfBackCard;
    symbolOfPlayer2 = symbol[indexOfRestSymbol];
    
    //This code will change the player name according to the buttons clicked on the first card
    if (valueOfFrontCard === "friend") {
        document.querySelector("#player1 p").innerHTML = `Player - ${symbolOfPlayer1}`;
        document.querySelector("#player2 p").innerHTML = `Player - ${symbolOfPlayer2}`;
    } else {
        document.querySelector("#player1 p").innerHTML = `Player - ${symbolOfPlayer1}`;
        document.querySelector("#player2 p").innerHTML = `Computer - ${symbolOfPlayer2}`;
    }

    document.querySelector(".cards").style.display = "none";
    document.querySelector(".backgroundForCards").classList.toggle("semiTransparentBg");
}

btnCross.addEventListener("click", closeCard);
btnRing.addEventListener("click", closeCard);
// ===========================================