# 🌻 Day 3

> 📅 2025.01.15

<br>

## 5. 각도기

### 📍 문제 설명

- 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다.
  - 예각 : 0 < `angle` < 90
  - 직각 : `angle` = 90
  - 둔각 : 90 < `angle` < 180
  - 평각 : `angle` = 180
- 각 `angle`이 매개변수로 주어질 때
  예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 `return`하도록 `solution` 함수를 완성해주세요.

<br>

### ⚠️ 제한 사항

> - 0 < `angle` ≤ 180
> - `angle`은 정수입니다.

<br>

### 👀 입출력 예

| `angle ` | `result` |
| -------- | -------- |
| 70       | 1        |
| 91       | 3        |
| 180      | 4        |

<br>

#### 입출력 예 설명

- **입출력 예 1️⃣**
  - `angle`이 70이므로 예각입니다. 따라서 1을 `return`합니다.
- **입출력 예 2️⃣**
  - `angle`이 91이므로 둔각입니다. 따라서 3을 `return`합니다.
- **입출력 예 3️⃣**
  - `angle`이 180이므로 평각입니다. 따라서 4를 `return`합니다.

<br>

```javascript
const solution = (angle) => {
  // do something
};

console.log(solution(70)); // 1
console.log(solution(90)); // 2
console.log(solution(91)); // 3
console.log(solution(180)); // 4
```
