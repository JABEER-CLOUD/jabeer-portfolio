let dob = document.getElementById("dob");

let calculateBtn = document.getElementById("calculateBtn");

let ageOutput = document.getElementById("ageOutput");

let exactAge = document.getElementById("exactAge");


calculateBtn.addEventListener("click", calculateAge);


function calculateAge() {

    if (dob.value === "") {

        ageOutput.textContent = "--";

        exactAge.textContent = "";

        return;
    }


    let birthDate = new Date(dob.value);

    let today = new Date();


    if (birthDate > today) {

        ageOutput.textContent = "--";

        exactAge.textContent = "Invalid date of birth";

        return;
    }


    let years =
        today.getFullYear() -
        birthDate.getFullYear();


    let months =
        today.getMonth() -
        birthDate.getMonth();


    let days =
        today.getDate() -
        birthDate.getDate();


    // Adjust days

    if (days < 0) {

        months--;

        let previousMonth =
            new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            );

        days += previousMonth.getDate();
    }


    // Adjust months

    if (months < 0) {

        years--;

        months += 12;
    }


    // Main result

    ageOutput.textContent =
        years + " Years, " +
        months + " Months, " +
        days + " Days";


    // Exact age

    exactAge.textContent =
        "Exact Age: " + years + " years old";
}
