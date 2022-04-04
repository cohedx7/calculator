let display = document.getElementById('display');
let previous = document.getElementById('previous');
let current = document.getElementById('current');
let possibleValues = Array.from(document.querySelectorAll('button'));
let firstNum;
let secondNum;
let thirdNum;
let operSign;

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
                if (previous.innerText.includes('=') || previous.innerText === '') {
                    firstNum = parseInt(current.innerText);
                    operSign = '+';
                    previous.innerText = firstNum + ' ' + operSign;
                    current.innerText = '';
                } else {
                    secondNum = parseInt(current.innerText);
                    thirdNum = operate(firstNum, secondNum, operSign);
                    previous.innerText = `${thirdNum} +`;
                    current.innerText = '';
                    firstNum = thirdNum;
                    operSign = '+';
                }
                break;
            case '-':
                if (previous.innerText.includes('=') || previous.innerText === '') {
                    firstNum = parseInt(current.innerText);
                    operSign = '-';
                    previous.innerText = firstNum + ' ' + operSign;
                    current.innerText = '';
                } else {
                    secondNum = parseInt(current.innerText);
                    thirdNum = operate(firstNum, secondNum, operSign);
                    previous.innerText = `${thirdNum} -`;
                    current.innerText = '';
                    firstNum = thirdNum;
                    operSign = '-';
                }
                break;
            case '*':
                if (previous.innerText.includes('=') || previous.innerText === '') {
                    firstNum = parseInt(current.innerText);
                    operSign = '*';
                    previous.innerText = firstNum + ' ' + operSign;
                    current.innerText = '';
                } else {
                    secondNum = parseInt(current.innerText);
                    thirdNum = operate(firstNum, secondNum, operSign);
                    previous.innerText = `${thirdNum} *`;
                    current.innerText = '';
                    firstNum = thirdNum;
                    operSign = '*';
                }
                break;
            case '/':
                if (previous.innerText.includes('=') || previous.innerText === '') {
                    firstNum = parseInt(current.innerText);
                    operSign = '/';
                    previous.innerText = firstNum + ' ' + operSign;
                    current.innerText = '';
                } else {
                    secondNum = parseInt(current.innerText);
                    thirdNum = operate(firstNum, secondNum, operSign);
                    previous.innerText = `${thirdNum} /`;
                    current.innerText = '';
                    firstNum = thirdNum;
                    operSign = '/';
                }
                break;
            case '=':
                try {
                    secondNum = parseInt(current.innerText);
                    previous.innerText = `${firstNum} ${operSign} ${secondNum} =`;
                    current.innerText = operate(firstNum, secondNum, operSign);
                    firstNum = 0;
                    operSign = '+';
                } catch {
                    current.innerText = 'Error';
                }
                break;
            default:
                current.innerText += e.target.innerText;
        }
    })
})