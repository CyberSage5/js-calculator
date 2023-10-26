document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    let input = "";
    let result = "";
    let operators = ["+", "-", "*", "/"];
    let isOperatorLast = false;

    function updateDisplay() {
        display.innerText = input;
    }

    function clear() {
        input = "";
        result = "";
        updateDisplay();
    }

    function handleButtonClick(e) {
        const button = e.target;
        const value = button.innerText;

        if (value === "AC") {
            clear();
        } else if (value === "=") {
            try {
                result = String(eval(input));
                input = result;
                updateDisplay();
            } catch (error) {
                input = "Error";
                result = "";
                updateDisplay();
            }
        } else if (value === "." && input.includes(".")) {
            // Ignore multiple decimal points in one number
        } else if (value === "0" && input === "0") {
            // Ignore multiple leading zeros
        } else if (isOperatorLast && operators.includes(value)) {
            // Allow negative numbers
            if (value === "-" && !operators.includes(input.slice(-1))) {
                input += value;
                updateDisplay();
            }
        } else {
            input += value;
            updateDisplay();
        }

        isOperatorLast = operators.includes(value);
    }

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.addEventListener("click", handleButtonClick));
});