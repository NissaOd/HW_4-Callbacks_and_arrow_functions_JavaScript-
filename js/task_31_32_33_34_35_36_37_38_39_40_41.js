//31
// Доповни функцію isEveryUserActive(users) таким чином,
//     щоб вона перевіряла, чи всі користувачі зараз активні(властивість isActive)
// і повертала true або false.

// Оголошена змінна isEveryUserActive
// Змінній isEveryUserActive присвоєна стрілочна функція з параметром(users)
// Для перебирання параметра users використовується метод every()
// Виклик функції із зазначеним масивом користувачів повертає false
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення


// const isEveryUserActive = (users) => users.every(user => user.isActive);



// ______________________________________________



// 32
/*
Метод some(callback) перевіряє, чи проходить хоча б один елемент масиву тест колбек-функції. Повертає true або false.

масив.some((element, index, array) => {
  // Callback function body
});
Не змінює оригінальний масив.
Поелементо перебирає оригінальний масив.
Повертає true, якщо хоча б один елемент масиву задовольняє умову.
Повертає false, якщо жоден елемент масиву не задовольняє умову.
Перебирання масиву припиняється, якщо колбек повертає true.
// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[1, 2, 3, 4, 5].some(value => value >= 0); // true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Чи є хоча б один елемент, що менший нуля? - ні
[1, 2, 3, 4, 5].some(value => value < 0); // false

// Чи є хоча б один елемент, що менший нуля? - так
[1, 2, 3, -10, 4, 5].some(value => value < 0); // true
*/

// Використовуючи метод some(), доповни код таким чином, щоб:

//     У змінній anyElementInFirstIsEven був результат перевірки наявності парних елементів в масиві firstArray.
// У змінній anyElementInFirstIsOdd був результат перевірки наявності непарних елементів в масиві firstArray.
// У змінній anyElementInSecondIsEven був результат перевірки наявності парних елементів в масиві secondArray.
// У змінній anyElementInSecondIsOdd був результат перевірки наявності непарних елементів в масиві secondArray.
// У змінній anyElementInThirdIsEven був результат перевірки наявності парних елементів в масиві thirdArray.
// У змінній anyElementInThirdIsOdd був результат перевірки наявності непарних елементів в масиві thirdArray.
// Оголошена змінна firstArray
// Значення змінної firstArray - це масив[26, 94, 36, 18]
// Оголошена змінна secondArray
// Значення змінної secondArray - це масив[17, 61, 23]
// Оголошена змінна thirdArray
// Значення змінної thirdArray - це масив[17, 26, 94, 61, 36, 23, 18]
// Оголошена змінна anyElementInFirstIsEven
// Значення змінної anyElementInFirstIsEven - це буль true
// Оголошена змінна anyElementInFirstIsOdd
// Значення змінної anyElementInFirstIsOdd - це буль false
// Оголошена змінна anyElementInSecondIsEven
// Значення змінної anyElementInSecondIsEven - це буль false
// Оголошена змінна anyElementInSecondIsOdd
// Значення змінної anyElementInSecondIsOdd - це буль true
// Оголошена змінна anyElementInThirdIsEven
// Значення змінної anyElementInThirdIsEven - це буль true
// Оголошена змінна anyElementInThirdIsOdd
// Значення змінної anyElementInThirdIsOdd - це буль true
// Для перебирання масивів використаний метод some()


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(element => !(element % 2));
// const anyElementInFirstIsOdd = firstArray.some(element => element % 2);

// const anyElementInSecondIsEven = secondArray.some(element => !(element % 2));
// const anyElementInSecondIsOdd = secondArray.some(element => element % 2);

// const anyElementInThirdIsEven = thirdArray.some(element => !(element % 2));
// const anyElementInThirdIsOdd = thirdArray.some(element => element % 2);





// ______________________________________________


// 33

// Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність активних користувачів (властивість isActive) і повертала true або false.

// Оголошена функція isAnyUserActive(users)
// Для перебирання параметра users використовується метод some()
// Виклик функції із зазначеним масивом користувачів повертає true
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення


// const isAnyUserActive = users => users.some(user => user.isActive);






// ______________________________________________




// 34
/*
Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату, як акумулятор. Трохи складніший за інші методи для засвоєння, але результат вартий того.

массив.reduce((previousValue, element, index, array) => {
  // Тіло колбек-функції
}, initialValue);
Не змінює оригінальний масив.
Поелементо перебирає оригінальний масив.
Повертає все, що завгодно.
Робить все, що завгодно.

*/

// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх.Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.

