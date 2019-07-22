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

  let result = [0, 1]
  let createGrayCode = () => {
    let arr1 = result.map(item => `0${item}`),
        arr2 = result.map(item => `1${item}`).reverse()

    return arr1.concat(arr2)
  }

  for (let i = 1; i < n; i++) {
    result = createGrayCode()
  }

  return result.map(item => parseInt(item, 2))
};

// var grayCode = function(n) {
//   if(n === 0) return [0]
//   if(n === 1) return [0, 1]
  
//   let arr = ["00", "01", "11", "10"]
//   n -= 2
  
//   while(n > 0) {
//     let arr1 = arr.map(item => "0" + item),
//         arr2 = arr.map(item => "1" + item).reverse()
    
//     arr = arr1.concat(arr2)
//     n--
//   }
  
//   return arr.map(item => parseInt(item, 2))
// };

export default grayCode

