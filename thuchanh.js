// BAI1
for (let i = 1; i <= 100; i++) {
    if (i === 99) {
        alert("Đã hoàn thành!");
    }
}

// BAI2
let temperature = parseInt(prompt("Nhập nhiệt độ hiện tại:"));

if (temperature > 100) {
    alert("Nhiệt độ quá cao, yêu cầu giảm nhiệt độ.");
} else if (temperature < 20) {
    alert("Nhiệt độ quá thấp, yêu cầu tăng nhiệt độ.");
} else {
    alert("Nhiệt độ bình thường.");
}

// BAI3
let fib = [0, 1]; // Khởi tạo 2 số đầu tiên
for (let i = 2; i < 20; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib.join(', ')); // In ra 20 số đầu tiên của dãy Fibonacci

// BAI4
let a = 0, b = 1;
let fibNumber = a;
while (fibNumber % 5 !== 0) {
    fibNumber = a + b;
    a = b;
    b = fibNumber;
}
console.log(fibNumber); // In số đầu tiên chia hết cho 5 trong dãy Fibonacci

// BAI5
let fibSum = 0;
a = 0;
b = 1;
for (let i = 0; i < 20; i++) {
    fibSum += a;
    let next = a + b;
    a = b;
    b = next;
}
console.log("Tổng của 20 số đầu tiên trong dãy Fibonacci:", fibSum);

// BAI6
let sum = 0;
let count = 0;
let number = 1;

while (count < 30) {
    if (number % 7 === 0) {
        sum += number;
        count++;
    }
    number++;
}

console.log("Tổng của 30 số chia hết cho 7:", sum);

// BAI7
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
