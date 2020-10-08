/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return ''

  let temp = strs[0]
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (!strs[j].startsWith(temp.slice(0, i + 1))) {
        return temp.slice(0, i)
      }
    }
  }

  return temp
};

export default longestCommonPrefix
// @lc code=end

