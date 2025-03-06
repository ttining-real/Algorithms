/* -------------------------------------------------------------------------- */
/*                      부분 문자열 이어 붙여 문자열 만들기                      */
/* -------------------------------------------------------------------------- */

const solution = (strings, parts) =>
  strings
    .map((item, index) => item.slice(parts[index][0], parts[index][1] + 1))
    .join("");

console.log(
  solution(
    ["progressive", "hamburger", "hammer", "ahocorasick"],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
); // "programmers"
