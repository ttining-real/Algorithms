/* -------------------------------------------------------------------------- */
/*                                    flat                                    */
/* -------------------------------------------------------------------------- */

const flat = (arr) => {
  const result = [];

  const flatArr = (subArr) => {
    for (const item of subArr) {
      if (Array.isArray(item)) {
        flatArr(item);
      } else {
        result.push(item);
      }
    }
  };

  flatArr(arr);
  return result;
};

console.log(flat([1, 2, 3, [4, 5, [6, 7], 8], 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flat([1, 2, 3])); // [1, 2, 3]
console.log(flat([])); // []
