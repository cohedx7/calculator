let display = document.getElementById('display');
let possibleValues = Array.from(document.querySelectorAll('button'));
let firstNum;
let secondNum;
let operSign;
/*
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
*/
function operate(n1, n2, operator) {
    if (operator === '+') {
        return n1 + n2;
    } else if (operator === '-') {
        return n1 - n2;
    } else if (operator === '*') {
        return n1 * n2;
    } else if (operator === '/') {
        return n1 / n2;
    }
}

possibleValues.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '+':
                firstNum = parseInt(display.innerText);
                operSign = '+';
                display.innerText = '';
                break;
            case '-':
                firstNum = parseInt(display.innerText);
                operSign = '-';
                display.innerText = '';
                break;
            case '*':
                firstNum = parseInt(display.innerText);
                operSign = '*';
                display.innerText = '';
                break;
            case '/':
                firstNum = parseInt(display.innerText);
                operSign = '/';
                display.innerText = '';
                break;
            case '=':
                try {
                    secondNum = parseInt(display.innerText);
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
