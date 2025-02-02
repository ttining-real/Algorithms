// Star pattern 7

const star7 = (n) => {
  for (let i = 1; i <= n; i++) {
    const stars = "*".repeat(n);
    console.log(stars);
  }
};

star7(5);
