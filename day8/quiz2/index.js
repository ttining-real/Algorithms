// Star pattern 3

const star3 = (n) => {
  for (let i = 1; i <= n; i++) {
    const spaces = " ".repeat(n - i);
    const stars = "*".repeat(i);
    console.log(spaces + stars);
  }
};

star3(5);

/*
 *
 **
 ***
 ****
 *****
 */
