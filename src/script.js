const display = document.querySelector('.display');
const btns = document.querySelectorAll('.btn');

const ERROR_MSG = 'Math Error';

const add = (a = 0, b = 0) => {
    return a + b;
}

const subtract = (a = 0, b = 0) => {
    return a - b;
}

const multiply = (a = 1, b = 1) => {
    return a * b;
}

const divide = (a = 1, b = 1) => {
    if (a == 0 || b == 0) return ERROR_MSG;
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
            return ERROR_MSG;
    }
}

let result = 0, total = 0, value = 0;
let operator = '';
let opWasClicked = false;

const clear = () => {
    total = 0;
    value = 0;
    operator = '';
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
                display.textContent === ERROR_MSG
            ) display.textContent = '';

            if (opWasClicked) {
                value = 0;
                display.textContent = '';
                opWasClicked = false;
            }
            display.textContent += input;
            value = +display.textContent;
        }

        if (targetIsOp) {
            operator = input;
            opWasClicked = true;
            if (value !== 0) {
                total = value;
            }
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