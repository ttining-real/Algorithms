# 🌻 Day 33

> 📅 2025.03.05

<br>

## 74. 부분 문자열인지 확인하기

### 📍 문제 설명

- 부분 문자열이란 문자열에서 연속된 일부분에 해당하는 문자열을 의미합니다.
  - 예를 들어, 문자열 "ana", "ban", "anana", "banana", "n"는 모두 문자열 "banana"의 부분 문자열이지만,
    "aaa", "bnana", "wxyz"는 모두 "banana"의 부분 문자열이 아닙니다.
- 문자열 `str`과 `target`이 매개변수로 주어질 때,
  `target`이 문자열 `str`의 부분 문자열이라면 1을, 아니라면 0을 `return` 하는 `solution` 함수를 작성해 주세요.

<br>

### ⚠️ 제한 사항

- 1 ≤ `str`의 길이 ≤ 100
- `str`은 영소문자로만 이루어져 있습니다.
- 1 ≤ `target`의 길이 ≤ 100
- `target`은 영소문자로만 이루어져 있습니다.

<br>

### 👀 입출력 예

| `str`    | `target` | `result` |
| -------- | -------- | -------- |
| "banana" | "ana"    | 1        |
| "banana" | "wxyz"   | 0        |

<br>

#### 입출력 예 설명

- **입출력 예 1️⃣**

  - 문제 설명과 같습니다.

- **입출력 예 2️⃣**

  - 문제 설명과 같습니다.

<br>

```javascript
const solution = (str, target) => {
  // do something
};

console.log(solution("banana", "ana")); // 1
console.log(solution("banana", "wxyz")); // 0
```
