/* -------------------------------------------------------------------------- */
/*                               문자열 겹쳐쓰기                               */
/* -------------------------------------------------------------------------- */

const solution = (str, overwriteStr, s) => {
  let strSlice1 = str.slice(0, s);
  let strSlice2 = str.slice(s + overwriteStr.length);
  return strSlice1 + overwriteStr + strSlice2;
};

console.log(solution("He11oWor1d", "lloWorl", 2)); // 'HelloWorld'
console.log(solution("Program29b8UYP", "merS123", 7)); // 'ProgrammerS123'
