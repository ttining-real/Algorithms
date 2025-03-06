# 🌻 Day 29

> 📅 2025.02.26

<br>

## 65. 공백으로 구분하기 1

### 📍 문제 설명

- 단어가 공백 한 개로 구분되어 있는 문자열 str이 매개변수로 주어질 때,
  str에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

<br>

### ⚠️ 제한 사항

- `str`은 영소문자와 공백으로만 이루어져 있습니다.
- 1 ≤ `str`의 길이 ≤ 1,000
- `str`의 맨 앞과 맨 뒤에 글자는 공백이 아닙니다.

<br>

### 👀 입출력 예

| `str`         | `result`             |
| ------------- | -------------------- |
| "i love you"  | ["i", "love", "you"] |
| "programmers" | ["programmers"]      |

<br>

#### 입출력 예 설명

- **입출력 예 1️⃣**

  - 예제 1번의 str은 "i love you"로 공백 한 칸으로 나누어진 단어들은 앞에서부터 순서대로 "i", "love", "you" 이므로 ["i", "love", "you"]를 return 합니다.

- **입출력 예 2️⃣**

  - 예제 2번의 str은 "programmers"로 단어가 하나만 있습니다. 따라서 ["programmers"]를 return 합니다.

<br>

```javascript
const solution = (str) => {
  // do something
};

console.log(solution("i love you")); // ["i", "love", "you"]
console.log(solution("programmers")); // ["programmers"]
```
