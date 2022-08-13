/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // Time: O(n)
  // Space: O(n)
  return nums.length !== new Set(nums).size
}
