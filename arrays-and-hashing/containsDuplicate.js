/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return solveWithSet(nums)
}

/**
 * Strategy: Compare the length of the array to the length of the array converted to a set which removes the duplicates
 * Time: O(n)
 * Space: O(n)
 */
function solveWithSet(nums) {
  return nums.length !== new Set(nums).size
}
