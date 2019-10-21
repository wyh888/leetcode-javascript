/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 */

/**
 * 思路：循环遍历字符串 s，判断它的每个子串是否符合；又子串中单词的排列顺序是不确定的，因此可以换种思路，通过对比子串中每种单词的个数和原单词列表 words 中对应单词的个数是否匹配来得出结果
 * 时间复杂度：假设 s 的长度是 n，words 里有 m 个单词，那么时间复杂度就是 O（n * m）。
 * 空间复杂度：两个 Object，假设 words 里有 m 个单词，就是 O（m）。
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

  // allWords 存放所有的单词个数
  words.forEach(item => {
    if (allWords[item]) {
      allWords[item] ++
    } else {
      allWords[item] = 1
    }
  })

  let wordLen = words[0].length

  for (let i = 0; i < s.length - wordNum * wordLen + 1; i++) {
    // hasWords 存放当前字符串中存放的单词的个数
    let hasWords = {}

    let num = 0

    // 判断子串是否符合
    while(num < wordNum) {
      // 截取当前单词
      let word = s.substring(i + num * wordLen, i + (num + 1) * wordLen)

      // 判断是否在单词列表中
      if (words.indexOf(word) > -1) {
        if (hasWords[word]) {
          hasWords[word] ++
        } else {
          hasWords[word] = 1
        }
        // 比较当前单词的个数与单词列表中对应单词的个数
        if (hasWords[word] > allWords[word]) {
          break
        }
      } else {
        break
      }

      num ++
    }

    // 判断是不是所有单词都符合条件
    if (num === wordNum) {
      result.push(i)
    }
  }

  return result
};

export default findSubstring
// @lc code=end
