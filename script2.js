arrLength = parseInt(prompt("Enter length"));
console.log("Length", arrLength);

let arr = [];
for(let i = 0; i < arrLength; i++) {
    let enteredValue = prompt(`Enter #${i + 1} element of array`);
    arr.push(enteredValue)
}
console.log("Filled", arr);

arr.sort((a, b) => a - b);
console.log("Sorted", arr);

let del = arr.splice(1, 3);
console.log("Deleted", del);

console.log("Removed", arr);