function twoSum(array, target) {
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        console.log([i, j]);
      }
    }
  }
}

twoSum([11, 15, 2, 7], 9);
