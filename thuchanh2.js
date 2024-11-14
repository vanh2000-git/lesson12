// BAI1

function fibonacci(n) {
    let fib = [0, 1]; // 2 số đầu tiên trong dãy Fibonacci
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib.join(', ')); // In ra dãy Fibonacci
}

fibonacci(10);

// BAI2

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Giai thừa của 0 và 1 đều là 1
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}


console.log(factorial(5)); // Kết quả là 120

// BAI3

function printTriangleLeft(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

printTriangleLeft(5);

function printTriangleRight(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        // In khoảng trắng trước mỗi dấu sao
        for (let j = 1; j <= n - i; j++) {
            row += '  ';
        }
        // In dấu sao
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

printTriangleRight(5);

function printTriangleTopLeft(n) {
    for (let i = n; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

printTriangleTopLeft(5);


function printTriangleTopRight(n) {
    for (let i = n; i >= 1; i--) {
        let row = '';
        // In khoảng trắng trước dấu sao
        for (let j = 1; j <= n - i; j++) {
            row += '  ';
        }
        // In dấu sao
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

printTriangleTopRight(5);

// BAI4

function printRectangle(m, n) {
    for (let i = 1; i <= m; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

printRectangle(4, 6);

// BAI5

function calculateInterest(principal, months, monthlyRate) {
    let amount = principal;
    for (let i = 1; i <= months; i++) {
        amount += amount * (monthlyRate / 100);
    }
    return amount;
}

let principal = 1000;
let months = 12;
let monthlyRate = 1;
let result = calculateInterest(principal, months, monthlyRate);
console.log("Số tiền sau khi có lãi là:", result.toFixed(2));