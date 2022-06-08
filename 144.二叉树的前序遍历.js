/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (root == null) return []
  //return loopPre(root)
  return recursivePre(root)
};

let loopPre = (root) => {
  let ans = [], stack = []
  while (root || stack.length != 0) {
    if (root) {
      ans.push(root.val)
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      root = root.right
    }
  }
  return ans
}

let recursivePre = (root) => {
  let ans = []
  ordering(root, ans)
  return ans
}

let ordering = (root, ans) => {
  if (root){
    ans.push(root.val)
    ordering(root.left, ans)
    ordering(root.right, ans)
  }
}
// @lc code=end

