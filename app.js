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
        outputDiv.innerText = " the loss is : " + loss + " and the loss percentage is " + lossPercentage;
        cautionDiv.innerText = "Dont think, as you are big bull , invest cautiously ";
    } else if (current > initial) {
        //profit
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        outputDiv.innerText = " the profit is: " + profit + " and the profit percentage is " + profitPercentage;
        cautionDiv.innerText =" Congrats, but stock market is fluid dont go with the flow";
    } else {
        outputDiv.innerText = "no loss / no profit";
        cautionDiv.innerText ="Sorry, you have no luck better go with FD";
    }
}

function clickEventHandler() {
    console.log("inside click handler");
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var cp = Number(currentPrice.value);

    calculateProfitOrLoss(ip, qty, cp);
}


calculateBtn.addEventListener("click", clickEventHandler);