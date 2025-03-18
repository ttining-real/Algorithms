/* -------------------------------------------------------------------------- */
/*                                영어가 싫어요                                */
/* -------------------------------------------------------------------------- */

const solution = (nums) => {
  const numberMap = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  let result = "";
  let temp = "";

  for (const char of nums) {
    temp += char;
    if (numberMap[temp]) {
      result += numberMap[temp];
      temp = "";
    }
  }

  return Number(result);
};

console.log(solution("onetwothreefourfivesixseveneightnine")); // 123456789
console.log(solution("onefourzerosixseven")); // 14067
