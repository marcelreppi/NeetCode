/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  return solveByTwoPointers(s)
}

function solveByTwoPointers(s) {
  // Time: O(n)
  // Space: O(1)

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
