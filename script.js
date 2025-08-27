const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (button.classList.contains("clear")) {
            currentInput = "";
            display.value = "";
        } 
        else if (button.classList.contains("percent")) {
            try {
                currentInput = (eval(currentInput) / 100).toString();
                display.value = currentInput;
            } catch {
                display.value = "Error";
                currentInput = "";
            }
        }
        else if (button.classList.contains("backspace")) {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        }
        else if (button.classList.contains("equal")) {
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch {
                display.value = "Error";
                currentInput = "";
            }
        } 
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});


// Optional: Keyboard Support
document.addEventListener("keydown", (event) => {
    const validKeys = "0123456789+-*/.";
    if (validKeys.includes(event.key)) {
        currentInput += event.key;
        display.value = currentInput;
    } else if (event.key === "Enter") {
        try {
            let result = eval(currentInput);
            if (!isFinite(result)) throw new Error("Math Error");
            display.value = result;
            currentInput = result.toString();
        } catch {
            display.value = "Error";
            currentInput = "";
        }
    } else if (event.key === "Backspace") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    } else if (event.key === "Escape") {
        currentInput = "";
        display.value = "";
    }
});