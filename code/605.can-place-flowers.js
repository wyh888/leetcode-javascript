/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// var canPlaceFlowers = function(flowerbed, n) {
//   let count = 0
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (flowerbed[i] === 0) {
//       if (!flowerbed[i - 1] && !flowerbed[i + 1]) {
//         flowerbed[i] = 1
//         count++
//       }
//     }
//   }

//   return count >= n
// };

var canPlaceFlowers = function(flowerbed, n) {
  let count = 0
  for (let i = 0, len = flowerbed.length; i < len; i++) {
    if (flowerbed[i] === 0) {
      if (i === 0 && !flowerbed[1]) {
        count++
        i++
      } else if (!flowerbed[i - 1] && !flowerbed[i + 1]) {
        count++
        i++
      }
    }
  }
  return count >= n
}

export default canPlaceFlowers

