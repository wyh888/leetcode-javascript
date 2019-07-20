/*
 * @lc app=leetcode id=89 lang=javascript
 *
 * [89] Gray Code
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  if (n === 0) return [0]

  let unit = [0, 1]
  let result = [0, 1]
  let createGrayCode = () => {
    let tmp = []
    for (let i = 0; i < result.length; i++) {
      tmp.push(`${unit[0]}${result[i]}`)
    }
    for (let i = result.length - 1; i >= 0; i--) {
      tmp.push(`${unit[1]}${result[i]}`)
    }
    return tmp
  }

  for (let i = 1; i < n; i++) {
    result = createGrayCode()
  }

  result = result.map(item => parseInt(item, 2))

  return result
};

export default grayCode

