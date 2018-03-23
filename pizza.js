const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;
let orderName = "Name of pizza";
let thePizzaIsOnTheMenu = false;
let orderQuantity = 0;
let orderTotal = 0;
let orderTime = 0;


//FUNCTIONS

checkOrderName = (orderName) => {
   if (orderName === vegetarian || hawaiian || pepperoni) {
       thePizzaIsOnTheMenu = true;
       return thePizzaIsOnTheMenu;
   }
}

checkOrderName = (orderName) => {
   return orderName === vegetarian || orderName === hawaiian || orderName === pepperoni
};

totalCost = (orderQuantity) => {
   return pizzaPrice * orderQuantity
};

cookingTime = (orderQuantity) => {
   if (orderQuantity === 1 || 2) {return 10}
   if (orderQuantity === 3 || 4 || 5) {return 10}
   if (orderQuantity > 5) {return 10}
};


//MAIN

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);

while (thePizzaIsOnTheMenu === false) {
   orderName = prompt(`Which pizza would you like to order? We have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);
   debugger;

   if (checkOrderName(orderName) === false) {
       alert("I didn't understand; please enter the name of the pizza again. Make sure to write the whole pizza name exactly as shown!")
   }
   else if (checkOrderName(orderName) === true) {
       thePizzaIsOnTheMenu = true
   }
}

orderQuantity = prompt(`How many of ${orderName} do you want? Type a number (no text).`);
orderTotal = totalCost(orderQuantity);
orderTime = cookingTime(orderQuantity);

alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} SEK. The pizzas will take ${orderTime} minutes.`);
