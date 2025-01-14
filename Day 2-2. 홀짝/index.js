// 홀짝

const isEven = (n) => {
  if (n % 2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};

isEven(0); // true
isEven(1); // false
isEven(2); // true
isEven(101); // false
isEven(-2); // true
