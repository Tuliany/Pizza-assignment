const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

let pizzaChoise = '';
let pizzaNum;


function checkOrderName(theOrderName) {
  return theOrderName == vegetarian || theOrderName == hawaiian || theOrderName == pepperoni;
}

function totalCost(theOrderQuantity) {
  return theOrderQuantity * pizzaPrice;
}

function calculateCookingTime(theOrderQuantity) {
  if (theOrderQuantity > 0 && theOrderQuantity <= 2) {
    return 10;
  } else if (theOrderQuantity > 2 && theOrderQuantity <= 5) {
    return 15;
  } else if (theOrderQuantity > 5) {
    return 20;
  }
}

function doOrder() {
  pizzaChoise = document.querySelector('#pizza').value;
  pizzaNum = document.querySelector('#numPizzas').value;
  const cost = totalCost(pizzaNum);
  const cookingTime = calculateCookingTime(pizzaNum);
  console.log(cost, cookingTime);

  const resultElement = document.querySelector('#orderResult');
  resultElement.textContent = ` Great, I'll get started on your ${pizzaChoise} right away, it will cost ${cost} kr and it will take ${cookingTime} minutes`;
}

document.querySelector('#orderButton').addEventListener('click', doOrder);

/* const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
const pizzaPrice = 80;


let isOrdering = true;
let orderName;
let orderQuantity;
let cookingTime = [10, 20, 30];


alert(`"Hey! Happy to serve your pizza.`)
alert(`On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);


while(isOrdering){
  orderName = prompt(`Enter the name of the pizza you want to order today.`);
  if (orderName == 'hawaiian' || orderName == 'vegetarian' || orderName == 'pepperoni'){
  orderQuantity = prompt(`How many of ${orderName} do you want?`);
  isOrdering = false;
  } else {
  alert("The pizza is not on our menu!")
  }
}


let orderTotal = parseInt(orderQuantity) * pizzaPrice;
if(orderQuantity <=2){
alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr and it will take ${cookingTime[0]} minutes`);
} else if (orderQuantity > 2 && orderQuantity <= 5) {
alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr and it will take ${cookingTime[1]} minutes`);
} else if (orderQuantity > 5){ 
alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr and it will take ${cookingTime[2]} minutes`);
}







 */


