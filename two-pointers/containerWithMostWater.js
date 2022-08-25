/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  return solveWithPointers(height)
}

/**
 * Strategy: Two pointers converging while calculating the maxArea for left and right pointer. Move pointers based on who has the lower height.
 * Time: O(n)
 * Space: O(1)
 */
function solveWithPointers(height) {
  let l = 0
  let r = height.length - 1
  let maxArea = 0

  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r])
    if (area > maxArea) {
      maxArea = area
    }

    if (height[l] > height[r]) {
      r--
    } else if (height[l] < height[r]) {
      l++
    } else {
      l++
    }
  }

  return maxArea
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
