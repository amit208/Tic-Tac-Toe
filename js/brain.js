// ===================================
// This code will rotate the card if any of the buttons of the front card is clicked
// ===================================
const btnFriend = document.querySelector("#friend");
const btnComputer = document.querySelector("#computer");
let valueOfFrontCard;

btnFriend.addEventListener("click", flipCard);
btnComputer.addEventListener("click", flipCard);

function flipCard(event) {
    valueOfFrontCard = event.target;
    document.querySelector(".cards").classList.toggle("is-flipped");
}
// =========================================


// ===========================================
// This code will close the card if any of the button of the back of the card is clicked
// and will also remove the semiTransparent black background
// ===========================================
const btnCross = document.querySelector("#cross");
const btnRing = document.querySelector("#ring");
let valueOfBackCard;

btnCross.addEventListener("click", closeCard);
btnRing.addEventListener("click", closeCard);

function closeCard(event) {
    valueOfBackCard = event.target;
    document.querySelector(".cards").style.display = "none";
    document.querySelector(".backgroundForCards").classList.toggle("semiTransparentBg");
}
// ===========================================