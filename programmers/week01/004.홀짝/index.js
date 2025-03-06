// 홀짝

// (1)
// const isEven = (n) => {
//   if (n % 2 === 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

// (2)
function isEven(n) {
  return console.log(n % 2 === 0 ? true : false);
}

isEven(0); // true
isEven(1); // false
isEven(2); // true
isEven(101); // false
isEven(-2); // true
