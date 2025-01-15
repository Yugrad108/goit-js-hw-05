//***********TODO Колбек-функції****************/
// function greet(name) {
//   return `Welcome ${name}!`;
// }
// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet("Mango")); // "Welcome Mango!"
// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() {return `Welcome ${name}!`}
// Оголосимо дві функції greet і notify, які приймають ім'я користувача і виводять різні повідомлення.
// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }
// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }
// Далі оголосимо ще одну функцію registerGuest, яка прийматиме два параметри.
// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }
// name — ім’я користувача
// callback — посилання на функцію, яку треба викликати в тілі registerGuest і передати їй ім'я користувача
// Тепер використовуємо оголошені функції під час виклику registerGuest.
// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }
// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }
// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }
// registerGuest("Mango", greet); // "Registering Mango!"
// 															 // "Welcome Mango!"
// registerGuest("Mango", notify); // "Registering Mango!"
// 																// "Dear Mango, your room will be ready in 30 minutes"
// Ми передаємо посилання на функцію greet або notify як аргумент, тому вони будуть присвоєні в параметр callback і викликані всередині функції registerGuest за допомогою круглих дужок.
// Функція зворотного виклику (callback, колбек) — це функція, яка передається іншій функції як аргумент, а та у свою чергу використовує передану функцію.
// У прикладі функції greet і notify — це колбек-функції, тому що ми передаємо їх як аргумент у функцію registerGuest. Ім'я параметра для колбека може бути довільним, головне пам'ятати, що значенням буде функція.
// Функція вищого порядку (higher order function) — функція, яка приймає в якості параметрів інші функції або повертає функцію в якості результату.
// У прикладі це функція registerGuest, тому що вона очікує іншу функцію як параметр і викликає її.
//***********OPTIMIZE =TEST=*************/
 
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// // Примеры вызовов
// console.log(makeMessage("Royal Grand", makePizza)); // "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage("Ultracheese", deliverPizza)); // "Delivering Ultracheese pizza."

//***********TODO - Стрілочні функції****************/

//***********TODO - Методи map і flatMap****************/



//*********TODO Функція з побічними ефектами — це функція, яка в процесі виконання може:



// змінювати або використовувати глобальні змінні
// змінювати значення аргументів посилального типу
// виконувати операції введення-виведення тощо


// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

//***********TODO - Чисті функції (pure function)****************/

// це функція, результат якої залежить тільки від значень переданих аргументів.
//  За умови однакових аргументів вона завжди повертає один
//   і той самий результат і не має побічних ефектів,
//     тобто не змінює значення аргументів.

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//***********OPTIMIZE =TEST=*************/

// function changeEven(numbers, value) {
//     const result = [];
//     numbers.forEach(number => {
//       if (number % 2 === 0) {
//         result.push(number + value);
//       } else {
//         result.push(number);
//       }
//     });
//     return result;
//     }
    
//     console.table(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]
//     console.table(changeEven([2, 4, 6, 8, 10], 10)); // [12, 14, 16, 18, 20]
//     console.table(changeEven([17, 24, 68, 31, 42], 100)); // [17, 124, 168, 31, 142]
//     console.table(changeEven([44, 13, 81, 92, 36, 54], 100)); // [144, 13, 81, 192, 136, 154]
    

    //***********OPTIMIZE =TEST=ОПТИМИЗИРОВАНИЙ ВАРІАНТ*************/
//     const changeEven = (numbers, value) => {
//   return numbers.map(number =>
//     number % 2 === 0 ? number + value : number
//   );
// };


// console.table(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]
// console.table(changeEven([2, 4, 6, 8, 10], 10)); // [12, 14, 16, 18, 20]
// console.table(changeEven([17, 24, 68, 31, 42], 100)); // [17, 124, 168, 31, 142]

    
//***********TODO - Перебираючі методи****************/

//     У JavaScript є методи масивів, які прийшли з функціональних мов.
//     Більшість із перебираючих методів масивів — це чисті функції.
//     Вони створюють новий масив, заповнюють його,
//     застосовуючи до значення кожного елемента зазначену колбек -
//         функцію, після чого повертають цей новий масив.



// Усі перебираючі методи масивів мають схожий синтаксис.
// На вихідному масиві array викликається перебираючий метод method,
//     у який аргументом передається колбек - функція callback.



