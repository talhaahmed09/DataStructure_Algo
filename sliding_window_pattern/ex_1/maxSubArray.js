function maxSubarraySum(arr, num) {
  if (!arr.length || num > arr.length) {
    return null;
  }
  let temp = 0;
  let max = 0;

  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  temp = max;

  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    max = Math.max(max, temp);
  }
  console.log(max);
  return max;
}

maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null
