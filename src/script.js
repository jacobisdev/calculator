const calcItem = document.querySelectorAll('.calc-btn');

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

const operate = (op, a, b) => {
    switch (op) {
        case '+': 
            return add(a, b);
        case '-': 
            return subtract(a, b);
        case '*': 
            return multiply(a, b);
        case '/': 
            return divide(a, b);
    }
}

calcItem.forEach((item) => {
    item.addEventListener('click', () => {
        const value = item.textContent;
        if (+value || value === '0') {
            console.log(+value)
        }
    })
})