// array.method(callback(currentValue, index, array))



// У більшості методів колбек-функції, які є їхнім аргументом, отримують три наступні параметри:



// першим параметром буде значення поточного елемента масиву currentValue
// другим параметром буде індекс поточного елемента масиву index
// третім параметром буде посилання на сам вихідний масив array


// array.method((item, idx, arr) => {
//   // логіка, яка буде виконуватися на кожній ітерації
// });



// Усі параметри, окрім значення поточного елемента масиву item, необов'язкові.
// Назви параметрів можуть бути будь - які, головне, щоб вони були зрозумілі
// тобі та іншим розробникам.



// array.method(item => {
//   // логіка, яка буде виконуватися на кожній ітерації
// });

//***********TODO - Метод map()****************/

/* Метод map(callback) використовується для трансформації масиву.
Він викликає колбек - функцію для кожного елемента вихідного масиву,
а результат її роботи записує в новий масив,
який і буде результатом виконання методу. */

// array.map((element, index, array) => {
//   // Тіло колбек-функції
// });


// Поелементно перебирає оригінальний масив
// Не змінює оригінальний масив
// Результат роботи колбек-функції записується в новий масив
// Повертає новий масив такої ж довжини, як і в масиву,
// до якого він був застосований

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригінальний масив не змінився
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

// Використання анонімних стрілочних функцій з неявним поверненням суттєво
// скорочує «шум» оголошення колбек - функції, що робить код чистішим
//  і простішим для сприйняття.

// function greeting(name) {
//     console.log("Hello " + name);
// }

// function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name); // Вызов колбек-функции
// }

// // Передаем функцию greeting как колбек
// processUserInput(greeting);


// function fetchData(callback) {
//     setTimeout(() => {
//         const data = "Data loaded"; // Симуляция загрузки данных
//         callback(data); // Вызов колбек-функции с загруженными данными
//     }, 2000);
// }

// // Используем колбек для обработки загруженных данных
// fetchData((data) => {
//     console.log(data); // Вывод: Data loaded
// });

// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { message: 'Data loaded' }; // Симуляция данных, загруженных с сервера
//     callback(data); // Вызов колбек-функции с загруженными данными
//   }, 2000);
// }

// // Использование колбек-функции
// fetchData((data) => {
//   console.log(data.message); // Вывод: Data loaded
// });

/* Пошаговое выполнение кода
Объявление функции fetchData:
Функция принимает один параметр — callback, который будет вызван после завершения асинхронной операции.
Асинхронная операция:
Внутри функции используется setTimeout, чтобы симулировать задержку (например, время, необходимое для загрузки данных с сервера).
Вызов колбек-функции:
После завершения задержки вызывается колбек-функция с загруженными данными.
Использование функции:
При вызове fetchData, передается анонимная функция в качестве колбека. Эта функция будет выполнена после завершения загрузки данных.
Вывод результата:
Когда данные загружены, в консоль выводится сообщение "Data loaded". */


    //***********OPTIMIZE =TEST=*************/

//     const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);

//***********TODO - Масив об'єктів ****************/

/* Ми вже знаємо, що типове завдання — це маніпуляція масивом об'єктів. 
Наприклад, отримати масив значень властивості з усіх об'єктів. 
У нас є масив студентів, а потрібно отримати окремий масив їхніх імен. */



// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]



/* Використовуючи метод map(), можна перебрати масив об'єктів, 
і в колбек - функції повернути значення властивості кожного з них. */

//***********OPTIMIZE =TEST=*************/
    
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map(book => book.title);

// console.log(titles);// ['The Last Kingdom', 'Beside Still Waters', 'The Dream of a Ridiculous Man', 'Redder Than Blood', 'Enemy of God']

//***********OPTIMIZE =TEST-2*************/


// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
// {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
// {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
// {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
// {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
// {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
// {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserNames = (users) => {
//   return users.map(user => user.name);
// };

 
// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Отримати масив імен всіх користувачів (поле name).
// console.log(getUserNames(users))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//***********TODO -  flatMap() ****************/

/* Метод flatMap(callback) аналогічний методу map(),
    але застосовується у випадках, коли результат — 
    це багатовимірний масив, який необхідно «розгладити». */



