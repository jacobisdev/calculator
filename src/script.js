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

let total = 0, value = 0;
let operator = '';

const clear = () => {
    total = 0;
    operator = '';
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

            display.textContent += input;
        }

        if (targetIsOp) {
            operator = input;
            if (total === 0) {
                console.log('case 1')
                total = +display.textContent;
            } else if (total !== 0) {
                value = +display.textContent;
                total = operate(total, operator, value);
                display.textContent = total;
            }
            console.log(total, operator, value);
        }

        if (targetIsEqual) {
            total = value;
            value = +display.textContent;
            display.textContent = operate(total, operator, value);
            console.log(value, operator, total);
            console.log(operate(total, operator, value));
            clear();
        }

        if (targetIsClear) {
            display.textContent = '0';
            clear();
        }

        if (targetIsSymbol) {

        }
        
    })
})