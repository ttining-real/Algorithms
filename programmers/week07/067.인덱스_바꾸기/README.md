# 🌻 Day 30

> 📅 2025.02.27

<br>

## 67. 인덱스 바꾸기

### 📍 문제 설명

- 문자열 str과 정수 num1, num2가 매개변수로 주어질 때,
  str에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

<br>

### ⚠️ 제한 사항

- 1 < `str`의 길이 < 100
- 0 ≤ `num1`, `num2` < `str`의 길이
- `str`은 소문자로 이루어져 있습니다.
- `num1` ≠ `num2`

<br>

### 👀 입출력 예

| `str`        | `num1` | `num2` | `result`     |
| ------------ | ------ | ------ | ------------ |
| "hello"      | 1      | 2      | "hlelo"      |
| "I love you" | 3      | 6      | "I l veoyou" |

<br>

#### 입출력 예 설명

- **입출력 예 1️⃣**

  - "hello"의 1번째 인덱스인 "e"와 2번째 인덱스인 "l"을 바꾸면 "hlelo"입니다.

- **입출력 예 2️⃣**

  - "I love you"의 3번째 인덱스 "o"와 " "(공백)을 바꾸면 "I l veoyou"입니다.

<br>

```javascript
const solution = (str, num1, num2) => {
  // do something
};

console.log(solution("hello", 1, 2)); // 'hlelo'
console.log(solution("I love you", 3, 6)); // 'I l veoyou'
```