// array.flatMap((element, index, array) => {
//   // Тіло колбек-функції
// });



// У масиві students зберігається колекція студентів зі списком предметів,
//     які відвідує студент у властивості courses.
//     Кілька студентів можуть відвідувати один і той самий предмет.
//     Необхідно скласти список всіх предметів, які відвідує ця група студентів,
//     поки що навіть повторюваних.



// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const mappedCourses = students.map(student => student.courses);
// console.log(mappedCourses) // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// const flattenedCourses = students.flatMap(student => student.courses);
// console.log(flattenedCourses) // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];



// Метод flatMap викликає колбек - функцію для кожного елемента вихідного масиву,
//     а результат її роботи записує в новий масив.Відмінність від map() полягає
//     в тому, що новий масив «розгладжується» на глибину,
//     що дорівнює одиниці(одна вкладеність).
//     Цей розгладжений(плоский) масив і є результатом роботи flatMap().

//***********OPTIMIZE =TEST=*************/
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap(book => book.genres);

// console.log(genres);// ['adventure', 'history', 'fiction', 'horror', 'mysticism']

//***********OPTIMIZE =TEST 2*************/

// const users = [
 
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserEmails = (users) => {
// return users.map(user => user.email);
// };

// console.log(getUserEmails(users));


//***********TODO -  Метод filter() ****************/
/* Метод filter(callback) використовується для єдиної операції — фільтрації масиву. 
Під фільтрацією масиву мається на увазі відбір усіх елементів з колекції 
за певним критерієм. */
// Не змінює оригінальний масив.
// Поелементно перебирає оригінальний масив.
// Повертає новий масив.
// Додає в масив, що повертається, елементи, які задовольняють умову колбек-функції.
// Якщо колбек повернув true, елемент додається в масив, що повертається.
// Якщо колбек повернув false, елемент не додається в масив, що повертається.
// Якщо жоден елемент не задовольнив умову, повертає порожній масив.

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]
// // до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]
// // до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []
// // до negatibigValues eValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// // Оригінальний масив values не змінився



//***********OPTIMIZE =TEST*************/


// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(value => value % 2 === 0);
// const oddNumbers = numbers.filter(value => value % 2 !== 0);


//***********TODO -  Метод filter() ****************/


// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Mango і Kiwi

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Ajax

// const average = students.filter(
//   (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Poly і Houston

//***********OPTIMIZE =TEST*************/


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);


//***********OPTIMIZE =TEST*************/


/* Доповни функцію getUsersWithEyeColor(users, color) таким чином,
щоб вона повертала масив користувачів, у яких колір очей(властивість eyeColor)
збігається зі значенням другого параметра color. */

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(eyes => eyes.eyeColor === color);
// };

// console.log(getUsersWithEyeColor(users, 'blue')); // [Moore Hensley, Sharlene Bush, Carey Barr]
// console.log(getUsersWithEyeColor(users, 'green')); // [Ross Vazquez, Elma Head]
// console.log(getUsersWithEyeColor(users, 'brown')); // [Blackburn Dotson, Sheree Anthony]
// console.log(getUsersWithEyeColor(users, 'yellow')); // []

//***********TODO -  Метод reduce() ****************/

// Метод reduce(callback, initialValue) використовується для послідовної обробки
//  кожного елемента масиву із збереженням проміжного результату.
//  Трохи складніший за інші методи для засвоєння, але результат вартий того.



// array.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// }, initialValue);



// Не змінює оригінальний масив
// Поелементно перебирає оригінальний масив
// Повертає все, що завгодно (об’єкт, масив, рядок, число тощо)
// Може замінити функціонал будь-якого іншого перебираючого методу масиву та навіть їх комбінацію


// Метод reduce() очікує 2 параметри:



// 1-й параметр (обов’язковий) — колбек-функція, яка "опрацьовує" кожен елемент масиву;

// 2-й параметр (не обов’язковий) — initialValue початкове значення акумулятора.

// Колбек - функція з параметра редьюса очікує в свою чергу чотири параметри.Ці параметри,
//     так само як і в колбеках інших перебираючих методів масиву, можна не оголошувати,
//         якщо вони вам не потрібні, але не можна порушувати їх послідовність:



