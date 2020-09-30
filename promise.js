const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
  shoes: 24,
  shirts: 50,
};

// an arrow function that has two paras that resolves and rejects
const myExecutor = (resolve, reject) => {
  inventory.sunglasses > 0 // this is checking if sunglasses is more that zero
    ? resolve("Sunglasses order processed.")
    : reject("That item is sold out.");
};
const orderSunglasses = () => {
  return new Promise(myExecutor);
};
var orderPromise = orderSunglasses();
console.log(orderPromise);
