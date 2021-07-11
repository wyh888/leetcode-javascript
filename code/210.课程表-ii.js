/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let edge = [] // 出度数
  let inDeg = [] // 入度数

  // 初始化
  for (let i = 0; i < numCourses; i++) {
    edge[i] = []
    inDeg[i] = 0
  }

  // 遍历所有课程先觉条件
  for (const pre of prerequisites) {
    addEdge(pre[1], pre[0])
  }

  // 出边数组加边
  function addEdge(x, y) {
    edge[x].push(y)
    inDeg[y]++
  }

  // 拓扑排序基于 BFS，需要队列
  function topsort() {
    let q = []
    let order = [] // 学习顺序数组
    // 从所有零入度点出发
    for (let i = 0; i < numCourses; i++) {
      if (inDeg[i] == 0) q.push(i)
    }
    // 执行 BFS
    while (q.length > 0) {
      let x = q.shift() // 取队头
      order.push(x)
      // 考虑 x 的所有出边
      for (let y of edge[x]) {
        inDeg[y]-- // 去掉约束关系
        if (inDeg[y] === 0) q.push(y)
      }
    }
    if (order.length == numCourses) return order
    return []
  }

  return topsort()
}
// @lc code=end
