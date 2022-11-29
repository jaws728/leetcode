/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0
  let deep = 0

  function dp(root){
    if (root === null) return 0
    let left = dp(root.left), right = dp(root.right)
    deep = Math.max(deep, left, right)
    return Math.max(left, right) + 1
  }
  dp(root)

  return deep + 1
};
// @lc code=end

