// 구구단

const printMultiplicationTable = () => {
  let arr = [2, 3, 4, 5, 6, 7, 8, 9];

  arr.forEach((num) => {
    console.log(`=== ${num}단 ===`);

    for (let i = 1; i <= 9; i++) {
      console.log(`${num} * ${i} = ${num * i}`);
    }
  });
};

printMultiplicationTable();
