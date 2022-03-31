let display = document.getElementById('display');
let possibleValues = Array.from(document.querySelectorAll('button'));
let firstNum;
let secondNum;
let operSign;

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
        case '+':
            add(n1, n2);
            break;
        case '-':
            subtract(n1, n2);
            break;
        case '*':
            multiply(n1, n2);
            break;
        case '/':
            divide(n1, n2);
            break;
    }
}

possibleValues.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '+':
                firstNum = display.innerText;
                operSign = '+';
                display.innerText = '+';
                break;
            case '-':
                firstNum = display.innerText;
                operSign = '-';
                display.innerText = '-';
                break;
            case '*':
                firstNum = display.innerText;
                operSign = '*';
                display.innerText = '*';
                break;
            case '/':
                firstNum = display.innerText;
                operSign = '/';
                display.innerText = '/';
                break;
            case '=':
                try {
                    secondNum = display.innerText;
                    display.innerText = operate(firstNum, secondNum, operSign);
                } catch {
                    display.innerText = 'Error';
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})
