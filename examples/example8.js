function exampleFunction() {
    console.log("This is example 8");
}
exampleFunction();
function addNumbers(a = 0, b = 0) {
    return a + b;
}

let a = 10;
let result = addNumbers(null, a);
