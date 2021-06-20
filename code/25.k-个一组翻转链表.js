/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  // 新建一个保护结点
  let protect = new ListNode(0, head)
  // 分组（找到每一组的开始、结尾），按组遍历
  // last 是上一组结尾，从 protect 开始
  let last = protect
  while(head !== null) {
    let end = getEnd(head, k)
    if (end === null) break
    let nextGroupHead = end.next
    // 处理组内 k-1 条边反转
    reverseList(head, end)
    // 上一组跟本组的新开始（旧 end）建立联系
    last.next = end
    // 本组的新结尾（head）跟下一组建立联系
    head.next = nextGroupHead

    // 分组遍历
    last = head
    head = nextGroupHead
  }

  return protect.next

  // 获取每一组最后的指针
  function getEnd(head, k) {
    while (head !== null) {
      k--
      if (k === 0) break
      head = head.next
    }
    return head
  }
  // 反转 head 到 end 之间链表
  function reverseList(head, end) {
    if (head === end) return
    let last = head
    let next = head.next
    head = head.next
    while (head !== end) {
      next = head.next
      head.next = last
      // last, head 同步向后移动一位
      last = head
      head = next
    }
    end.next = last
  }
};
// @lc code=end

