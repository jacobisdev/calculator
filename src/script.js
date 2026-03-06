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
        case '×':
            result = multiply(a, b);
            break;
        case '÷':
            // biome-ignore lint/suspicious/noDoubleEquals: cause it could be a str or an int
            if (a == 0 || b == 0) return ERROR_MSG;
            result = divide(a, b);
            break;
        default:
            return ERROR_MSG;
    }

    return +result.toPrecision(11);
}

let total = 0, value = 0;
let op = '';
let opIsActive = false;
let secondValueEntered = false;

const calculate = (a, op, b) => {
    if (secondValueEntered) {
        value = operate(a, op, b);
        display.textContent = value;
        total = 0;
    }
}

const clear = () => {
    total = 0;
    value = 0;
    op = '';
    opIsActive = false;
    secondValueEntered = false;
}

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const input = btn.textContent;

        const isNum = btn.classList.contains('num') && (+input || input === '0');
        const isOp = btn.classList.contains('operator');
        const isEqual = btn.classList.contains('equal');
        const isClear = btn.classList.contains('clear');
        const isDel = btn.classList.contains('delete');
        const isPercentage = btn.classList.contains('percentage');
        const isDot = btn.classList.contains('dot');

        const lastOp = op;

        if (isNum) {
            if (
                display.textContent === '0' ||
                display.textContent === ERROR_MSG
            ) display.textContent = '';

            if (opIsActive) {
                value = 0;
                display.textContent = '';
                opIsActive = false;
                secondValueEntered = true;
            }
            display.textContent += input;
            value = +display.textContent;
        }

        if (lastOp.classList?.contains('active')) lastOp.classList.remove('active');

        if (isOp) {
            op = btn;
            op.classList.add('active');

            opIsActive = true;
            secondValueEntered = false;

            if (total !== 0 && value !== 0) {
                calculate(total, lastOp.textContent, value);
            }

            if (value !== 0) {
                total = value;
                value = 0;
            }
        }

        if (isEqual) {
            calculate(total, op.textContent, value);
            opIsActive = true;
        }

        if (isClear) {
            display.textContent = '0';
            clear();
        }

        if (isDel) {
            if (!opIsActive) {
                display.textContent = display.textContent.slice(0, -1);
                value = +display.textContent;
            }
        }

        if (isPercentage) {
            switch (op.textContent) {
                case '+':
                case '-':
                    value = total * (value / 100)
                    display.textContent = value;
                    break;
                default:
                    value /= 100;
                    display.textContent = value;
                    break;
            }
        }

        if (isDot) {
            if (!display.textContent.includes(input)) {
                display.textContent += input;
            }
        }
    })
})