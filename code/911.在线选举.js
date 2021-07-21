/*
 * @lc app=leetcode.cn id=911 lang=javascript
 *
 * [911] 在线选举
 */

// @lc code=start
/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function (persons, times) {
  const voteMap = new Map()
  const leadMap = new Map()

  let maxVote = 0
  let maxVotePerson = null
  for (let i = 0; i < times.length; i++) {
    const time = times[i]
    const person = persons[i]
    const vote = 1 + (voteMap.get(person) || 0)
    voteMap.set(person, vote)

    // 当前时间 person 获得了领先
    if (vote >= maxVote) {
      maxVote = vote
      maxVotePerson = person
    }
    leadMap.set(time, maxVotePerson)
  }

  this.times = times
  this.leadMap = leadMap
}

/**
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
  const { leadMap } = this
  const times = this.times
  let left = 0
  let right = times.length - 1
  let mid = 0
  while (left < right) {
    mid = ((left + right) >> 1) + 1
    if (t >= times[mid]) {
      left = mid
    } else {
      right = mid - 1
    }
  }

  return leadMap.get(times[left])
}

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
// @lc code=end
