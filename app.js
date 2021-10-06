var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");

var calculateBtn = document.querySelector("#calculate-btn");
var outputDiv = document.querySelector("#output-div");
var cautionDiv = document.querySelector("#caution-msg");



function calculateProfitOrLoss(initial, quantity, current) {
    if (initial > current) {
        //loss 
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        outputDiv.innerText = " the loss is : " + loss.toFixed(2) + " and the loss percentage is " + lossPercentage.toFixed(2);
        cautionDiv.style.color = "red";
        cautionDiv.innerText = "Dont think, as you are big bull , invest cautiously ";
    } else if (current > initial) {
        //profit
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        outputDiv.innerText = " the profit is: " + profit.toFixed(2) + " and the profit percentage is " + profitPercentage.toFixed(2);
        cautionDiv.style.color = "green";
        cautionDiv.innerText = " Congrats, but stock market is fluid dont go with the flow";
    } else {
        outputDiv.innerText = "no loss / no profit";
        cautionDiv.style.color = "blue";
        cautionDiv.innerText = "Sorry, you have no luck better go with FD";
    }
}

function clickEventHandler() {
    // console.log("inside click handler");
    var ip = Number(initialPrice.value);
    // console.log(ip);
    var qty = Number(stocksQuantity.value);
    // console.log(qty);
    var cp = Number(currentPrice.value);
    // console.log(cp);

    //Number() => values of other types converts into number type.
    //while at <input type="number" we get number, if input entered is a number or else empty string for all other types of input.
    // so Number('') => 0, if it is an empty string


    if (ip <= 0 || qty <= 0 || cp <= 0) { // if inputs are negative or equal to zero(character / symbol inputs or anything other than number)
        outputDiv.innerText = "Not valid entries. ";
        cautionDiv.style.color = "#FBBF24";
        cautionDiv.innerText = "Please don't leave fields empty and enter positive numbers not characters or symbols ";
    } else
        calculateProfitOrLoss(ip, qty, cp);
}


calculateBtn.addEventListener("click", clickEventHandler);