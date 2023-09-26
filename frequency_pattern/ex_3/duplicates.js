function areThereDuplicates() {
  let freq = {};
  for (let val in arguments) {
    freq[arguments[val]] = (freq[arguments[val]] || 0) + 1;
  }

  for (let keys in freq) {
    if (freq[keys] > 1) {
      return true;
    }
  }
  return false;
}

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 2, 3)); // false

console.log(areThereDuplicates(1, 2, 2)); // true

console.log(areThereDuplicates("a", "b", "c", "a")); // true