// 1-й параметр (previousValue) — це акумулятор, тобто проміжний результат. Значення, яке поверне колбек-функція на поточній ітерації, буде значенням цього параметра на наступній ітерації;

// 2-й параметр — поточний елемент масиву;

// 3-й параметр — індекс поточної ітерації;

// 4-й параметр — посилання на вихідний масив.

// Найлегше уявити його роботу на прикладі підрахунку суми елементів масиву.



// const total = [2, 7, 3].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 12

//***********OPTIMIZE =TEST*************/

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]


// const totalPlayTime = playtimes.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);

// console.log(averagePlayTime);

//***********TODO -  Метод reduce() і масив об'єктів****************/


// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;


//***********OPTIMIZE =TEST2*************/

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((gametime, player) => {
//     const avplaytime = player.playtime / player.gamesPlayed;

//     return gametime + avplaytime;
// }, 0);

// console.log(totalAveragePlaytimePerGame);


//***********OPTIMIZE =TEST3*************/

// const calculateTotalBalance = (users) => {
//   return users.reduce((acc, user) => acc + user.balance, 0);
// };

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];


// console.log(calculateTotalBalance(users)); // 20916


//***********TODO -  Метод toSorted()****************/

// array.toSorted();

// Сортує вихідний масив
// Повертає новий масив
// За замовчуванням сортує за зростанням

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Оскільки за замовчуванням перед сортуванням метод toSorted()
//  приводить усі елементи масиву до рядків, то фактично елементи
//   сортуються як рядки, тобто на основі їхніх значень у таблиці Unicode.
//   Стандартне сортування чисел виглядає незвично, коли ми думаємо про числа,
//     але зрозуміло, якщо знати, що числа були перетворені на рядки.

// const scores = [27, 2, 41, 4, 7, 3, 75];

// console.log(scores.toSorted()); // [2, 27, 3, 4, 41, 7, 75]

// Масив рядків сортується за алфавітом.

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// console.log(students.toSorted()); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const letters = ["b", "B", "a", "A", "c", "C"];

// Водночас порядковий номер великих літер менший, ніж у малих.

// console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]

//***********OPTIMIZE =TEST*************/

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = releaseDates.toSorted();

// const alphabeticalAuthors = authors.toSorted();

// console.log(ascendingReleaseDates); // [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// console.log(alphabeticalAuthors); // ["Bernard Cornwell", "Fyodor Dostoevsky", "Robert Sheckley", "Tanith Lee"]

//***********TODO -  Метод toSorted() Свій порядок сортування чисел****************/

// Для зазначення свого порядку сортування методу toSorted(compareFunction) потрібно передати
// колбек - функцію з двома параметрами.



// Це функція порівняння(compare function), порядок сортування залежить від її результату.
// Метод toSorted() буде викликати її для двох довільних елементів.



// array.toSorted((a, b) => {
//   // Callback function body
// });



// a — перший елемент для порівняння.
// b — другий елемент для порівняння.


// Сортування за зростанням



// Якщо виклик compareFunction(a, b) повертає будь - яке негативне значення,
//     тобто a менше b, сортування поставить a перед b.



// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]



// Сортування за спаданням



// Якщо виклик compareFunction(a, b) повертає будь - яке позитивне значення,
//     тобто b більше a, сортування поставить b перед a.



// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = scores.toSorted((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]



// Якщо виклик compareFunction(a, b) поверне 0, сортування залишить a і b незмінними
//  по відношенню один до одного, але відсортує їх по відношенню до всіх інших елементів.



// Зверни увагу, що при сортуванні масиву чисел і передачі в метод toSorted() колбек - функції,
//     числа вже не будуть приводитися до рядків, тобто їх сортування буде очікуваним і звичним.

//***********OPTIMIZE =TEST*************/

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);// порядок сортування за зростанням

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a); // порядок сортування за спаданням

// console.log(ascendingReleaseDates); // [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// console.log(descendingReleaseDates); // [2016, 2012, 2008, 1997, 1984, 1973, 1967]

//***********TODO -  Метод toSorted() Свій порядок сортування чисел****************/

// Свій порядок сортування рядків



// Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare().



// firstString.localeCompare(secondString)



// Він викликається на рядку, який потрібно порівняти (firstString) з тим, що був переданий йому як аргумент (secondString).



