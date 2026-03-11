function Sum(a, b) {
    return a + b;
}

function Divide(a, b) {
    return a / b;
}

function callBackDemo(operation, a, b) {
    return operation(a, b);
}

let ans1 = callBackDemo(Sum, 10, 5);
let ans2 = callBackDemo(Divide, 10, 5);

console.log(ans1); 
console.log(ans2); 