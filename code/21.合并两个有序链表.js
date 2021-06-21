/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // 创建头结点
  let head = new ListNode()
  let last = head
  // 双指针移动
  while(l1 && l2) {
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
};
// @lc code=end

