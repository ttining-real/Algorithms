# 92. 한 번만 등장한 문자

> 🌻 Day 42
>
> 📅 2025.03.17

<br>

## 📍 문제 설명

- 문자열 `str`이 매개변수로 주어집니다.
- `str`에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 `return` 하도록 `solution` 함수를 완성해보세요.
- 한 번만 등장하는 문자가 없을 경우 빈 문자열을 `return` 합니다.

<br>

## ⚠️ 제한 사항

- 0 < `str`의 길이 < 1,000
- `str` 은 소문자로만 이루어져 있습니다.

<br>

## 👀 입출력 예

| `str`       | `result` |
| ----------- | -------- |
| "abcabcadc" | "d"      |
| "abdc"      | "abcd"   |
| "hello"     | "eho"    |

<br>

### 🗣️ 입출력 예 설명

#### 입출력 예 1️⃣

- "abcabcadc"에서 하나만 등장하는 문자는 "d"입니다.

<br>

#### 입출력 예 2️⃣

- "abdc"에서 모든 문자가 한 번씩 등장하므로 사전 순으로 정렬한 "abcd"를 `return` 합니다.

<br>

#### 입출력 예 3️⃣

- "hello"에서 한 번씩 등장한 문자는 "heo"이고 이를 사전 순으로 정렬한 "eho"를 `return` 합니다.

<br>

```javascript
const solution = (str) => {
  // do something
};

console.log(solution("abcabcadc")); // "d"
console.log(solution("abdc")); // "abcd"
console.log(solution("hello")); // "eho"
```
