let billAmount = document.getElementById("billAmount");
let service = document.getElementById("service");
let people = document.getElementById("people");
let mealType = document.getElementById("mealType");

let calculateBtn = document.getElementById("calculateBtn");

let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let amountPerPerson = document.getElementById("amountPerPerson");


calculateBtn.addEventListener("click", function () {

    let bill = Number(billAmount.value);
    let person = Number(people.value);

    // Validation
    if (bill <= 0 || person <= 0) {
        alert("Please enter a valid bill amount and number of people.");
        return;
    }

    let rating = Number(service.value);
    let meal = mealType.value;

    let tipPercentage;


    // Service rating
    if (rating == 1) {
        tipPercentage = 5;
    }
    else if (rating == 2) {
        tipPercentage = 10;
    }
    else if (rating == 3) {
        tipPercentage = 15;
    }
    else {
        tipPercentage = 20;
    }


    // Meal type adjustment
    if (meal == "lunch") {
        tipPercentage += 2;
    }
    else if (meal == "dinner") {
        tipPercentage += 3;
    }


    // Calculate tip
    let tip = bill * tipPercentage / 100;

    // Calculate total
    let total = bill + tip;

    // Calculate per person
    let perPerson = total / person;


    // Display result
    tipAmount.textContent = "₹" + tip.toFixed(2);

    totalAmount.textContent = "₹" + total.toFixed(2);

    amountPerPerson.textContent = "₹" + perPerson.toFixed(2);
});

