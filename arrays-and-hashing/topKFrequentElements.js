/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  return findByBucketSort(nums, k)
}

/**
 * Strategy: Count number occurences in hashmap. Use an array to group numbers by how often they occur using the array index as count. Return the top K elements from the end of the array.
 * Time: O(n)
 * Space: O(n)
 */
function findByBucketSort(nums, k) {
  const counts = {}
  for (const num of nums) {
    counts[num] = 1 + counts[num] || 0
  }

  const numsByCount = Array(nums.length).fill([])
  Object.entries(counts).forEach(([num, count]) => {
    numsByCount[count] = [...numsByCount[count], num]
  })

  return numsByCount.flat().slice(-k)
}

/**
 * Strategy: Count occurences of each number, sort occurences and return the first k elements. Could be improved by adding numbers to a heap according to their count.
 * Time: O(n log n)
 * Space: O(n)
 */
function findByCount(nums, k) {
  const counts = {}
  for (const num of nums) {
    counts[num] = 1 + counts[num] || 0
  }

  return Object.entries(counts)
    .sort(([num1, count1], [num2, count2]) => {
      return count2 - count1
    })
    .slice(0, k)
    .map(([num]) => num)
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
