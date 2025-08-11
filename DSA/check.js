/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var initialValue = 0;
  var combinedArray = nums1.concat(nums2).sort((a, b) => a - b);
  var sumArray = combinedArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  if (combinedArray.length % 2 === 0) {
    let medIndex = combinedArray.length / 2 - 1;

    let evenMedian = combinedArray[medIndex];
    return evenMedian;
  } else if (combinedArray.length % 1 === 0) {
    let medIndex = (combinedArray.length + 1) / 2 - 1;

    let oddMedian = combinedArray[medIndex];
    return oddMedian;
  }
};

console.log(findMedianSortedArrays([2, 2, 4, 4], [2, 2, 2, 4, 4]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([1, 3], [2, 7]));
