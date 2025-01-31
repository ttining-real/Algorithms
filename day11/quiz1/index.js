/* -------------------------------------------------------------------------- */
/*                                  FizzBuzz                                  */
/* -------------------------------------------------------------------------- */

const fizzBuzz = (n) => {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    let str = "";
    if (i % 3 === 0) {
      str += "Fizz";
    } else if (i % 5 === 0) {
      str += "Buzz";
    }
    arr.push(str || `${i}`);
  }

  return arr;
};

console.log(fizzBuzz(3)); // ['1', '2', 'Fizz']
console.log(fizzBuzz(5)); // ['1', '2', 'Fizz', '4', 'Buzz']
console.log(fizzBuzz(20));
/* 
[
  '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', 
  '11', 'Fizz', '13', '14', 'FizzBuzz', '16', '17', 'Fizz', '19', 'Buzz'
]
*/
