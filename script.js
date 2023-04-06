const math = prompt("What do you want to do (add, sub, mult, div) ")
numberFirst = prompt("Please enter first number ");
numberSecond = prompt("Please enter second number ")

if (math === "add") {
    alert(+numberFirst + +numberSecond)
} else if (math === "sub") {
    alert(numberFirst - numberSecond)
} else if (math === "mult") {
    alert(numberFirst * numberSecond)
} else if (math === "div") {
    alert(numberFirst / numberSecond)
}