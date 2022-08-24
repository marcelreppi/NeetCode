/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  return findBySubtraction(nums, target)
}

/**
 * Strategy: Subtract every number from the target and store the index to each number. Check if we have already seen the result of the subtraction. Eventually we find the counterpart and that's our solution.
 * Time: O(n)
 * Space: O(n)
 */
function findBySubtraction(nums, target) {
  const numIndex = {}
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i]
    const b = target - a
    if (numIndex[b] !== undefined) {
      return [numIndex[b], i]
    } else {
      numIndex[a] = i
    }
  }
}

/**
 * Strategy: Add every number to every other number until you find the target.
 * Time: O(n^2)
 * Space: O(1)
 */
function bruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      const b = nums[j]
      if (a + b === target) return [i, j]
    }
  }
}
