function sameFrequency(num1, num2) {
  let freq1 = {};

  let myFunc = (num) => Number(num);

  let arr1 = Array.from(String(num1), myFunc);
  let arr2 = Array.from(String(num2), myFunc);

  for (let i = 0; i < arr1.length; i++) {
    let num = arr1[i];
    freq1[num] ? (freq1[num] += 1) : (freq1[num] = 1);
  }

  for (let i = 0; i < arr2.length; i++) {
    let num = arr2[i];

    if (!freq1[num]) {
      return false;
    } else {
      freq1[num]--;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true

console.log(sameFrequency(34, 14)); // false

console.log(sameFrequency(3589578, 5879385)); // true

console.log(sameFrequency(22, 222)); // false
