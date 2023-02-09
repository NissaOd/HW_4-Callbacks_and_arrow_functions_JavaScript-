// 42
// Доповни функцію sortByAscendingBalance(users) таким чином,
//     щоб вона повертала масив користувачів, відсортований
// за зростанням їх балансу(властивість balance).

// Оголошена змінна sortByAscendingBalance
// Змінній sortByAscendingBalance присвоєна стрілочна функція з параметром(users)
// Значення параметра users не змінюється
// Виклик функції із зазначеним масивом користувачів повертає новий
// масив користувачів, відсортований за зростанням їх балансу
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
// Для перебирання параметра users використаний метод sort()


// const sortByAscendingBalance = users => [...users].sort((a, b) => a.balance - b.balance);



// ______________________________________________


// 43


// Доповни функцію sortByDescendingFriendCount(users) таким
// чином, щоб вона повертала масив користувачів, відсортований за спаданням
// кількості їхніх друзів(властивість friends).

// Оголошена змінна sortByDescendingFriendCount
// Змінній sortByDescendingFriendCount присвоєна стрілочна функція з параметром(users)
// Значення параметра users не змінюється
// Для перебирання параметра users використаний метод sort()
// Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів,
// відсортований за спаданням кількості їхніх друзів
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення


// const sortByDescendingFriendCount = users => [...users].sort((a, b) => b.friends.length - a.friends.length);

// ______________________________________________




// 44

// Доповни функцію sortByName(users) таким чином,
//     щоб вона повертала масив користувачів, відсортований за їх ім 'ям 
//     (властивість name) в алфавітному порядку.

// Оголошена змінна sortByName
// Змінній sortByName присвоєна стрілочна функція з параметром(users)
// Значення параметра users не змінюється
// Для перебирання параметра users використаний метод sort()
// Виклик функції із зазначеним масивом користувачів повертає новий масив
// користувачів, відсортований за ім 'ям в алфавітному порядку
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення


// const sortByName = users => [...users].sort((a, b) => a.name.localeCompare(b.name));


// ______________________________________________





// 45

/*
У нас є масив об'єктів з іменами, балами і відвідуваними предметами кожного студента.

const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];
Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест.
 З цією метою ми відсортуємо копію масиву методом sort(), 
 після чого методом map() створимо масив значень властивості name з відсортованого масиву.

const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
const names = sortedByAscendingScore.map(student => student.name);

console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]
Проблема в тому, що у нас з'являються проміжні змінні після кожної операції,
 крім фінальної. Змінна sortedByAscendingScore - зайва і необхідна
  тільки для зберігання проміжного результату.

Позбутися таких «мертвих» змінних можна за допомогою групування 
викликів методів у ланцюжки. Кожний наступний метод буде виконуватися 
на основі результату роботи попереднього.

const names = [...students]
  .sort((a, b) => a.score - b.score)
  .map(student => student.name);

console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]
Робимо копію вихідного масиву перед сортуванням.
На копії викликаємо метод sort().
До результату роботи методу sort() застосовуємо метод map().
Змінній names присвоюється результат роботи методу map().
Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.

const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]
На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів.
До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів.
На результаті методу filter() викликаємо sort().
Змінній uniqueSortedCourses присвоюється результат роботи методу sort().
Ланцюжок методів може бути довільної довжини, але, зазвичай, не більше 2-3 операцій. 
По-перше, перебираючі методи використовуються для порівняно простих операцій над колекцією. 
По-друге, виклик кожного наступного методу - це додаткове перебирання масиву,
 що за великої кількості, може позначитися на продуктивності.
*/

// Доповни код таким чином, щоб у змінній names
// вийшов масив імен авторів в алфавітному порядку,
// рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.

// Оголошена змінна books
// Значення змінної books - це вихідний масив об 'єктів
// Оголошена змінна MIN_BOOK_RATING
// Значення змінної MIN_BOOK_RATING - це число 8
// Оголошена змінна names
// Значення змінної names - це масив["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
// Відсутні оголошені змінні, крім books, MIN_BOOK_RATING і names
// Використовується ланцюжок методів filter, map, sort



// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//       title: "The Dreams in the Witch House",
//       author: "Howard Lovecraft",
//       rating: 8.67,
//     },
//   ];
//   const MIN_BOOK_RATING = 8;
//   // Change code below this line

//   const names = [...books]
//       .filter(book => book.rating > MIN_BOOK_RATING)
//       .map(book => book.author)
//       .sort((a, b) => a.localeCompare(b));





// ______________________________________________


// 46


// Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб
// вона повертала масив імен користувачів, відсортований за зростанням
// кількості їхніх друзів(властивість friends).

// Оголошена змінна getNamesSortedByFriendCount
// Змінній getNamesSortedByFriendCount присвоєна стрілочна функція з параметром(users)
// У тілі функції використовується ланцюжок методів
// Значення параметра users не змінюється
// Виклик функції із зазначеним масивом користувачів повертає
// масив["Moore Hensley", "Sharlene Bush", "Elma Head", "Sheree Anthony", "Ross Vazquez", "Carey Barr", "Blackburn Dotson"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення


// const getNamesSortedByFriendCount = users =>
//     [...users].sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name);





// ______________________________________________



// 47

// Доповни функцію getSortedFriends(users) таким чином,
//     щоб вона повертала масив унікальних імен друзів(властивість friends), відсортований за алфавітом.

// Оголошена змінна getSortedFriends
// Змінній getSortedFriends присвоєна стрілочна функція з параметром(users)
// У тілі функції використовується ланцюжок методів в правильному порядку
// Значення параметра users не змінюється
// Виклик функції із зазначеним масивом користувачів повертає
// масив["Adrian Cross", "Aisha Tran", "Briana Decker", "Eddie Strong", "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman", "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison", "Sharron Pace", "Solomon Fokes"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення


// const getSortedFriends = users =>
//     users.flatMap(user => user.friends)
//         .filter((friend, index, friends) => friends.indexOf(friend) === index)
//         .sort((a, b) => a.localeCompare(b));




// ______________________________________________

// 48

// Доповни функцію getTotalBalanceByGender(users, gender) таким чином,
//     щоб вона повертала загальний баланс користувачів(властивість balance),
//     стать яких(властивість gender) збігається зі значенням параметра gender.

// Оголошена змінна getTotalBalanceByGender
// Змінній getTotalBalanceByGender присвоєна стрілочна функція з параметрами(users, gender)
// У тілі функції використовується ланцюжок методів в правильному порядку
// Значення параметра users не змінюється
// Якщо значення параметра gender - це рядок "male", функція повертає число 12053
// Якщо значення параметра gender - це рядок "female", функція повертає число 8863
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

const getTotalBalanceByGender = (users, gender) => [...users].filter(user => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);