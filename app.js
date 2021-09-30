var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");

var calculateBtn = document.querySelector("#calculate-btn");
var outputDiv = document.querySelector("#output-div");



function calculateProfitOrLoss(initial, quantity, current) {
    if (initial > current) {
        //loss 
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        outputDiv.innerText = " the loss is : " + loss + " and the loss percentage is " + lossPercentage;
    } else if (current > initial) {
        //profit
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        outputDiv.innerText = " the profit is: " + profit + " and the profit percentage is " + profitPercentage;
    } else {
        outputDiv.innerText = "no loss / no profit";
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