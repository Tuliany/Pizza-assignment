const getCar = (callback) => {
  //wait
callback("car");
}

const car = getCar((message ) = {
  //done
  console.log("I'm done" + message);
});
