16
/*
Метод flatMap(callback) - аналогічний методу map(), але застосовується
 у випадках, коли результат - це багатовимірний масив, який необхідно «розгладити».

масив.flatMap((element, index, array) => {
  // Тіло колбек-функції
});
У масиві students зберігається список студентів зі списком предметів, 
які відвідує студент, у властивості courses. Кілька студентів можуть відвідувати один 
і той самий предмет. Необхідно скласти список
 всіх предметів, які відвідує ця група студентів, поки що, навіть повторюваних.

const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

students.map(student => student.courses);
// [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

students.flatMap(student => student.courses);
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат 
її роботи записує у новий масив. Відмінність від map() у тому, що новий масив 
«розгладжується» на глибину, що дорівнює одиниці (одна вкладеність). 
Цей розгладжений масив і є результатом роботи flatMap().
*/
// Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив усіх жанрів
//  книг (властивість genres) з масиву книг books.

// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна genres
// Значення змінної genres - це масив [ "adventure", "history", "fiction", "horror", "mysticism" ]
// Для перебирання масиву books використовується метод flatMap()


// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism"],
//     },
//   ];
//   // Change code below this line

//   const genres = books.flatMap(book => book.genres);

// ______________________________________________



// 17
/*
Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.

[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
*/
// Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен користувачів (властивість name) з масиву об'єктів в параметрі users.

// Оголошена змінна getUserNames
// Змінній getUserNames присвоєна стрілочна функція з параметром (users).
// Для перебирання параметра users використовується метод map()
// Виклик функції із зазначеним масивом користувачів повертає масив ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення


// Change code below this line
// const getUserNames = users => users.map(user => user.name);
// Change code above this line

// ______________________________________________


// 18
/*
Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.

[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

*/
// Доповни функцію getUserEmails(users) таким чином, щоб вона повертала масив поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users.

// Оголошена змінна getUserNames
// Змінній getUserNames присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод map()
// Виклик функції із зазначеним масивом користувачів повертає масив ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const getUserEmails = users => users.map(user => user.email);


// ______________________________________________


// 19
/*
Метод filter(callback) використовується для єдиної 
операції - фільтрації масиву, тобто, коли необхідно вибрати більше одного
 елемента з колекції за певним критерієм.

масив.filter((element, index, array) => {
  // Тіло колбек-функції
});
Не змінює оригінальний масив.
Поелементо перебирає оригінальний масив.
Повертає новий масив.
Додає у масив, що повертається, елементи, які задовольняють умови колбек-функції.
Якщо колбек повернув true, елемент додається у масив, що повертається.
Якщо колбек повернув false, елемент не додається у масив, що повертається.
Якщо жоден елемент не задовольнив умову, повертає порожній масив.
const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); // [-3, -68, -37]

const bigValues = values.filter(value => value > 1000);
console.log(bigValues); // []

// Оригінальний масив не змінився
console.log(values); // [51, -3, 27, 21, -68, 42, -37]
Тобто метод filter викликає колбек-функцію для кожного елемента вихідного масиву і, 
якщо результат її виконання - true, додає поточний елемент у новий масив.

*/

// Доповни код таким чином, щоб у змінній evenNumbers
// утворився масив парних чисел з масиву numbers,
// а в змінній oddNumbers - масив непарних.Обов 'язково використовуй
// метод filter().

// Оголошена змінна numbers
// Значення змінної numbers - це масив[17, 24, 82, 61, 36, 18, 47, 52, 73]
// Оголошена змінна evenNumbers
// Значення змінної evenNumbers - це масив[24, 82, 36, 18, 52]
// Оголошена змінна oddNumbers
// Значення змінної oddNumbers - це масив[17, 61, 47, 73]
// Для перебирання масиву numbers використаний метод filter()

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => !(number % 2));
// const oddNumbers = numbers.filter(number => number % 2);



// ______________________________________________


// 20

/*
Використовуючи метод filter(), можна виконати фільтрацію масиву таким чином, 
що у ньому залишаться тільки унікальні елементи. Цей прийом працює тільки 
з масивом примітивних значень - не об'єктів.

Повернемося до групи студентів і масиву усіх відвідуваних предметів,
 які ми отримали методом flatMap().

const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

const allCourses = students.flatMap(student => student.courses);
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
У змінній allCourses зберігається масив усіх відвідуваних предметів, 
які можуть повторюватися. Завдання полягає у тому, щоб створити новий масив, 
в якому будуть тільки унікальні предмети, тобто без повторень.

const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);
Використовуючи array.indexOf(course), виконуємо пошук першого збігу поточного 
елемента course і отримуємо його індекс в оригінальному масиві усіх курсів. 
В параметрі index зберігається індекс поточного елемента course, перебираючи масив методом filter.

Якщо результат indexOf() і значення index рівні - це унікальний елемент, 
тому що таке значення зустрічається в масиві вперше, і на поточній ітерації
 фільтр обробляє саме його.

# Масив усіх курсів
["mathematics", "physics", "science", "mathematics", "physics", "biology"];
Для елемента "mathematics" під індексом 0:

indexOf() поверне 0, тому що шукає перший збіг.
Значення параметра index буде 0.
Вони рівні, а отже, це унікальний елемент.
Для елемента "mathematics" під індексом 3:

indexOf() поверне 0, тому що шукає перший збіг.
Значення параметра index буде 3.
Вони не рівні, а отже, це повторюваний - не унікальний елемент.
*/

// Доповни код таким чином, щоб у змінній allGenres був масив 
// всіх жанрів книг (властивість genres) з масиву books, а у змінній
//  uniqueGenres - масив унікальних жанрів, без повторень.

// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна allGenres
// Значення змінної allGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// Оголошена змінна uniqueGenres
// Значення змінної uniqueGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror"]
// Для обчислення значення змінної allGenders використаний метод flatMap()
// Для обчислення значення змінної uniqueGenres використаний метод filter()

const books = [{
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        genres: ["adventure", "history"],
    },
    {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        genres: ["fiction", "mysticism"],
    },
    {
        title: "Redder Than Blood",
        author: "Tanith Lee",
        genres: ["horror", "mysticism", "adventure"],
    },
];
// Change code below this line
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((genre, index) => allGenres.indexOf(genre) === index);