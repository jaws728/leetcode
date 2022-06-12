/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function(root) {
  // if (root == null) return true
  // if (Math.abs(deep(root.left) - deep(root.right)) > 1) {
  //   return false
  // }
  // return isBalanced(root.left) && isBalanced(root.right)
  const dfs = (root) => {
    if (root == null) return [0, true] //deep, isBalanced
    let [ld, l] = dfs(root.left)
    let [rd, r] = dfs(root.right)
    return [Math.max(ld, rd) + 1, l && r && Math.abs(ld - rd) < 2]
  }
  return dfs(root)[1]
};

let deep = (root) => {
  if (root == null) return 0
  return (Math.max(deep(root.left), deep(root.right)) + 1)
}
// @lc code=end

