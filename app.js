let display = document.getElementById('display');
let previous = document.getElementById('previous');
let current = document.getElementById('current');
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
                previous.innerText = '';
                current.innerText = '';
                break;
            case '+':
                firstNum = parseInt(current.innerText);
                operSign = '+';
                previous.innerText = firstNum + ' ' + operSign;
                current.innerText = '';
                break;
            case '-':
                firstNum = parseInt(current.innerText);
                operSign = '-';
                previous.innerText = firstNum + ' ' + operSign;
                current.innerText = '';
                break;
            case '*':
                firstNum = parseInt(current.innerText);
                operSign = '*';
                previous.innerText = firstNum + ' ' + operSign;
                current.innerText = '';
                break;
            case '/':
                firstNum = parseInt(current.innerText);
                operSign = '/';
                previous.innerText = firstNum + ' ' + operSign;
                current.innerText = '';
                break;
            case '=':
                try {
                    secondNum = parseInt(current.innerText);
                    previous.innerText = `${firstNum} ${operSign} ${secondNum} =`;
                    current.innerText = operate(firstNum, secondNum, operSign);
                } catch {
                    current.innerText = 'Error';
                }
                break;
            default:
                current.innerText += e.target.innerText;
        }
    })
})