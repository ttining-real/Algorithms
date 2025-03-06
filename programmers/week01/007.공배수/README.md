# 🌻 Day 4

> 📅 2025.01.16

<br>

## 7. 공배수

### 📍 문제 설명

- 정수 `number`와 `n`, `m`이 주어집니다.
- `number`가 `n`의 배수이면서 `m`의 배수이면 1을 아니라면 0을 `return`하도록 `solution` 함수를 완성해주세요.

<br>

### ⚠️ 제한 사항

- 10 ≤ `number` ≤ 100
- 2 ≤ `n`, `m` < 10

<br>

### 👀 입출력 예

| `number` | `n` | `m` | `result` |
| -------- | --- | --- | -------- |
| 60       | 2   | 3   | 1        |
| 55       | 10  | 5   | 0        |

<br>

#### 입출력 예 설명

- **입출력 예 1️⃣**
  - 60은 2의 배수이면서 3의 배수이기 때문에 1을 `return`합니다.
- **입출력 예 2️⃣**
  - 55는 5의 배수이지만 10의 배수가 아니기 때문에 0을 `return`합니다.

<br>

```javascript
const solution = (num, n, m) => {
  // do something
};

console.log(solution(60, 2, 3)); // 1
console.log(solution(55, 10, 5)); // 0
```
