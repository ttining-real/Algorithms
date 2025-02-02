// Star pattern 1

const star1 = (n) => {
  let stars = "";
  for (let i = 1; i <= n; i++) {
    // console.log("*".repeat(i));

    stars += "*";
    console.log(stars);
  }
};

star1(5);
/*
 *
 **
 ***
 ****
 *****
 */
