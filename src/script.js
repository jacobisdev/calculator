const display = document.querySelector('.display');
const btns = document.querySelectorAll('.btn');

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}
    
const operate = (a, op, b) => {
    switch (op) {
        case '+': 
            return add(a, b);
        case '-': 
            return subtract(a, b);
        case '*':
        case '×':
            return multiply(a, b);
        case '/':
        case '÷':
            return divide(a, b);
        default:
            return 'Invalid Operation'
    }
}

let result = 0, total = 0, value = 0;
let operator = '';
let opWasClicked = false;

const clear = () => {
    total = 0;
    value = 0;
}

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const target = e.target;
        const input = btn.textContent;

        const targetIsNum = target.classList.contains('num') && (+input || input === '0');
        const targetIsOp = target.classList.contains('operator');
        const targetIsEqual = target.classList.contains('equal');
        const targetIsClear = target.classList.contains('clear');
        const targetIsSymbol = target.classList.contains('symbol');

        if (targetIsNum) {
            if (
                display.textContent[0] === '0' ||
                display.textContent === 'Invalid Operation'
            ) display.textContent = '';

            if (opWasClicked) {
                display.textContent = '';
                opWasClicked = false;
            }
            display.textContent += input;
            value = +display.textContent;
        }

        if (targetIsOp) {
            operator = input;
            opWasClicked = true;
            total = value;
        }

        if (targetIsEqual) {
            result = operate(total, operator, value);
            value = result;
            display.textContent = result;
        }

        if (targetIsClear) {
            display.textContent = '0';
            clear();
        }

        if (targetIsSymbol) {

        } 
    })
})