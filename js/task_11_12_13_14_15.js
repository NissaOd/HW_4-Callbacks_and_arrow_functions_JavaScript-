// 11
// ЗАДАЧА.ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0
// Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

// Оголошена змінна filterArray
// Змінній filterArray присвоєна стрілочна функція з параметрами (numbers, value)
// Для перебирання масиву numbers використаний метод forEach
// Колбек для методу forEach - це стрілочна функція
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach(number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     // Change code above this line
//     return filteredNumbers;
//   }
// ____________________________________________________


// 12
// ЗАДАЧА.СПІЛЬНІ ЕЛЕМЕНТИ 2.0
// Заміни оголошення функції getCommonElements() і колбек для методу forEach() на стрілочні функції.

// Оголошена змінна getCommonElements.
// Змінній getCommonElements присвоєна стрілочна функція з параметрами(firstArray, secondArray)
// Для перебирання масиву firstArray використаний метод forEach
// Колбек для методу forEach - це стрілочна функція
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає[2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає[1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає[12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає[10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає[]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення


// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach(element => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });

//     // Change code above this line
//     return commonElements;
//   }

// ____________________________________________________



// 13
/*
Функція з побічними ефектами - це функція, яка в процесі виконання може змінювати або використовувати глобальні змінні, змінювати значення аргументів посилального типу, виконувати операції введення-виведення тощо.

const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// Відбулася мутація вихідних даних - масиву numbers
console.log(numbers); // [2, 4, 6, 8, 10]
Функція dirtyMultiply(array, value) множить кожен елемент масиву array
 на число value. Вона змінює (мутує) вихідний масив за посиланням.

Чиста функція (pure function) - це функція, результат якої залежить 
тільки від значень переданих аргументів. За умови однакових аргументів 
вона завжди повертає один і той самий результат, і не має побічних ефектів,
 тобто не змінює значення аргументів.

Напишемо реалізацію чистої функції множення елементів масиву, 
що повертає новий масив, не змінюючи вихідний.

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Мутація вихідних даних не відбулася
console.log(numbers); // [1, 2, 3, 4, 5]
// Функція повернула новий масив зі зміненими даними
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
*/

// Функція changeEven(numbers, value) приймає масив чисел numbers і
// оновлює кожен елемент, значення якого - це парне число, додаючи
// до нього значення параметра value.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою -
//     не змінювала масив чисел numbers, а створювала, наповнювала
// і повертала новий масив з оновленими значеннями.

// Оголошена функція changeEven(numbers, value)
// Функція changeEven не змінює значення параметра numbers
// Виклик changeEven([1, 2, 3, 4, 5], 10) повертає новий масив[1, 12, 3, 14, 5]
// Виклик changeEven([2, 8, 3, 7, 4, 6], 10) повертає новий масив[12, 18, 3, 7, 14, 16]
// Виклик changeEven([17, 24, 68, 31, 42], 100) повертає новий масив[17, 124, 168, 31, 142]
// Виклик changeEven([44, 13, 81, 92, 36, 54], 100) повертає новий масив[144, 13, 81, 192, 136, 154]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function changeEven(numbers, value) {
//     // Change code below this line
//       const newArray = [];

//       numbers.forEach(number => {
//           newArray.push(number % 2 === 0
//               ? number + value
//               : number);
//       })

//       return newArray;
//     // Change code above this line
//   }

// ____________________________________________________


// 14

/*Більшість перебираючих методів масиву - це чисті функції. 
Вони створюють новий масив, заповнюють його, застосовуючи до 
значення кожного елемента зазначену колбек-функцію, після чого повертають цей новий масив.

Метод map(callback) використовується для трансформації масиву.
 Він викликає колбек-функцію для кожного елемента вихідного масиву, 
 а результат її роботи записує у новий масив, який і буде результатом виконання методу.

масив.map((element, index, array) => {
  // Тіло колбек-функції
});
Поелементо перебирає оригінальний масив.
Не змінює оригінальний масив.
Результат роботи колбек-функції записується у новий масив.
Повертає новий масив однакової довжини.
Його можна використовувати для того, щоб змінити кожен елемент масиву. Оригінальний масив використовується як еталон, на основі якого можна зробити іншу колекцію.

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// Оригінальний масив не змінився
console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]
Використання анонімних стрілочних функцій з неявним поверненням суттєво скорочує «шум» оголошення колбек-функції, що робить код чистішим і простішим для сприйняття.
*/
// Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет. Обов'язково використовуй метод map().

// Оголошена змінна planets
// Значення змінної planets - це масив ["Earth", "Mars", "Venus", "Jupiter"]
// Оголошена змінна planetsLengths
// Значення змінної planetsLengths - це масив [5, 4, 5, 7]
// Для перебирання масиву планет використаний метод map()

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// ____________________________________________________


// 15
/*
Ми вже знаємо, що повсякденне завдання - це маніпуляція масивом об'єктів. Наприклад, отримати масив значень властивості з усіх об'єктів. У нас є масив студентів, а потрібно отримати окремий масив їхніх імен.

const students = [
    { name: "Mango", score: 83 },
    { name: "Poly", score: 59 },
    { name: "Ajax", score: 37 },
    { name: "Kiwi", score: 94 },
    { name: "Houston", score: 64 },
  ];
  
  const names = students.map(student => student.name);
  console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]
  Використовуючи метод map(), ми можемо перебрати масив об'єктів, і 
  в колбек-функції повернути значення властивості кожного з них.
  */

// Використовуючи метод map(), зроби так, щоб у змінній titles
// вийшов масив назв книг(властивість title) з усіх об 'єктів масиву
// books.

// Оголошена змінна books
// Значення змінної books - це масив
// Оголошена змінна titles
// Значення змінної titles - це масив["The Last Kingdom",
//     "Beside Still Waters", "The Dream of a Ridiculous Man",
//     "Redder Than Blood", "Enemy of God"]
// Для перебирання масиву books використовується метод map()
// як чиста функція

const books = [{
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
    },
    {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        rating: 8.51,
    },
    {
        title: "The Dream of a Ridiculous Man",
        author: "Fyodor Dostoevsky",
        rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const titles = books.map(book => book.title);