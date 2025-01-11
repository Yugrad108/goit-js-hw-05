//***********TODO -  Контекст виконання функції - this****************/

// Віктор біжить швидко, тому що Віктор намагається зловити поїзд.
// Віктор біжить швидко, тому що він намагається зловити поїзд.


// const user = {
//   username: "Victor",
//   showName() {
// 		// ❌ Віктор біжить швидко, тому що Віктор намагається зловити поїзд
//     console.log(user.username);
//   },
// };

// user.showName();


// const user = {
//   username: "Victor",
//   showName() {
// 		// ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
//     console.log(this.username);
//   },
// };

// user.showName();

//***********OPTIMIZE =TEST=*************/

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
  
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName); // Додаємо this
//   },
  
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName); // Додаємо this

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// // Тестування
// console.log(pizzaPalace.order("Smoked")); // "Order accepted, preparing «Smoked» pizza"
// console.log(pizzaPalace.order("Four meats")); // "Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order("Big Mike")); // "Sorry, there is no pizza named «Big Mike»"
// console.log(pizzaPalace.order("Viennese")); // "Sorry, there is no pizza named «Viennese»"

//***********TODO -  Глобальний контекст - this****************/

// У глобальному контексті, якщо функція виконується не в суворому режимі, this посилається на об'єкт window
// У суворому режимі значення this у глобальному контексті завжди буде undefined.

