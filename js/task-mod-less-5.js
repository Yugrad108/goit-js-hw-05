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

 

function deliverPizza(pizzaName) {  
  return `Delivering ${pizzaName} pizza.`;  
}  

function makePizza(pizzaName) {  
  return `Pizza ${pizzaName} is being prepared, please wait...`;  
}  


function makeMessage(pizzaName, callback) {  
  return callback(pizzaName);  
} 

// Примеры вызовов  
console.log(makeMessage("Royal Grand", makePizza)); // "Pizza Royal Grand is being prepared, please wait..."  
console.log(makeMessage("Ultracheese", deliverPizza)); // "Delivering Ultracheese pizza."
