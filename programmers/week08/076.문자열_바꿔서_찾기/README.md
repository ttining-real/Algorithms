# 🌻 Day 34

> 📅 2025.03.06

<br>

## 76. 문자열 바꿔서 찾기

### 📍 문제 설명

- 문자 "A"와 "B"로 이루어진 문자열 `str`과 `part`가 주어집니다.
- `str`의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 `part`이 있으면 1을 아니면 0을 `return` 하는 `solution` 함수를 완성하세요.

<br>

### ⚠️ 제한 사항

- 1 ≤ `str`의 길이 ≤ 100
- 1 ≤ `part`의 길이 ≤ 10
  - `str`과 `part`는 문자 "A"와 "B"로만 이루어진 문자열입니다.

<br>

### 👀 입출력 예

| `str`   | `part` | `result` |
| ------- | ------ | -------- |
| "ABBAA" | "AABB" | 1        |
| "ABAB"  | "ABAB" | 0        |

<br>

#### 입출력 예 설명

- **입출력 예 1️⃣**

  - "ABBAA"에서 "A"와 "B"를 서로 바꾸면 "BAABB"입니다. 여기에는 부분문자열 "AABB"가 있기 때문에 1을 return 합니다.

- **입출력 예 2️⃣**

  - "ABAB"에서 "A"와 "B"를 서로 바꾸면 "BABA"입니다. 여기에는 부분문자열 "BABA"가 없기 때문에 0을 return 합니다.

<br>

```javascript
const solution = (str, part) => {
  // do something
};

console.log(solution("ABBAA", "AABB")); // 1
console.log(solution("ABAB", "ABAB")); // 0
```
