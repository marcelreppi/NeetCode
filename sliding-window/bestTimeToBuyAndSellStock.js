/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  return solveWithPointers(prices)
}

/**
 * Strategy: Use two pointers that represent the moments we buy and sell. If our sell pointer is lower than our buy pointer then we place the buy pointer at the sell pointer. The buy pointer increases with every iteration.
 * Time: O(n)
 * Space: O(1)
 */
function solveWithPointers(prices) {
  if (prices.length === 1) return 0

  let maxProfit = 0
  let b = 0
  let s = b + 1

  while (s < prices.length) {
    maxProfit = Math.max(maxProfit, prices[s] - prices[b])

    if (prices[s] < prices[b]) b = s
    s++
  }

  return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]))
