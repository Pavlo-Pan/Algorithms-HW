function fibonacciRecursive(n) {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log("Результат рекурсивного вычисления 10-го числа Фибоначчи:");
console.log(fibonacciRecursive(10));

function fibonacciIterative(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
console.log("\nРезультат итеративного вычисления 10-го числа Фибоначчи:");
console.log(fibonacciIterative(10)); 
