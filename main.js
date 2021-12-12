'use strict'
// ? Створи функцію, яка буде виводити кількість переданих їй аргументів.
function allArguments() {
  console.log(arguments.length);
}

allArguments('dfsf', 12, 'sdfsd');
console.log('=======================================================');

// ? Напиши функцію, яка приймає 2 числа і повертає :
// ? -1, якщо перше число менше, ніж друге; 
// ? 1 - якщо перше число більше, ніж друге; 
// ? 0 - якщо числа рівні.

function numSort(a, b) {
  return a - b === 0 ? 0 : a - b > 0 ? 1 : a - b < 0 ? -1 : false;
}

console.log('[numSort(4, 4)]',numSort(4, 4));
console.log('[numSort(5, 4)]',numSort(5, 4));
console.log('[numSort(3, 4)]',numSort(3, 4));
console.log('=======================================================');

// ? Напиши функцію, яка обчислює факторіал переданого їй числа.

function calculationFactorial(num) {
  let factorialNum = num;
  for (let i = num - 1; i > 0; i--) {
    factorialNum = factorialNum * i;
  }
  return factorialNum;
}

console.log('[calculationFactorial(5)]', calculationFactorial(5));
console.log('=======================================================');

// ? Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function combineIntoANumber(a, b, c) {
  let num = '';
  return num = num + a + b + c;
}

console.log('[combineIntoANumber(3, 5, 7)]', combineIntoANumber(3, 5, 7));
console.log('=======================================================');

// ? Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function calculateTheArea(a, b) {
  b = typeof b != 'undefined' ? b : a;

  return a * b;
}

console.log('[calculateTheArea(5, 10)]', calculateTheArea(5, 10));
console.log('[calculateTheArea(5)]', calculateTheArea(5));
console.log('=======================================================');


// ? Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function perfectNumber(num) {
  let divisorOfANumber = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      divisorOfANumber += i;
    }
  }

  return num === divisorOfANumber;
}

console.log('[perfectNumber(6)]', perfectNumber(6));
console.log('[perfectNumber(10)]', perfectNumber(10));
console.log('=======================================================');

// ? Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function calculatePerfectNumbers(minNum, maxNum, fn) {
  let perfectNumbers = [];
  for (let i = minNum; i < maxNum + 1; i++) {
    let perfectNum = fn(i);
    if (perfectNum) {
      perfectNumbers.push(i);
    }
  }

  return perfectNumbers;
}

console.log('[calculatePerfectNumbers(1, 1000, perfectNumber)]', calculatePerfectNumbers(1, 1000, perfectNumber));
console.log('=======================================================');
