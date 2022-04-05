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
                additionClick();
                break;
            case '-':
                subtractionClick();
                break;
            case '*':
                multiplicationClick();
                break;
            case '/':
                divisionClick();
                break;
            case '=':
                equalClick();
                break;
            default:
                current.innerText += e.target.innerText;
        }
    })
})

function additionClick() {
    if (previous.innerText.includes('/') && current.innerText === '0') {
        alert('You cannot divide by 0!');
    } else if (previous.innerText === '' && current.innerText === '') {
        previous.innerText = '';
        current.innerText = '';
    } else if (current.innerText === '') {
        previous.innerText = firstNum + ' ' + operSign;
        current.innerText = '';
    } else if (previous.innerText.includes('=') || previous.innerText === '') {
        firstNum = Number(current.innerText);
        operSign = '+';
        previous.innerText = firstNum + ' ' + operSign;
        current.innerText = '';
    } else {
        secondNum = parseInt(current.innerText);
        thirdNum = Math.round(100*operate(firstNum, secondNum, operSign))/100;
        previous.innerText = `${thirdNum} +`;
        current.innerText = '';
        firstNum = thirdNum;
        operSign = '+';
    }
}

function subtractionClick() {
    if (previous.innerText.includes('/') && current.innerText === '0') {
        alert('You cannot divide by 0!');
    } else if (previous.innerText === '' && current.innerText === '') {
        previous.innerText = '';
        current.innerText = '';
    } else if (current.innerText === '') {
        previous.innerText = firstNum + ' ' + operSign;
        current.innerText = '';
    } else if (previous.innerText.includes('=') || previous.innerText === '') {
        firstNum = Number(current.innerText);
        operSign = '-';
        previous.innerText = firstNum + ' ' + operSign;
        current.innerText = '';
    } else {
        secondNum = parseInt(current.innerText);
        thirdNum = Math.round(100*operate(firstNum, secondNum, operSign))/100;
        previous.innerText = `${thirdNum} -`;
        current.innerText = '';
        firstNum = thirdNum;
        operSign = '-';
    }
}

function multiplicationClick() {
    if (previous.innerText.includes('/') && current.innerText === '0') {
        alert('You cannot divide by 0!');
    } else if (previous.innerText === '' && current.innerText === '') {
        previous.innerText = '';
        current.innerText = '';
    } else if (current.innerText === '') {
        previous.innerText = firstNum + ' ' + operSign;
        current.innerText = '';
    } else if (previous.innerText.includes('=') || previous.innerText === '') {
        firstNum = Number(current.innerText);
        operSign = '*';
        previous.innerText = firstNum + ' ' + operSign;
        current.innerText = '';
    } else {
        secondNum = parseInt(current.innerText);
        thirdNum = Math.round(100*operate(firstNum, secondNum, operSign))/100;
        previous.innerText = `${thirdNum} *`;
        current.innerText = '';
        firstNum = thirdNum;
        operSign = '*';
    }
}

function divisionClick() {
    if (previous.innerText.includes('/') && current.innerText === '0') {
        alert('You cannot divide by 0!');
    } else if (previous.innerText === '' && current.innerText === '') {
        previous.innerText = '';
        current.innerText = '';
    } else if (current.innerText === '') {
        previous.innerText = firstNum + ' ' + operSign;
        current.innerText = '';
    } else if (previous.innerText.includes('=') || previous.innerText === '') {
        firstNum = Number(current.innerText);
        operSign = '/';
        previous.innerText = firstNum + ' ' + operSign;
        current.innerText = '';
    } else {
        secondNum = parseInt(current.innerText);
        thirdNum = Math.round(100*operate(firstNum, secondNum, operSign))/100;
        previous.innerText = `${thirdNum} /`;
        current.innerText = '';
        firstNum = thirdNum;
        operSign = '/';
    }
}

function equalClick() {
    try {
        if (previous.innerText.includes('/') && current.innerText === '0') {
            alert('You cannot divide by 0!');
        } else if (current.innerText === '') {
            previous.innerText = firstNum + ' ' + operSign;
            current.innerText = '';
        } else {
        secondNum = parseInt(current.innerText);
        previous.innerText = `${firstNum} ${operSign} ${secondNum} =`;
        current.innerText = Math.round(100*operate(firstNum, secondNum, operSign))/100;
        firstNum = 0;
        operSign = '+';
        }
    } catch {
        current.innerText = 'Error';
    }
}