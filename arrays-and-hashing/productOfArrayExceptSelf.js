/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  return solvePreAndPostProduct(nums)
}

/**
 * Strategy: The result for every index is computed by the product of all numbers before the index (preProduct) and the product of all numbers after the index (postProduct). Two iterations through the array. First compute the preProduct and store it in the answers array. Second iteration going backwards dynamically computing the postProduct and also storing the result of preProduct * postProduct in the answers array.
 * Time: O(n)
 * Space: O(1) (excluding the answers array)
 */
function solvePreAndPostProduct(nums) {
  const answer = Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
    answer[i] = answer[i - 1] * nums[i - 1]
  }

  let postProduct = 1
  for (let i = nums.length - 1; i > -1; i--) {
    answer[i] = answer[i] * postProduct
    postProduct *= nums[i]
  }

  return answer
}

console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]))
