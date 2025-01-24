// Star pattern 6

const star6 = (n) => {
  for (let i = 0; i < n; i++) {
    const spaces = " ".repeat(i);
    const stars = "*".repeat(2 * (n - i) - 1);

    console.log(spaces + stars);
  }
};

star6(5);
