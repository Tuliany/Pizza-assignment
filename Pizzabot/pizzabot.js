const vegetarian = "Vegetarian Pizza"
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










