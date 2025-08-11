function intReverse(number) {
  const stringNum = number.toString().split("").reverse().join("");

  console.log(parseInt(stringNum));
}

intReverse(5678);
