# 🌻 Day 26

> 📅 2025.02.21

<br>

## 59. 글자 지우기

### 📍 문제 설명

- 문자열 `str`과 정수 배열 `indices`가 주어질 때, `str`에서 `indices`의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 `return` 하는 `solution` 함수를 작성해 주세요.

<br>

### ⚠️ 제한 사항

- 1 ≤ `indices`의 길이 < `str`의 길이 ≤ 100
- `my_string`은 영소문자로만 이루어져 있습니다
- 0 ≤ `indices`의 원소 < `str`의 길이
- `indices`의 원소는 모두 서로 다릅니다.

<br>

### 👀 입출력 예

| `str`                 | `indices`                    | `result`      |
| --------------------- | ---------------------------- | ------------- |
| "apporoograpemmemprs" | [1, 16, 6, 15, 0, 10, 11, 3] | "programmers" |

<br>

#### 입출력 예 설명

- **입출력 예 1️⃣**

  - 예제 1번의 `str`의 인덱스가 잘 보이도록 표를 만들면 다음과 같습니다.

    | `index` | `str` |
    | ------- | ----- |
    | 0       | a     |
    | 1       | p     |
    | 2       | p     |
    | 3       | o     |
    | 4       | r     |
    | 5       | o     |
    | 6       | o     |
    | 7       | g     |
    | 8       | r     |
    | 9       | a     |
    | 10      | p     |
    | 11      | e     |
    | 12      | m     |
    | 13      | m     |
    | 14      | e     |
    | 15      | m     |
    | 16      | p     |
    | 17      | r     |
    | 18      | s     |

    - `indices`에 있는 인덱스의 글자들을 지우고 이어붙이면 "programmers"가 되므로 이를 `return` 합니다.

<br>

```javascript
const solution = (str, indices) => {
  // do something
};

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3])); // 'programmers'
```
