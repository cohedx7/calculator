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
                if (previous.innerText !== '') {
                    secondNum = parseInt(current.innerText);
                    thirdNum = parseInt(operate(firstNum, secondNum, operSign))
                    previous.innerText = `${thirdNum} +`;
                    current.innerText = '';
                    firstNum = thirdNum;
                    operSign = '+';
                } else {
                firstNum = parseInt(current.innerText);
                operSign = '+';
                previous.innerText = firstNum + ' ' + operSign;
                current.innerText = '';
                }
                break;
            case '-':
                if (previous.innerText !== '') {
                    secondNum = parseInt(current.innerText);
                    thirdNum = parseInt(operate(firstNum, secondNum, operSign))
                    previous.innerText = `${thirdNum} -`;
                    current.innerText = '';
                    firstNum = thirdNum;
                    operSign = '-';
                } else {
                firstNum = parseInt(current.innerText);
                operSign = '-';
                previous.innerText = firstNum + ' ' + operSign;
                current.innerText = '';
                }
                break;
            case '*':
                if (previous.innerText !== '' && !previous.innerText.includes('=')) {
                    secondNum = parseInt(current.innerText);
                    thirdNum = parseInt(operate(firstNum, secondNum, operSign))
                    previous.innerText = `${thirdNum} *`;
                    current.innerText = '';
                    firstNum = thirdNum;
                    operSign = '*';
                } else {
                firstNum = parseInt(current.innerText);
                operSign = '*';
                previous.innerText = firstNum + ' ' + operSign;
                current.innerText = '';
                }
                break;
            case '/':
                if (previous.innerText !== '') {
                    secondNum = parseInt(current.innerText);
                    thirdNum = parseInt(operate(firstNum, secondNum, operSign))
                    previous.innerText = `${thirdNum} /`;
                    current.innerText = '';
                    firstNum = thirdNum;
                    operSign = '/';
                } else {
                firstNum = parseInt(current.innerText);
                operSign = '/';
                previous.innerText = firstNum + ' ' + operSign;
                current.innerText = '';
                }
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