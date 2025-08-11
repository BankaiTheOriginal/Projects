function reverse(x) {
  var arrayNum = x.toString().split("");

  if (x > 2147483647 || x < -2147483648) {
    return 0;
  }
  if (arrayNum[0] == "-") {
    var negReversed = "-" + arrayNum.slice(1).reverse().join("");
    if (negReversed > 2147483647 || negReversed < -2147483648) {
      return 0;
    }
    return Number(negReversed);
  } else {
    var reversed = arrayNum.reverse().join("");
    if (reversed > 2147483647 || reversed < -2147483648) {
      return 0;
    }
    return Number(reversed);
  }
}

console.log(reverse(120));
