// Star pattern 4

const star4 = (n) => {
  for (let i = n; i >= 1; i--) {
    const spaces = " ".repeat(n - i);
    const stars = "*".repeat(i);
    console.log(spaces + stars);
  }
};

star4(5);
