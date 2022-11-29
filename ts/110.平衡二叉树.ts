/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
  function height(root){
    if (root === null) return 0
    let lh = height(root.left),rh = height(root.right)
    if (lh >= 0 && rh >= 0 && Math.abs(lh - rh) <= 1){
      return Math.max(lh, rh) + 1
    }
    return -1
  }
  return height(root) >= 0
};
// @lc code=end

