/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  return solveWithTwoSum(nums)
}

/**
 * Strategy: Sort the input array. For each negative number use the two pointer technique to find all combination of two numbers that equalize it.
 * Time: O(n^2) (O(n log n) sorting + O(n^2) array traversal)
 * Space: O(1)
 */
function solveWithTwoSum(nums) {
  const results = []

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    if (n > 0) break
    if (n === nums[i - 1]) continue

    let l = i + 1
    let r = nums.length - 1

    while (l < r) {
      const threeSum = n + nums[l] + nums[r]
      if (threeSum > 0) {
        r--
      } else if (threeSum < 0) {
        l++
      } else {
        results.push([n, nums[l], nums[r]])
        l++
        while (nums[l] === nums[l - 1] && l < r) {
          l++
        }
      }
    }
  }

  return results
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([0, 0, 0]))
console.log(threeSum([0, 1, 1]))
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]))
