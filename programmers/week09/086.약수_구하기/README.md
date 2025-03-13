# 86. 약수 구하기

> 🌻 Day 39
>
> 📅 2025.03.13

<br>

## 📍 문제 설명

- 정수 `n`이 매개변수로 주어질 때, `n`의 약수를 오름차순으로 담은 배열을 `return`하도록 `solution` 함수를 완성해주세요.

<br>

## ⚠️ 제한 사항

- 1 ≤ `n` ≤ 10,000

<br>

## 👀 입출력 예

| `b` | `result`                   |
| --- | -------------------------- |
| 24  | [1, 2, 3, 4, 6, 8, 12, 24] |
| 29  | [1, 29]                    |

<br>

### 🗣️ 입출력 예 설명

#### 입출력 예 1️⃣

- 24의 약수를 오름차순으로 담은 배열 [1, 2, 3, 4, 6, 8, 12, 24]를 `return`합니다.

<br>

#### 입출력 예 2️⃣

- 29의 약수를 오름차순으로 담은 배열 [1, 29]를 `return`합니다.

<br>

```javascript
const findDivisors = (n) => {
  // do something
};

console.log(findDivisors(1)); // [1]
console.log(findDivisors(15)); // [1, 3, 5, 15]
console.log(findDivisors(16)); // [1, 2, 4, 8, 16]
console.log(findDivisors(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
console.log(findDivisors(29)); // [1, 29]
```
