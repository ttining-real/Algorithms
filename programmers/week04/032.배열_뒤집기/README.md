# 🌻 Day 14

> 📅 2025.02.04

<br>

## 32. 배열 뒤집기

### 📍 문제 설명

- 정수가 들어 있는 배열 `nums`가 매개변수로 주어집니다.
- `nums`의 원소의 순서를 거꾸로 뒤집은 배열을 `return`하도록 `solution` 함수를 완성해주세요.

<br>

### ⚠️ 제한 사항

- 1 ≤ `nums`의 길이 ≤ 1,000
- 0 ≤ `nums`의 원소 ≤ 1,000

<br>

### 👀 입출력 예

| `nums`                | `result`              |
| --------------------- | --------------------- |
| [1, 2, 3, 4, 5]       | [5, 4, 3, 2, 1]       |
| [1, 1, 1, 1, 1, 2]    | [2, 1, 1, 1, 1, 1]    |
| [1, 0, 1, 1, 1, 3, 5] | [5, 3, 1, 1, 1, 0, 1] |

<br>

#### 입출력 예 설명

- **입출력 예 1️⃣**

  - `num_list`가 [1, 2, 3, 4, 5]이므로 순서를 거꾸로 뒤집은 배열 [5, 4, 3, 2, 1]을 `return`합니다.

- **입출력 예 2️⃣**

  - `num_list`가 [1, 1, 1, 1, 1, 2]이므로 순서를 거꾸로 뒤집은 배열 [2, 1, 1, 1, 1, 1]을 `return`합니다.

- **입출력 예 3️⃣**
  - `num_list`가 [1, 0, 1, 1, 1, 3, 5]이므로 순서를 거꾸로 뒤집은 배열 [5, 3, 1, 1, 1, 0, 1]을 `return`합니다.

<br>

```javascript
const solution = (arr) => {
  // do something
};

console.log(solution([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(solution([1, 1, 1, 1, 1, 2])); // [2, 1, 1, 1, 1, 1]
console.log(solution([1, 0, 1, 1, 1, 3, 5])); // [5, 3, 1, 1, 1, 0, 1]
```
