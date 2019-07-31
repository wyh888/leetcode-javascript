/*
 * @lc app=leetcode id=922 lang=javascript
 *
 * [922] Sort Array By Parity II
 */
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortArrayByParityII = function(arr) {
	arr.sort((a, b) => b - a)

	let result = []
	let odd = 1
	let even = 0

	arr.forEach(item => {
		if (item % 2 === 1) {
			result[odd] = item
			odd += 2
		} else {
			result[even] = item
			even += 2
		}
	})

	return result
};

export default sortArrayByParityII

