function isSubsequence(str1, str2) {
  if (!str1.length || !str2.length) {
    return false;
  }

  str1 = str1.replace(/\s/g, "");
  str2 = str2.replace(/\s/g, "");

  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (str1.length === i) return true;

    j++;
  }

  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
