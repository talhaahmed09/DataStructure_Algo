/*
Psuedo Code

Create an empty array, take a lookat the smallest values in each input
array.

While there are still values we haven't looked at:
    * If the value of the first array is smaller than the value in the second array, push the values of first array in result and move on to the next in first array.
    * If the value of the first array is larger than the value in the second array, push the values of second array in result and move on to the next in second array.
    * At the end, push all values that are remaining
*/

// Merges two already sorted arrays
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
merge([100, 200], [1, 2, 3, 5, 6]);
