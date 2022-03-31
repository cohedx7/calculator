let display = document.getElementById('display');
let possibleValues = Array.from(document.querySelectorAll('button'));

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

possibleValues.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = operate(); //how to make this work??
                } catch {
                    display.innerText = 'Error';
                }
                break; 
            default:
                display.innerText += e.target.innerText;
        }
    })
})