/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  return solveByTwoPointers(s)
}

/**
 * Strategy: One pointer at start, one at end. Skip all characters except letters and numbers. If the characters both pointers point at are unequal then it is not a palindrome. Continue until you meet in the middle.
 * Time: O(n)
 * Space: O(1)
 */
function solveByTwoPointers(s) {
  let l = 0
  let r = s.length - 1

  while (l < r) {
    while (l < r && s[l].toLowerCase().match(/[a-z0-9]/g) === null) {
      l += 1
    }

    while (r > l && s[r].toLowerCase().match(/[a-z0-9]/g) === null) {
      r -= 1
    }

    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false

    l += 1
    r -= 1
  }

  return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome(" "))
console.log(isPalindrome(".,"))
