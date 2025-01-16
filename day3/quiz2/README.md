# 🌻 Day 1

> 📅 2025.01.15

<br>

## Quiz 2. `n`의 배수

### 📍 문제 설명

- 정수 `num`과 n이 매개 변수로 주어질 때,
  `num`이 n의 배수이면 1을 `return` n의 배수가 아니라면 0을 `return`하도록 solution 함수를 완성해주세요.

<br>

### ⚠️ 제한 사항

> - 2 ≤ `num` ≤ 100
> - 2 ≤ `n` ≤ 9

<br>

### 👀 입출력 예

| `num ` | `n` | `result` |
| ------ | --- | -------- |
| 98     | 2   | 1        |
| 34     | 3   | 0        |

<br>

#### 입출력 예 설명

- **입출력 예 1️⃣**
  - 98은 2의 배수이므로 1을 `return`합니다.
- **입출력 예 2️⃣**
  - 32는 3의 배수가 아니므로 0을 `return`합니다.

<br>

```javascript
const solution = (num, n) => {
  // do something
};

console.log(solution(98, 2)); // 1
console.log(solution(34, 3)); // 0
```
