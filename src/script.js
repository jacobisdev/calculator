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

    return +result.toPrecision(11);
}

let total = 0, value = 0;
let operator = '';
let opIsActive = false;

const calculate = (a, op, b) => {
    value = operate(a, op, b);
    display.textContent = value;
    total = 0;
}

const clear = () => {
    total = 0;
    value = 0;
    operator = '';
    opIsActive = false;
}

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const target = e.target;
        const input = btn.textContent;
        
        const isNum = target.classList.contains('num') && (+input || input === '0');
        const isOp = target.classList.contains('operator');
        const isEqual = target.classList.contains('equal');
        const isClear = target.classList.contains('clear');
        const isPercentage = target.classList.contains('percentage');
        const isDot = target.classList.contains('dot');

        if (isNum) {
            if (
                display.textContent[0] === '0' ||
                display.textContent === ERROR_MSG
            ) display.textContent = '';

            if (opIsActive) {
                value = 0;
                display.textContent = '';
                opIsActive = false;
            }
            display.textContent += input;
            value = +display.textContent;
        }

        if (isOp) {
            const lastOp = operator;
            operator = input;
            opIsActive = true;

            if (total !== 0 && value !== 0) {
                calculate(total, lastOp, value);
            }

            if (value !== 0) {
                total = value;
                value = 0;
            }
        }

        if (isEqual) {
            calculate(total, operator, value);
            opIsActive = true;
        }

        if (isClear) {
            display.textContent = '0';
            clear();
        }

        if (isPercentage) {
            
        }

        if (isDot) {

        } 
    })
})