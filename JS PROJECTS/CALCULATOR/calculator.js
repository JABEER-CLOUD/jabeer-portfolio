let display = document.getElementById("display")
let num1 = ""
let num2 = ""
let operator = ""

function displayValue(value) {
    display.value += value
}

function clearDisplay() {
    display.value = ""
    num1 = ""
    num2 = ""
    operator = ""
}

function deleteValue() {
    display.value = display.value.slice(0, -1)
}

function calculate() {
    let exp = display.value

    let result = eval(exp)

    display.value = result
}