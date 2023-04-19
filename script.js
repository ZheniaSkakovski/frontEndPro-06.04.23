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


// let numOrStr = prompt('input number or string');
// console.log(numOrStr)


// switch (true) {

// case (numOrStr === null):
//     console.log('ви скасували');
//     break;

// case (numOrStr.trim() === ''):
//     console.log('Empty String');
//     break;

// case (isNaN(+numOrStr)):
//     console.log('number is Ba_NaN');
//     break;
// default:
//     console.log('OK!')
// }


// Вивести на сторінку в один рядок через кому числа від 10 до 20.

// let numbers = "";
// for (let i = 10; i <= 20; i++) {
//     numbers += i + ",";
// }
//     console.log(numbers);

// // Вивести квадрати чисел від 10 до 20.

// for (let i = 10; i <= 20; i++) {
//     let square = i * i;
//     console.log(square);
// }

// // Вивести таблицю множення на 7.

// for (let i = 1; i <= 7; i++) {
//     let mult = i * 7;
//     console.log(mult);
// }

// // Знайти суму всіх цілих чисел від 1 до 15.

// let sum = 0;

// for (let i = 1; i <= 15; i++) {
//     sum += i;
// }
//     console.log(sum);


// // Знайти добуток усіх цілих чисел від 15 до 35.

// let result = 1;

// for (let i = 15; i <= 35; i++) {
//     result *= i;
// }
//     console.log(result);


// // Знайти середнє арифметичне всіх цілих чисел від 1 до 500

// let sumFirst = 0;

// for (let i = 1; i <= 500; i++) {
//     sumFirst += i;
// }
//     let average = sumFirst / 500;
//     console.log(average);

// // Вивести суму лише парних чисел в діапазоні від 30 до 80.

// let sumSecond = 0;

// for (let i = 30; i <= 80; i++) {
//     if (i % 2 === 0) {
//     sumSecond += i;
//     }
// }
//     console.log(sumSecond);

// // Вивести всі числа в діапазоні від 100 до 200 кратні 3.

// for (let i = 100; i <= 200; i++) {
//     if (i % 3 === 0) {
//       console.log(i);
//     }
// }
    
// // Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// // Визначити кількість його парних дільників.
// // Знайти суму його парних дільників.

// const num = parseInt(prompt("Введіть натуральне число:"));
// const divisors = [];
// let evenDivisorsCount = 0;
// let sumOfEvenDivisors = 0;

// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) {
//     divisors.push(i);
//     if (i % 2 === 0) {
//       evenDivisorsCount++;
//       sumOfEvenDivisors += i;
//     }
//   }
// }

// document.write(`Дільники числа ${num}: ${divisors.join(", ")}.<br>`);
// document.write(`Кількість парних дільників: ${evenDivisorsCount}.<br>`);
// document.write(`Сума всіх парних дільників: ${sumOfEvenDivisors}.`);

// // Надрукувати повну таблицю множення від 1 до 10.

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//     console.log(i + ' x ' + j + ' = ' + (i*j));
//     }
// }



// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.



let arrLenght = 0;
arrLenght = parseInt(prompt("Enter lenght"));

let arr = [];
console.log("Empty", arr)
for(let i = 0; i < arrLenght; i++) {
    let enteredValue = prompt(`Enter #${i + 1} element of array`);
    arr.push(enteredValue)
}
console.log("Filled", arr)

arr.sort((a, b) => a - b);

console.log("Sorted", arr);

arr.splice(1, 3);
console.log("Removed", arr)



