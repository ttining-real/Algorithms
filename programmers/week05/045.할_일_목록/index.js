/* -------------------------------------------------------------------------- */
/*                                 할 일 목록                                  */
/* -------------------------------------------------------------------------- */

const solution = (todos, finished) => {
  return todos.filter((_, index) => !finished[index]);
};

console.log(
  solution(
    ["problemsolving", "practiceguitar", "swim", "studygraph"],
    [true, false, true, false]
  )
); // ["practiceguitar", "studygraph"]
