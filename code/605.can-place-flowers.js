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
var canPlaceFlowers = function(flowerbed, n) {
  let count = 0
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (!flowerbed[i - 1] && !flowerbed[i + 1]) {
        flowerbed[i] = 1
        count++
      }
    }
  }
  if (count >= n) {
    return true
  }

  return false
};

// export default canPlaceFlowers

