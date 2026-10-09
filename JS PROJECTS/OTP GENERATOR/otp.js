let otpbtn = document.getElementById("otpbtn");
let otpDisplay = document.getElementById("otp");

let generateOTP = () => {
    // Generates a random 4-digit number between 1000 and 9999
    let randomNumber = Math.floor(Math.random() * 9000) + 1000;

    otpDisplay.innerText = randomNumber;
};

otpbtn.addEventListener("click", generateOTP);