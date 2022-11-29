/*
 * @lc app=leetcode.cn id=543 lang=typescript
 *
 * [543] 二叉树的直径
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (root === null) return 0

  /**
   * 二叉树长度 = 左子节点最大深度 + 右子节点最大深度
   * dfs = 最大深度计算
   */
  let maxLen = 0
  function dfs(root: TreeNode | null): number{
    if (root === null) return 0
    let left = dfs(root.left), right = dfs(root.right)
    maxLen = Math.max(maxLen, left + right)
    return Math.max(left, right) + 1
  }
  dfs(root)
  return maxLen
};
// @lc code=end

