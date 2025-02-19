# 🌻 Day 24

> 📅 2025.02.19

<br>

## 55. 문자열 곱하기

### 📍 문제 설명

- 문자열 `str`과 정수 `k`가 주어질 때, `str`을 `k`번 반복한 문자열을 `return` 하는 `solution` 함수를 작성해 주세요.

<br>

### ⚠️ 제한 사항

- 1 ≤ `str`의 길이 ≤ 100
- `str`은 영소문자로만 이루어져 있습니다.
- 1 ≤ `k` ≤ 100

<br>

### 👀 입출력 예

| `str`    | `k` | `result`                                   |
| -------- | --- | ------------------------------------------ |
| "string" | 3   | "stringstringstring"                       |
| "love"   | 10  | "lovelovelovelovelovelovelovelovelovelove" |

<br>

#### 입출력 예 설명

- **입출력 예 1️⃣**

  - 예제 1번의 `str`은 "string"이고 이를 3번 반복한 문자열은 "stringstringstring"이므로 이를 `return` 합니다.

- **입출력 예 2️⃣**

  - 예제 2번의 `str`은 "love"이고 이를 10번 반복한 문자열은 "lovelovelovelovelovelovelovelovelovelove"이므로 이를 `return` 합니다.

<br>

```javascript
const solution = (str, k) => {
  // do something
};

console.log(solution("string", 3)); // 'stringstringstring'
console.log(solution("love", 10)); // 'lovelovelovelovelovelovelovelovelovelove'
```
