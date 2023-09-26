function factorial(num) {
  if (num === 1 || num === 0) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(3));

function isPalindrome(val) {
  const helper = (str) => {
    if (str.length <= 1) return str;
    console.log(str.slice(1), str[0]);
    return helper(str.slice(1)) + str[0];
  };
  const revseredString = helper(val);
  return val === revseredString;
}
console.log(isPalindrome("tacocat"));
