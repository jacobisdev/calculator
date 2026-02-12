const display = document.querySelector('.calc-display')

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
        case 'x':
            return multiply(a, b);
        case '/': 
            return divide(a, b);
        default:
            return 'Invalid Operation'
    }
}

let operation = {
    a: 0,
    op: '',
    b: 0,
}

const clear = () => {
    operation.a = 0;
    operation.op = '';
    operation.b = 0;
}