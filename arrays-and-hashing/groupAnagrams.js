/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  return groupBySorting(strs)
}

function groupBySorting(strs) {
  // Time: O(n * mlogm) (n is length of strs and m is avg length of a str)
  // Space: O(n)
  const res = {}

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("")
    if (res[sortedStr] !== undefined) {
      res[sortedStr].push(str)
    } else {
      res[sortedStr] = [str]
    }
  }

  return Object.values(res)
}
