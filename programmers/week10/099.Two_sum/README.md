# 99. Two sum

> 🌻 Day 46
>
> 📅 2025.03.21

<br>

## 📍 문제 설명

- 정수 배열 `nums`와 정수 `target`이 주어지면 `nums`의 두 요소의 합이 `target`과 같은 두 요소의 인덱스를 반환한다.
- 각 입력에는 정확히 하나의 해만 있으며 같은 요소를 두 번 사용할 수 없다.
- 어떤 순서로든 답을 반환할 수 있다.
  - 시간 복잡도 제한 : `O(n)`

<br>

## ⚠️ 제한 사항

- `2 <= nums.length <= $10^4$`
- `$-10^9$ <= nums[i] <= $10^9$`
- `$-10^9$ <= target <= $10^9$`
- 유효한 답변은 단 하나뿐이다.

<br>

## 👀 입출력 예

- 시간 복잡도가 `$O(n^2)$`보다 작은 알고리즘을 생각해내기

### 입출력 예 1️⃣

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

<br>

### 입출력 예 2️⃣

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

<br>

### 입출력 예 3️⃣

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

<br>
<br>

```javascript
const twoSum = (nums, target) => {
  // do something
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
```
