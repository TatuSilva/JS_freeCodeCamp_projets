function palindrome(str) {
  let result = false;
  let strLow = str.toLowerCase()
  let onlyLetters = strLow.match(/[a-z0-9]/g)
  let toReverse = strLow.match(/[a-z0-9]/g)
  let reverse = toReverse.reverse()
     return onlyLetters.join("")===reverse.join("")?result = true:result = false

}

palindrome("eye");
