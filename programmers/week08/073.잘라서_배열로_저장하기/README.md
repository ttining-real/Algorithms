# 🌻 Day 33

> 📅 2025.03.05

<br>

## 73. 잘라서 배열로 저장하기

### 📍 문제 설명

- 문자열 `str`과 `n`이 매개변수로 주어질 때,
  `str`을 길이 `n`씩 잘라서 저장한 배열을 `return` 하도록 `solution` 함수를 완성해주세요.

<br>

### ⚠️ 제한 사항

- 1 ≤ `str`의 길이 ≤ 100
- 1 ≤ `n` ≤ `str`의 길이
- `str`은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.

<br>

### 👀 입출력 예

| `str`              | `n` | `result`                     |
| ------------------ | --- | ---------------------------- |
| "abc1Addfggg4556b" | 6   | ["abc1Ad", "dfggg4", "556b"] |
| "abcdef123"        | 3   | ["abc", "def", "123"]        |

<br>

#### 입출력 예 설명

- **입출력 예 1️⃣**

  - "abc1Addfggg4556b" 를 길이 6씩 잘라 배열에 저장한 ["abc1Ad", "dfggg4", "556b"]를 `return` 해야 합니다.

- **입출력 예 2️⃣**

  - "abcdef123" 를 길이 3씩 잘라 배열에 저장한 ["abc", "def", "123"]를 `return` 해야 합니다.

<br>

```javascript
const solution = (str, n) => {
  // do something
};

console.log(solution("abc1Addfggg4556b", 6)); // ["abc1Ad", "dfggg4", "556b"]
console.log(solution("abcdef123", 3)); // ["abc", "def", "123"]
```
