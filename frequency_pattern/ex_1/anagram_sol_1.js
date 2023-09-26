function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let first = {};
  let second = {};

  for (let i = 0; i < str1.length; i++) {
    first[str1[i]] = (first[str1[i]] || 0) + 1;
    second[str2[i]] = (second[str2[i]] || 0) + 1;
  }

  console.log(first, second);

  for (let key in first) {
    if (!(key in second)) {
      return false;
    }
    if (second[key] !== first[key]) {
      return false;
    }
  }
  return true;
}

validAnagram("", ""); // true
validAnagram("car", "rat"); // false
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false) // false
validAnagram("awesome", "awesom"); // false
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
