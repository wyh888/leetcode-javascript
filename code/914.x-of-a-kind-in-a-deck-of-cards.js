/*
 * @lc app=leetcode id=914 lang=javascript
 *
 * [914] X of a Kind in a Deck of Cards
 */
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  if (deck.length < 2) return false

  let group = {}
  deck.forEach(item => {
    if (group[item]) {
      group[item]++
    } else {
      group[item] = 1
    }
  })

  let result = []
  for (let key in group) {
    result.push(group[key])
  }

  let min = result[0]

  let getMin = (a, b) => {
    var result = 1
    for(let i = 1; i <= Math.min(a, b); i++ ){
        if (a % i === 0 && b % i === 0 ){
            result = i
        }
    }
    return result
  }

  for (let i = 1; i < result.length; i++) {
    min = getMin(min, result[i])
  }

  if (min === 1) return false

  return true
};

export default hasGroupsSizeX
