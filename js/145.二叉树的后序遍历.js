/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
  if (root == null) return []
  //return recursivePos(root)
  return loopPos(root)
};

let loopPos = (root) => {
  let ans = [], stack = []
  let prevAccess = null
  while (root || stack.length != 0) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      if (root.right == null || root.right == prevAccess) {
        ans.push(root.val)
        prevAccess = root
        root = null
      } else {
        stack.push(root)
        root = root.right
      }
    }
  }
  return ans
}

let recursivePos = root => {
  let ans = []
  orderPos(root, ans)
  return ans
}

let orderPos = (root, ans) => {
  if (!root) return
  orderPos(root.left, ans)
  orderPos(root.right, ans)
  ans.push(root.val)
}
// @lc code=end

