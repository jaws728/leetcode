/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true
  return checkSym(root.left, root.right)
};

let checkSym = (left, right) => {
  if (!left && !right) return true
  if (!left || !right || left.val != right.val) return false
  return checkSym(left.left, right.right) && checkSym(left.right, right.left)
}
// @lc code=end

