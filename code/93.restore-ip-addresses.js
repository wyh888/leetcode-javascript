/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */
/**
 * @param {string} s
 * @return {string[]}
 */
// var restoreIpAddresses = function(s) {
//   let result = []

//   // 递归处理 ip 分段
//   let search = (cur, sub) => {
//     // 边界条件
//     if (cur.length === 4 && cur.join('') === s) {
//       result.push(cur.join('.'))
//     } else {
//       for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) {
//         tmp = sub.substr(0, i + 1)
//         if (tmp < 256) {
//           search(cur.concat([tmp]), sub.substr(i + 1))
//         }
//       }
//     }
//   }
//   search([], s)

//   return result
// };

var restoreIpAddresses = function(s) {
  let result = []
  handler(s, result, [], 0, 0)
  return result
}

function handler(s, result, tmp, idx, curr) {
  if (curr === 4) {
    if (idx === s.length) result.push(tmp.join('.'))
    return
  }

  let n = ''
  for (let i = 0; idx + i < s.length && i < 3; i++) {
    let t = [...tmp]
    n += s[idx + i]
    if (Number(n) > 255) break
    t.push(n)
    handler(s, result, t, idx + i + 1, curr + 1)
    if (n === '0') break
  }
}

export default restoreIpAddresses
