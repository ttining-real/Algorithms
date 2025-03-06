# 🌻 Day 26

> 📅 2025.02.21

<br>

## 60. 문자열 뒤집기

### 📍 문제 설명

- 문자열 `str`과 정수 `s`, `e`가 매개변수로 주어질 때, `str`에서 인덱스 `s`부터 인덱스 `e`까지를 뒤집은 문자열을 `return` 하는 `solution` 함수를 작성해 주세요.

<br>

### ⚠️ 제한 사항

- `str`은 숫자와 알파벳으로만 이루어져 있습니다.
- 1 ≤ `str`의 길이 ≤ 1,000
- 0 ≤ `s` ≤ `e` < `str`의 길이

<br>

### 👀 입출력 예

| `str`              | `s` | `e` | `result`          |
| ------------------ | --- | --- | ----------------- |
| "Progra 21Sremm 3" | 6   | 12  | "ProgrammerS123"  |
| "Stanley1yelnatS"  | 4   | 10  | "Stanley1yelnatS" |

<br>

#### 입출력 예 설명

- **입출력 예 1️⃣**

  - 예제 1번의 `str`에서 인덱스 6부터 인덱스 12까지를 뒤집은 문자열은 "ProgrammerS123"이므로 "ProgrammerS123"를 `return` 합니다.

- **입출력 예 2️⃣**

  - 예제 2번의 `str`에서 인덱스 4부터 인덱스 10까지를 뒤집으면 원래 문자열과 같은 "Stanley1yelnatS"이므로 "Stanley1yelnatS"를 `return` 합니다.

<br>

```javascript
const solution = (str, s, e) => {
  // do something
};

console.log(solution("Progra21Sremm3", 6, 12)); // 'ProgrammerS123'
console.log(solution("Stanley1yelnatS", 4, 10)); // 'Stanley1yelnatS'
```
