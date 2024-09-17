
// Functions for operations
function addition(num1, num2) {
    return num1 + num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function division(num1, num2) {
    if (num2 === 0) {
        return "Error"; // Avoid division by zero
    }
    return num1 / num2;
}

function pi() {
    return 3.14;
}

// Initialize variables
let firstnum = '';
let secondnum = '';
let operator = '';
let result = '';
let isSecondNumber = false;

// Function to perform the calculation
function operate(operator, number1, number2) {
    let num1 = parseFloat(number1);
    let num2 = parseFloat(number2);

    switch (operator) {
        case "+":
            return addition(num1, num2);
        case "-":
            return subtraction(num1, num2);
        case "*":
            return multiplication(num1, num2);
        case "/":
            return division(num1, num2);
        case "π":
            return pi();
        default:
            return "Invalid operation";
    }
}

// Select display and buttons
let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".calculator-button,.calculator-button-operator-divide,.calculator-button-operator-multiplay,.calculator-button-operator-subtract,.calculator-button-operator-addition,.calculator-button-zero,.calculator-button-pi");

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener("click", function () {
        let value = button.textContent;

        // Handle operator
        if (["+", "-", "*", "/", "π"].includes(value)) {
            if (firstnum && !isSecondNumber) {
                operator = value;
                isSecondNumber = true;
                display.textContent += " " + value + " "; // Add operator to display
            }
        } else {
            // Handle number input
            if (isSecondNumber) {
                secondnum += value;
                display.textContent += value;
            } else {
                firstnum += value;
                display.textContent += value;
            }
        }
    });
});

// Clear button logic
let clear = document.querySelector(".calculator-button-clear");
clear.addEventListener("click", function () {
    firstnum = '';
    secondnum = '';
    operator = '';
    display.textContent = '';
    isSecondNumber = false;
});

// Delete button logic (removes last character)
let deletenumber = document.getElementById("delete");
deletenumber.addEventListener("click", function () {
    display.textContent = display.textContent.slice(0, -1);

    if (isSecondNumber) {
        secondnum = secondnum.slice(0, -1);
    } else {
        firstnum = firstnum.slice(0, -1);
    }
});

// Equal button logic (perform the calculation)
let equals = document.querySelector(".calculator-button-equal");
equals.addEventListener("click", function () {
    if (firstnum && operator && secondnum) {
        result = operate(operator, firstnum, secondnum);
        display.textContent = result;

        // Reset for new calculation
        firstnum = result.toString();
        secondnum = '';
        operator = '';
        isSecondNumber = false;
    }
});
