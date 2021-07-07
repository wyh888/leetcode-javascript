/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let postPointer = postorder.length - 1

  let goBuild = function(left, right) {
    if (right - left < 0) return null
    let index = inorder.indexOf(postorder[postPointer])
    let root = new TreeNode(inorder[index])
    postPointer --
    root.right = goBuild(index + 1, right)
    root.left = goBuild(left, index - 1)
    return root
  }
  return goBuild(0, inorder.length - 1)
}
// @lc code=end
