/*
 * @lc app=leetcode.cn id=235 lang=typescript
 *
 * [235] 二叉搜索树的最近公共祖先
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  /**
   * 二叉搜索树：根节点的左边总额比根节点小，根节点右边的总和比根节点大
   * @param root 
   * @param p 
   * @param q 
   */
  function biSearch(root, p, q){
    // 如果q，p对于根节点一个大一个小，则肯定是当下的节点为祖先节点
    if (root.val < p.val && root.val < q.val){
      return biSearch(root.right, p, q)
    }
    if (root.val > p.val && root.val > q.val){
      return biSearch(root.left, p, q)
    }
    return root
  }
  return biSearch(root, p, q)
};
// @lc code=end

