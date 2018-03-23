const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"
const pizzaPrice = 80



//Put your Javscript code here:
alert( `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);
const orderName = prompt("Enter the name of the pizza you want to order today.")

if(orderName === "vegetarian" || orderName === "hawaiian" || orderName === "pepperoni" ){
const orderQuantity = prompt(`How many of ${orderName} do you want?`);
const orderTotal = orderQuantity * pizzaPrice;
let cookingTime = 0
if(orderQuantity < 3) {
  cookingTime = "10 min"
  alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr and it will take ${cookingTime} minutes`)
} else if(orderQuantity < 6) {
  cookingTime ="15 min"
  alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr and it will take ${cookingTime} minutes`)
} else {
  cookingTime ="20 min"
  alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr and it will take ${cookingTime} minutes`)
}
}
else {
    alert("The pizza is not on our menu!")
}
