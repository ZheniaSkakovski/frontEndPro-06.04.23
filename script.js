// const math = prompt("What do you want to do (add, sub, mult, div) ")
// numberFirst = prompt("Please enter first number ");
// numberSecond = prompt("Please enter second number ")

// if (math === "add") {
//     alert(+numberFirst + +numberSecond)
// } else if (math === "sub") {
//     alert(numberFirst - numberSecond)
// } else if (math === "mult") {
//     alert(numberFirst * numberSecond)
// } else if (math === "div") {
//     alert(numberFirst / numberSecond)
// }

// alert("the end")


let numOrStr = prompt('input number or string');
console.log(numOrStr)


switch (true) {

case (numOrStr === null):
    console.log('ви скасували');
    break;

case (numOrStr.trim() === ''):
    console.log('Empty String');
    break;

case (isNaN( +numOrStr )):
    console.log('number is Ba_NaN');
    break;
default:
    console.log('OK!')
}