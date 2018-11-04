// ================================
// Two Players of the Game
// ================================
let player1 = {name: "You"};   //Player1 will always be the user
let player2 = {};   //player2 will always be the friend or computer
// =================================

// ===================================
// This code will rotate the card if any of the buttons of the front card is clicked
// ===================================
const btnFriend = document.querySelector("#friend");
const btnComputer = document.querySelector("#computer");
let valueOfFrontClickedBtn = "";

// Flip Card function
function flipCard(event) {
    valueOfFrontClickedBtn = event.target.value;    //Value of front clicked Btn

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
let valueOfBackClickedBtn;
let symbol = ["O", "X"];

// Close Card Function
function closeCard(event) {
    valueOfBackClickedBtn = event.target.value;   //Value of back Clicked button
    player1.symbol = symbol[valueOfBackClickedBtn]; //Symbol of the player1

    let indexOfRestSymbol = 1 - valueOfBackClickedBtn;
    player2.symbol = symbol[indexOfRestSymbol]; //Symbol of the player2

    // This code will save the name of the second player
    if (valueOfFrontClickedBtn === "friend") {
        player2.name = "Friend";
    } else {
        player2.name = "Computer";
    }

    //This code will display the player and its respective code
    document.querySelector("#player1 p").innerHTML = `${player1.name} - ${player1.symbol}`;
    document.querySelector("#player2 p").innerHTML = `${player2.name} - ${player2.symbol}`;

    // This code will hide the starting modal and the semi transparent background
    document.querySelector(".threeDSpaceForCard").style.display = "none";
    document.querySelector(".backgroundForCards").classList.toggle("semiTransparentBg");

    // This code will add an active class to the player1
    document.querySelector("#player1").classList.toggle("active");
}

btnCross.addEventListener("click", closeCard);
btnRing.addEventListener("click", closeCard);
// ===========================================

// ============================================
// This code will change the players turn each time it run
// ============================================
function currentPlayerIndicator() {
    // This code will select the element with id Player1 and add a class "active" to it
    document.querySelector("#player1").classList.toggle("active");

    // This code will select the element with id Player2 and add a class "active" to it
    document.querySelector("#player2").classList.toggle("active");
}


// ==================================
// This code will insert the symbol in the boxes if clicked
// ==================================
// This code will select the boxContainer
const boxContainer = document.querySelector("#boxContainer");

//This code will add an event listener to the boxContainer
boxContainer.addEventListener("click", function(event) {
    if (event.target.getAttribute("class") === "box") {
        let currentElement = event.target;
        let currentSymbolToApply;

        // This code will save the correct symbol to the variable currentSymbolToApply
        if (document.querySelector("#player1").classList.contains("active")) {
            currentSymbolToApply = player1.symbol;
        } else {
            currentSymbolToApply = player2.symbol;
        }

        //Correct symbol is feed to the current clicked box
        currentElement.innerHTML = currentSymbolToApply;

        // This code will remove the click event listener from the current clicked element
        currentElement.style.pointerEvents = "none";

        console.log(currentElement);

        currentPlayerIndicator();
    }   
});
