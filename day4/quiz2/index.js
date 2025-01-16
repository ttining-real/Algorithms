// swap

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];

  return arr;
};

const arr = [1, 2, 3, 4];
console.log(swap(arr, 1, 2)); // [1, 3, 2, 4]
