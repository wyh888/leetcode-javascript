/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  let allWords = {}
  let result = []
  let wordNum = words.length

  if (!wordNum) {
    return result
  }

  words.forEach(item => {
    if (allWords[item]) {
      allWords[item] ++
    } else {
      allWords[item] = 1
    }
  })

  let wordLen = words[0].length

  for (let i = 0; i < s.length - wordNum * wordLen + 1; i++) {
    let hasWords = {}

    let num = 0

    while(num < wordNum) {
      let word = s.substring(i + num * wordLen, i + (num + 1) * wordLen)

      if (words.indexOf(word) > -1) {
        if (hasWords[word]) {
          hasWords[word] ++
        } else {
          hasWords[word] = 1
        }
        if (hasWords[word] > allWords[word]) {
          break
        }
      } else {
        break
      }

      num ++
    }

    if (num === wordNum) {
      result.push(i)
    }
  }

  return result
};

export default findSubstring
// @lc code=end
