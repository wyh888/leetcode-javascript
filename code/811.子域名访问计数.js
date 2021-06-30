/*
 * @lc app=leetcode.cn id=811 lang=javascript
 *
 * [811] 子域名访问计数
 */

// @lc code=start
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  let domainMap = {}
  
  for (let i = 0; i < cpdomains.length; i++) {
    let items = cpdomains[i].split(' ')
    let num = parseInt(items[0])
    let domains = items[1].split('.')
    // 取不同域名
    for (let j = domains.length - 1; j >= 0; j--) {
      let str = domains.slice(j, domains.length).join('.')
      // 填入哈希表
      if (domainMap[str]) {
        domainMap[str] += num
      } else {
        domainMap[str] = num
      }
    }
  }

  return Object.keys(domainMap).map(item => domainMap[item] + ' ' + item)
};

export default subdomainVisits
// @lc code=end

