# 98. Best Time to Buy and Sell Stock

> 🌻 Day 45
>
> 📅 2025.03.20

<br>

## 📍 문제 설명

- `i`번째 날의 주식 가격을 나타내는 `prices` 배열이 주어진다.
- 수익을 극대화할 수 있는 날 주식을 사고 팔아서 얻을 수 있는 최대 수익을 반환한다.
- 수익을 얻을 수 없으면 0을 반환한다.

<br>

## 👀 입출력 예

### 입출력 예 1️⃣

`prices`가 [7, 1, 5, 3, 6, 4]인 경우, 주식 가격이 1인 2일(i = 1)에 사서 주식 가격이 6인 5일(i = 4)에 팔면 최대 수익 5를 얻을 수 있다.

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

<br>

### 입출력 예 2️⃣

`prices`가 [7, 6, 4, 3, 1]인 경우, 수익을 얻을 수 없으므로 0을 반환한다.

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

<br>
<br>

```javascript
const maxProfit = (prices) => {
  // do something
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
```
