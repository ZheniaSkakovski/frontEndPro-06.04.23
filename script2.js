
// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
// Знайти суму та кількість позитивних елементів.

let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let result = 0;
let positiveCount = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
        result += arr[i];
    }
    if (arr[i] > 0) {
        positiveCount++;
      }
}
console.log(result, positiveCount);

let positiveNumbers = arr.filter(num => num > 0);
const count = positiveNumbers.length;
console.log(count);


// Знайти мінімальний елемент масиву та його порядковий номер.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let min = arr[0];
let minIndex = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
        min = arr[i];
        minIndex = i;
    }
}

console.log(min, minIndex);

// Знайти максимальний елемент масиву та його порядковий номер.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let max = arr[0];
let maxIndex = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i];
        maxIndex = i;
    }
}

console.log(max, maxIndex);

// Визначити кількість негативних елементів.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let negativeNumbers = arr.filter(num => num < 0);
const count = negativeNumbers.length;
console.log(count);

// Знайти кількість непарних позитивних елементів.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let unpairPositiveCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 === 1) {
    unpairPositiveCount++;
  }
}
console.log(unpairPositiveCount);

// Знайти кількість парних позитивних елементів.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let pairPositiveCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 === 0) {
    pairPositiveCount++;
  }
}
console.log(pairPositiveCount)

// Знайти суму парних позитивних елементів.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let result = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) {
        result += arr[i];
        }
    }
console.log(result);

// Знайти суму непарних позитивних елементів.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let result = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 1) {
        result += arr[i];
        }
    }
console.log(result);

// Знайти добуток позитивних елементів.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sum = 1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum *= arr[i];
    }
}
console.log(sum)

// Знайти найбільше число серед елементів масиву, остальні обнулити.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    i = 0;
    }
  if (arr[i] !== max) {
    arr[i] = 0;
    }
}

console.log(arr, max);