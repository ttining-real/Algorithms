# 🌻 Day 19

> 📅 2025.02.12

<br>

## 45. 할 일 목록

### 📍 문제 설명

- 오늘 해야 할 일이 담긴 문자열 배열 `todos`와 각각의 일을 지금 마쳤는지를 나타내는 `boolean` 배열 `finished`가 매개변수로 주어질 때,
  `todos`에서 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 `return` 하는 `solution` 함수를 작성해 주세요.

<br>

### ⚠️ 제한 사항

- 1 ≤ `todos`의 길이 1 ≤ 100
- 2 ≤ `todos`의 원소의 길이 ≤ 20
  - `todos`의 원소는 영소문자로만 이루어져 있습니다.
  - `todos`의 원소는 모두 서로 다릅니다.
- `finished[i]`는 `true` 또는 `false`이고 `true`는 `todos[i]`를 마쳤음을, `false`는 아직 마치지 못했음을 나타냅니다.
- 아직 마치지 못한 일이 적어도 하나 있습니다.

<br>

### 👀 입출력 예

| `todos`                                                    | `finished`                 | `result`                         |
| ---------------------------------------------------------- | -------------------------- | -------------------------------- |
| ["problemsolving", "practiceguitar", "swim", "studygraph"] | [true, false, true, false] | ["practiceguitar", "studygraph"] |

<br>

#### 입출력 예 설명

- **입출력 예 1️⃣**

  - 예제 `1번의 todos 중에서` "problemsolving"과 "swim"은 마쳤고,
    "practiceguitar"와 "studygraph"는 아직 마치지 못했으므로 `todos`에서 나온 순서대로 담은 문자열 배열 ["practiceguitar", "studygraph"]를 `return` 합니다.

```javascript
const solution = (todos, finished) => {
  // do something
};

console.log(
  solution(
    ["problemsolving", "practiceguitar", "swim", "studygraph"],
    [true, false, true, false]
  )
); // ["practiceguitar", "studygraph"]
```