// "a".localeCompare("b"); // -1
// "b".localeCompare("a"); // 1
// "a".localeCompare("a"); // 0
// "b".localeCompare("b"); // 0



// Повертає негативне значення, якщо firstString повинен бути перед secondString
// Повертає позитивне значення, якщо firstString повинен бути після secondString
// Якщо рядки однакові, повертається нуль і їх послідовність по відношенню один до одного не змінюється


// Метод localeCompare() зручно використовувати для сортування рядків, оскільки метод toSorted() очікує такі самі значення від колбек-функції.



// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

//***********OPTIMIZE =TEST*************/

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];

// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder); // [ 'Bernard Cornwell', 'Howard Lovecraft', 'Fyodor Dostoevsky', 'Robert Sheckley', 'Tanith Lee' ]
// console.log(authorsInReversedOrder); // ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]

//***********TODO -  Сортування об'єктів****************/


// за зростанням кількості балів
// за спаданням кількості балів
// за ім'ям студента в алфавітному порядку


// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

//***********OPTIMIZE =TEST*************/

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((firstName, secondName) =>
//   firstName.author.localeCompare(secondName.author)
// );

// const sortedByReversedAuthorName = books.toSorted((firstName, secondName) =>
// secondName.author.localeCompare(firstName.author)
// );

// const sortedByAscendingRating = books.toSorted((firstName, secondName) =>
// firstName.rating - secondName.rating
// );

// const sortedByDescentingRating = books.toSorted((firstName, secondName) =>
// secondName.rating - firstName.rating
// );

// console.log(sortedByAuthorName);// ['The Last Kingdom', 'Enemy of God', 'The Dream of a Ridiculous Man', 'Beside Still Waters', 'Redder Than Blood']
// console.log(sortedByReversedAuthorName);// ['Redder Than Blood', 'Beside Still Waters', 'The Dream of a Ridiculous Man', 'The Last Kingdom', 'Enemy of God']
// console.log(sortedByAscendingRating);// ['The Dream of a Ridiculous Man', 'Redder Than Blood', 'The Last Kingdom', 'Beside Still Waters', 'Enemy of God']
// console.log(sortedByDescentingRating);// ['Enemy of God', 'Beside Still Waters', 'The last Kingdom', 'Redder Than Blood', 'The Dream of a Ridiculous Man']

//***********TODO -  Ланцюжки методів****************/

// У нас є масив об'єктів з іменами, балами й відвідуваними предметами кожного студента.



// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];



// Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест.

// Для цього:



// Відсортуємо масив методом toSorted(),
// Після чого методом map() створимо масив значень властивості name з відсортованого масиву.


// const sortedByAscendingScore = students.toSorted((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map(student => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]



// Проблема в тому, що в нас з'являються проміжні змінні після кожної операції, крім фінальної.
//  Змінна sortedByAscendingScore — зайва.Вона необхідна тільки для зберігання проміжного результату.



// Позбутися таких «мертвих» змінних можна за допомогою групування викликів методів у ланцюжки.
//  Кожний наступний метод буде виконуватися на основі результату роботи попереднього.



// const names = students
//   .toSorted((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]



// На масиві викликаємо метод toSorted()
// До результату роботи методу toSorted() застосовуємо метод map()
// Змінній names присвоюється результат роботи методу map()


// Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.



// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]



// На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів
// До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів
// На результаті методу filter() викликаємо toSorted()
// Змінній uniqueSortedCourses присвоюється результат роботи методу toSorted()


// Ланцюжок методів може бути довільної довжини, але зазвичай не більше 2-3 операцій.



//     По - перше, перебираючі методи використовуються для порівняно простих операцій над колекцією.
//     По - друге, виклик кожного наступного методу — це додаткове перебирання масиву, що за великої кількості може позначитися на продуктивності.


//***********OPTIMIZE =TEST*************/


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//     .filter(book => book.rating > MIN_BOOK_RATING) //залишає тільки ті книги, у яких рейтинг більший за 8.
//     .map(book => book.author) //створює новий масив, що містить тільки імена авторів.
//     .toSorted((a, b) => a.localeCompare(b)); //сортує масив імен авторів в алфавітному порядку.


//     console.log(names);

