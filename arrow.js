// // creating a arrow function

// const arrowFunction = (param1, param2) => {
//     return param1 + param2
// }
// const arrow = arrowFunction(1, 3);
//  console.log(arrow);

// function myfunction(param1, param2) {
//     console.log(param1 * param2);
//   }
//   myfunction(2, 5); // should return 10

// -----------------------------------------------------------------------------------------------
const array = {
  shoes: 1223,
  socks: 123,
  apples: 232,
};

const myExecute = (resolve, rejected) => {
  if (array.shoes > 0) {
    resolve("we have shoes for sale");
  } else {
    rejected("we are sold out");
  }
  const buyNewShoes = () => {
    return new promise(myExecute);
  };
  var order = buyNewShoes();
  console.log(order);
};
