/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  return convergingPointers(numbers, target)
}

/**
 * Strategy: Left and right pointer at beginning and end of list. Moving them inwards step by step based on if the current sum of left and right is smaller (increase left pointer) or larger (decrease right pointer) than the target.
 * Time: O(n)
 * Space: O(1)
 */
function convergingPointers(numbers, target) {
  let l = 0
  let r = numbers.length - 1

  while (l < r) {
    const sum = numbers[l] + numbers[r]
    if (sum === target) {
      return [l + 1, r + 1]
    }

    sum > target ? r-- : l++
  }
}

/**
 * Strategy: Slightly smarter brute force
 * Time: O(n^2)
 * Space: O(1)
 */
function solveBoundedSearch(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i]
    const diff = target - n
    for (let j = i + 1; j < numbers.length; j++) {
      const m = numbers[j]
      if (m === diff) {
        return [i + 1, j + 1]
      }

      if (m > diff) break
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 3, 4], 6))
