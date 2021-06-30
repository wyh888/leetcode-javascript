/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  return divideMerge(lists, 0, lists.length - 1)

  // 分治合并
  function divideMerge(lists, headIndex, rearIndex) {
    if (headIndex === rearIndex) return lists[headIndex]
    if (headIndex > rearIndex) return null
    // 右移取中位数
    let mid = (headIndex + rearIndex) >> 1
    // 两两合并
    return mergeTwoLists(divideMerge(lists, headIndex, mid), divideMerge(lists, mid + 1, rearIndex))
  }

  // 合并两条链表
  function mergeTwoLists (l1, l2) {
    // 创建头结点
    let head = new ListNode()
    let last = head
    // 双指针移动
    while (l1 && l2) {
      if (l1.val > l2.val) {
        last.next = l2
        l2 = l2.next
      } else {
        last.next = l1
        l1 = l1.next
      }
      last = last.next
    }
    // 判断还有剩余的是哪个链表，直接把剩余的接到新链表
    last.next = l1 ? l1 : l2
    return head.next
  }
};
// @lc code=end

