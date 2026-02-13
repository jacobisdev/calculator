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

        }

        if (targetIsEqual) {

        }

        if (targetIsClear) {

        }

        if (targetIsSymbol) {

        } 
    })
})