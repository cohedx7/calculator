const addition = document.getElementById();
const subtraction = document.getElementById();
const multiplication = document.getElementById();
const division = document.getElementById();
// addEventListener ('click')..??

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;    
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate (n1, n2, operator) {
    switch (operator) {
        case addition:
            add(n1, n2);
            break;
        case subtraction:
            subtract(n1, n2);
            break;
        case multiplication:
            multiply(n1, n2);
            break;
        case division:
            divide(n1, n2);
            break;
    }
}