// Оголошена змінна players
// Значення змінної players - це об 'єкт гравців з ігровим часом кожного
// Оголошена змінна playtimes
// Значення змінної playtimes - це масив[1270, 468, 710, 244]
// Оголошена змінна totalPlayTime
// Значення змінної totalPlayTime - це число 2692
// Для перебирання масиву playtimes використовується метод reduce()
// Оголошена змінна averagePlayTime
// Значення змінної averagePlayTime - це число 673




// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
//   // Change code below this line

//   const totalPlayTime = playtimes.reduce((result, playtime) => result + playtime, 0);

//   // Change code above this line
//   const averagePlayTime = totalPlayTime / playtimes.length;





// ______________________________________________



// 35

/*
Під час роботи з масивом об'єктів виконується редукування за значенням певної властивості. Наприклад, у нас є масив студентів з балами за тест. Необхідно отримати середній бал.

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

// Назва акумулятора може бути довільною, це просто параметр функції
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;
*/

// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу.Розрахувати час для кожного з гравців можна, розділивши його час(властивість playtime) на кількість ігор(властивість gamesPlayed).

// Оголошена змінна players
// Значення змінної players - це масив об 'єктів гравців
// Оголошена змінна totalAveragePlaytimePerGame
// Значення змінної totalAveragePlaytimePerGame - це число 1023
// Для перебирання масиву players використовується метод reduce()

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
//   // Change code below this line

//   const totalAveragePlaytimePerGame = players.reduce((result, player) => result + (player.playtime / player.gamesPlayed), 0);






// ______________________________________________


// 36


// Доповни функцію calculateTotalBalance(users)
// таким чином, щоб вона рахувала і повертала суму всіх коштів
//     (властивість balance), які зберігають користувачі з масиву users.

// Оголошена змінна calculateTotalBalance
// Змінній calculateTotalBalance присвоєна стрілочна функція з параметром(users)
// Для перебирання параметра users використовується метод reduce()
// Виклик функції із зазначеним масивом користувачів повертає число 20916
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const calculateTotalBalance = users => users.reduce((total, user) => total + user.balance, 0);

// ______________________________________________



// 37


// Доповни функцію getTotalFriendCount(users) таким чином,
//     щоб вона рахувала і повертала загальну кількість друзів(властивість friends)
// усіх користувачів з масиву users.

// Оголошена змінна getTotalFriendCount
// Змінній getTotalFriendCount присвоєна стрілочна функція з параметром(users)
// Для перебирання параметра users використовується метод reduce()
// Виклик функції із зазначеним масивом користувачів повертає число 14
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const getTotalFriendCount = users => users.reduce((total, user) => total + user.friends.length, 0);

// ______________________________________________




// 38
/*
Метод sort() сортує елементи масиву, але на відміну від інших методів перебирання, він сортує вихідний масив.

Сортує і змінює вихідний масив.
Повертає змінений масив, тобто посилання на відсортований вихідний.
За замовчуванням сортує за зростанням.
Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових номерів у таблиці Unicode.
Такий масив чисел буде відсортований за зростанням.

const scores = [61, 19, 74, 35, 92, 56];
scores.sort();
console.log(scores); // [19, 35, 56, 61, 74, 92]
Але, оскільки за замовчуванням значення приводяться до рядка, стандартне сортування чисел працює незвично. Тому, у наступній вправі ми розглянемо як задавати свій порядок сортування.

const scores = [27, 2, 41, 4, 7, 3, 75];
scores.sort();
console.log(scores); // [2, 27, 3, 4, 41, 7, 75]
Масив рядків сортується за алфавітом.

const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
students.sort();
console.log(students); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]
Водночас порядковий номер великих літер менший, ніж у малих.

const letters = ["b", "B", "a", "A", "c", "C"];
letters.sort();
console.log(letters); // ["A", "B", "C", "a", "b", "c"]
Через те, що сортується вихідний масив, порушується принцип чистоти функцій і не можна зручно створити декілька похідних колекцій на основі вихідної. Наприклад, створити колекцію, відсортовану за зростанням, а іншу - за спаданням. Тому перед сортуванням роблять повну копію вихідного масиву і сортують вже її.

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort();

console.log(scores); // [61, 19, 74, 35, 92, 56]
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
*/


// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія
// масиву releaseDates, відсортована за зростанням, а у змінній
// alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом.

// Оголошена змінна releaseDates
// Значення змінної releaseDates - це масив[2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Оголошена змінна authors
// Значення змінної authors - це масив["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
// Оголошена змінна ascendingReleaseDates
// Значення змінної ascendingReleaseDates - це масив[1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Оголошена змінна alphabeticalAuthors
// Значення змінної alphabeticalAuthors - це масив["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]
// Використаний метод sort()


// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// ______________________________________________


// 39
/*
Для зазначення свого порядку сортування методу sort(compareFunction)
 потрібно передати колбек-функцію з двома параметрами. Це функція порівняння
  (compare function), порядок сортування залежить від її результату. 
  Метод sort() буде викликати її для двох довільних елементів.

масив.sort((a, b) => {
  // Callback function body
});
a - перший елемент для порівняння.
b - другий елемент для порівняння.
Якщо виклик compareFunction(a, b) повертає будь-яке від'ємне значення, 
тобто a менше b, сортування поставить a перед b. Це сортування за зростанням.

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
Якщо виклик compareFunction(a, b) повертає будь-яке додатне значення більше нуля,
 тобто b більше a, сортування поставить b перед a. Це сортування за спаданням.

const scores = [61, 19, 74, 35, 92, 56];
const descendingScores = [...scores].sort((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]
Якщо виклик compareFunction(a, b) поверне 0, сортування залишить a і b 
незмінними по відношенню один до одного, але відсортує їх по відношенню до
 всіх інших елементів. Але взагалі неважливо, що повертати, якщо їх
  взаємний порядок не має значення.
*/


// Онлайн бібіліотеці необхідно відображати книги, відсортовані
// за датою видання, за її зростанням або спаданням.Доповни код таким чином,
//     щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates,
//     відсортована за зростанням, а у змінній descendingReleaseDates - копія,
//     відсортована за спаданням.

// Оголошена змінна releaseDates
// Значення змінної releaseDates - це масив[2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Оголошена змінна ascendingReleaseDates
// Значення змінної ascendingReleaseDates - це масив[1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Оголошена змінна descendingReleaseDates
// Значення змінної descendingReleaseDates - це масив[2016, 2012, 2008, 1997, 1984, 1973, 1967]
// Використаний метод sort()



// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);



// ______________________________________________






// 40

/*
Для сортування рядків в алфавітному порядку, за зростанням або спаданням,
 використовується метод рядків localeCompare().

firstString.localeCompare(secondString)
Він викликається на рядку, який потрібно порівняти (firstString) з тим,
 що був переданий йому як аргумент (secondString).

"a".localeCompare("b"); // -1
"b".localeCompare("a"); // 1
"a".localeCompare("a"); // 0
"b".localeCompare("b"); // 0
Повертає від'ємне значення, якщо firstString повинен бути перед secondString.
Повертає додатне значення більше нуля, якщо firstString повинен бути після secondString.
Якщо рядки однакові, повертається нуль.
Це зручно використовувати для сортування рядків, оскільки метод sort() очікує 
такі самі значення від колбек-функції.

const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]
*/


// Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором,
// в алфавітному і зворотному алфавітному порядку.Доповни код таким чином,
//     щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors,
//     відсортована за алфавітом, а у змінній authorsInReversedOrder - копія,
//     відсортована у зворотному алфавітному порядку.

// Оголошена змінна authors
// Значення змінної authors - це масив["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]
// Оголошена змінна authorsInAlphabetOrder
// Значення змінної authorsInAlphabetOrder - це масив["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// Оголошена змінна authorsInReversedOrder
// Значення змінної authorsInReversedOrder - це масив["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]
// Використаний метод sort()


// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
//   ];
//   // Change code below this line

//   const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

//   const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));


// ____________________________________________________


//41

/*
Під час роботи з масивом об'єктів, сортування виконується за числовим 
або рядковим значенням певної властивості. Наприклад,
 у нас є група студентів з балами за тест. Необхідно
  відсортувати масив об'єктів за зростанням і спаданням кількості балів, і за ім'ям студента.

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];

const inAscendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);
*/

// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям 
// автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований 
// за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.
// Оголошена змінна books
// Значення змінної books - це вихідний масив об'єктів книг
// Оголошена змінна sortedByAuthorName
// Значення змінної sortedByAuthorName - це масив книг, відсортований 
// за ім'ям автора в алфавітному порядку
// Оголошена змінна sortedByReversedAuthorName
// Значення змінної sortedByReversedAuthorName - це масив книг, 
// відсортований за ім'ям автора у зворотному алфавітному порядку
// Оголошена змінна sortedByAscendingRating
// Значення змінної sortedByAscendingRating - це масив книг, відсортований за зростанням рейтингу
// Оголошена змінна sortedByDescentingRating
// Значення змінної sortedByDescentingRating - це масив книг, відсортований за спаданням рейтингу
// Для перебирання масиву books використовується метод sort()



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

const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);