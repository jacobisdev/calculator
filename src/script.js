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
    return a / b;
}
    
const operate = (a, op, b) => {
    if (!op) op = '+';
    let result = 0;
    switch (op) {
        case '+': 
            result = add(a, b);
            break;
        case '-': 
            result = subtract(a, b);
            break;
        case '*':
        case '×':
            result = multiply(a, b);
            break;
        case '/':
        case '÷':
            if (a == 0 || b == 0) return ERROR_MSG;
            result = divide(a, b);
            break;
        default:
            return ERROR_MSG;
    }

    if (!Number.isInteger(result)) result = result.toFixed(11);
    
    return result;
}

let result = 0, total = 0, value = 0;
let operator = '';
let opWasClicked = false;

const clear = () => {
    total = 0;
    value = 0;
    operator = '';
    opWasClicked = false;
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
            const lastOp = operator;
            operator = input;
            opWasClicked = true;

            if (total !== 0 && value !== 0) {
                result = operate(total, lastOp, value);
                value = result;
                display.textContent = result;
                total = 0;
            }

            if (value !== 0) {
                total = value;
                value = 0;
            }
        }

        if (targetIsEqual) {
            result = operate(total, operator, value);
            value = result;
            display.textContent = result;
            total = 0;
        }

        if (targetIsClear) {
            display.textContent = '0';
            clear();
        }

        if (targetIsSymbol) {

        } 
    })
})