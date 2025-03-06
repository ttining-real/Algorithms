# 🌻 Day 12

> 📅 2025.02.02

<br>

## 24. n부터 m까지의 합

### 📍 문제 설명

양수 `n`, `m`이 주어지면 `n`부터 `m`까지 자연수의 합을 반환하는 함수를 구현한다.

- `n` > `m`이면 0을 반환한다.
- `n` = `m`이면 `n` 또는 `m`을 반환한다.

<br>

- Example 1️⃣

  ```bash
  Input: n = 3, m = 8
  Output: 33
  Explanation: 3+4+5+6+7+8
  ```

- Example 2️⃣

  ```bash
  Input: n = 3, m = 3
  Output: 3
  ```

- Example 3️⃣

  ```bash
  Input: n = 3, m = 2
  Output: 0
  ```

<br>

```javascript
const sum = (n, m) => {
  // do something
};

console.log(sum(3, 8)); // 33
console.log(sum(3, 3)); // 3
console.log(sum(3, 2)); // 0
```
