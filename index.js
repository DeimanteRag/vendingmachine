var change = 0;
var moneyInserted = 0;
var msg = "";
var msgEl = document.getElementById("message");
var products = ["Twix", "Chocolate", "Cookie"];
const price = 2;
var totalPaid = 0;

const money_5 = 5;
const money_2 = 2;
const money_1 = 1;
const money_01 = 0.1;

function getTotal() {
  var moneys_5 = Number(document.getElementById("5").value);
  var moneys_2 = Number(document.getElementById("2").value);
  var moneys_1 = Number(document.getElementById("1").value);
  var moneys_01 = Number(document.getElementById("0.1").value);

  if (moneys_5 > 0) {
    moneys_5 = moneys_5 * money_5;
  }

  if (moneys_2 > 0) {
    moneys_2 = moneys_2 * money_2;
  }

  if (moneys_1 > 0) {
    moneys_1 = moneys_1 * money_1;
  }

  if (moneys_01 > 0) {
    moneys_01 = moneys_01 * money_01;
  }

  totalPaid = moneys_5 + moneys_2 + moneys_1 + moneys_01;

  return totalPaid.toFixed(2);
}

function tally() {
  moneyInserted = getTotal();
  document.getElementById("Total").innerHTML = moneyInserted;
}

function cleartally() {
  moneyInserted = 0;
  document.getElementById("Total").innerHTML = moneyInserted;
}

function clearForm() {
  document.getElementById("5").value = "";
  document.getElementById("2").value = "";
  document.getElementById("1").value = "";
  document.getElementById("0.1").value = "";
}

function cancel() {
  getTotal();

  if (totalPaid > 0) {
    msg =
      "Transaction cancelled. €" + totalPaid.toFixed(2) + " has been returned";
    clearForm();
    cleartally();

    msgEl.innerHTML = msg;
  } else if (totalPaid == 0) {
    msg = "First of all, you need to insert your money";

    msgEl.innerHTML = msg;
  }
}

function calculateChange() {
  var tempChange = 0;
  if (getTotal() != 0) {
    return (tempChange = (getTotal() - price).toFixed(2));
  }

  return tempChange.toFixed(2);
}

function dispenceproduct(product) {
  msgEl.innerHTML = "";
  change = 0;

  var selectedproduct = products[product];

  change = calculateChange();

  if (change < 0) {
    msg =
      "You have not paid enough. €" +
      totalPaid.toFixed(2) +
      " has been returned.";

    totalPaid = 0;
    change = 0;
    clearForm();
    cleartally();

    msgEl.innerHTML = msg;
  } else if (change > 0) {
    msg = selectedproduct + " has been bought. €" + change + "  returned.";

    totalPaid = 0;
    change = 0;
    clearForm();
    cleartally();

    msgEl.innerHTML = msg;
  } else if (totalPaid == 0) {
    msg = "Please insert the right amount of money";

    msgEl.innerHTML = msg;
  } else if (change == 0) {
    msg = selectedproduct + " has beeen bought";

    totalPaid = 0;
    change = 0;
    clearForm();
    cleartally();

    msgEl.innerHTML = msg;
  }
}


function description() {

  if (document.getElementById('description').click)
    document.getElementById('description').innerHTML ="A vending machine sells candies for €2 each.You can insert money in coins in various denominations (for example 2 x 3 + 1 x 5 + 0.10 x2 = 11.20). When a candy is requested and the machine aquired the required amount of money you can purchase it. When the required amount is too much - it gives change. If it is too little - you can not buy your selected candy. Also, if you cancel your order it gives all the money inserted back."; }