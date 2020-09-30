const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
  shoes: 24,
  shirts: 50,
};

// Write your code below:
const myExecutor = (resolve, reject) => {
  inventory.sunglasses > 0
    ? resolve("Sunglasses order processed.")
    : reject("That item is sold out.");
};
const orderSunglasses = () => {
  return new Promise(myExecutor);
};
var orderPromise = orderSunglasses();
console.log(orderPromise);
