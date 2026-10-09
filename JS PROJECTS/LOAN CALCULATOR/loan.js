let loan = document.getElementById("loan");
let interest = document.getElementById("interest");
let month = document.getElementById("month");
let btn = document.getElementById("btn");
let result = document.querySelector(".finalres");

btn.addEventListener("click", function () {

    let P = Number(loan.value);
    let R = Number(interest.value) / 100 / 12;
    let N = Number(month.value);

    if (P <= 0 || R <= 0 || N <= 0) {
        result.innerHTML = "Please enter valid values";
        return;
    }

    // EMI Formula
    let EMI = (P * R * Math.pow(1 + R, N)) /
              (Math.pow(1 + R, N) - 1);

    let totalAmount = EMI * N;
    let totalInterest = totalAmount - P;

    result.innerHTML = `
        Monthly EMI: ₹${EMI.toFixed(2)} <br><br>
        Total Interest: ₹${totalInterest.toFixed(2)} <br>
        Total Amount: ₹${totalAmount.toFixed(2)}
    `;
});