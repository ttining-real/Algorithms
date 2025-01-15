# ✨ Algorithms

> **코딩 테스트를 위한 알고리즘 공부**  
> 매일매일 알고리즘 문제를 풀며 실력을 다집니다! 🔥

<br>

## 📅 Day 1-1. 나머지 구하기

### 📍 문제 설명

- 정수 `num1`, `num2`가 매개변수로 주어질 때,
  `num1`을 `num2`로 나눈 나머지를 `return` 하도록
  `solution` 함수를 완성해주세요.

<br>

### ⚠️ 제한 사항

```javascript
0 < num1 <= 100;
0 < num2 <= 100;
```

<br>

### 👀 입출력 예

| `num1 ` | `num2` | `result` |
| ------- | ------ | -------- |
| 3       | 2      | 1        |
| 10      | 5      | 0        |

<br>

#### 입출력 예 설명

- **입출력 예 1️⃣**
  - `num1`이 3, `num2`가 2이므로 3을 2로 나눈 나머지 1을 return 합니다.
- **입출력 예 2️⃣**
  - `num1`이 10, `num2`가 5이므로 10을 5로 나눈 나머지 0을 return 합니다.

<br>

```javascript
function solution(num1, num2) {
  // do something
}

console.log(solution(3, 2)); // 1
console.log(solution(10, 5)); // 0
```
