# 94. 영어가 싫어요

> 🌻 Day 43
>
> 📅 2025.03.18

<br>

## 📍 문제 설명

- 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다.
- 문자열 `nums`가 매개변수로 주어질 때, `nums`를 정수로 바꿔 `return` 하도록 `solution` 함수를 완성해 주세요.

<br>

## ⚠️ 제한 사항

- `nums`는 소문자로만 구성되어 있습니다.
- `nums`는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
- 1 ≤ `nums`의 길이 ≤ 50
- "zero"는 `nums`의 맨 앞에 올 수 없습니다.

<br>

## 👀 입출력 예

| `nums`                                 | `result`  |
| -------------------------------------- | --------- |
| "onetwothreefourfivesixseveneightnine" | 123456789 |
| "onefourzerosixseven"                  | 14067     |

<br>

### 🗣️ 입출력 예 설명

#### 입출력 예 1️⃣

- "onetwothreefourfivesixseveneightnine"를 숫자로 바꾼 123456789를 `return`합니다.

<br>

#### 입출력 예 2️⃣

- "onefourzerosixseven"를 숫자로 바꾼 14067를 `return`합니다.

<br>
<br>

```javascript
const solution = (nums) => {
  // do something
};

console.log(solution("onetwothreefourfivesixseveneightnine")); // 123456789
console.log(solution("onefourzerosixseven")); // 14067
```
