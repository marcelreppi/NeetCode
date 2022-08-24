/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false

  return compareSortedStrings(s, t)
}

/**
 * Strategy: Sort the letters of both words. If the outcome is equal then they are an anagram.
 * Time: O(s+t)
 * Space: O(1)
 */
function compareSortedStrings(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("")
}

/**
 * Strategy: Count letters in both words. If both counts match in every letter then they are an anagram.
 * Time: O(s+t)
 * Space: O(s+t) 
*/
function compareLetterCounts(s, t) {
  const getLetterCounts = (s) => {
    return s.split("").reduce((counts, c) => {
      if (counts[c] !== undefined) {
        counts[c] += 1
      } else {
        counts[c] = 1
      }
      return counts
    }, {})
  }

  const sCounts = getLetterCounts(s)
  const tCounts = getLetterCounts(t)

  for (const key in sCounts) {
    if (tCounts[key] === undefined || tCounts[key] !== sCounts[key]) {
      return false
    }
  }
  return true
}

isAnagram("anagram", "nagaram")
