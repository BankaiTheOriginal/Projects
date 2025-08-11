function myAtoi(x) {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let numX = [];
  let trimmed = x.trim();
  if (trimmed[0] == "-") {
    for (let num of trimmed) {
      if (numbers.includes(parseInt(num)) || trimmed[0] == "-") {
        numX.push(num);
      } else if (!numbers.includes(parseInt(num))) {
        break;
      }
    }
    if (x < -2147483648) {
      return -2147483648;
    }

    return Number(numX.join(""));
  } else {
    for (let num of trimmed) {
      if (numbers.includes(parseInt(num))) {
        numX.push(num);
      } else if (!numbers.includes(parseInt(num))) {
        break;
      }
      if (x > 2147483647) {
        return 2147483647;
      }
    }

    return Number(numX.join(""));
  }
}
console.log(myAtoi("-+12"));
