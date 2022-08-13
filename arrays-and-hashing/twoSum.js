/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  return findBySubtraction(nums, target)
}

function findBySubtraction(nums, target) {
  // Time: O(n)
  // Space: O(n)
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

function bruteForce(nums, target) {
  // Time: O(n^2)
  // Space: O(1)
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      const b = nums[j]
      if (a + b === target) return [i, j]
    }
  }
}
