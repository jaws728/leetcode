/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
  // return looping(root)
  return recusiving(root)
};

let looping = (root) => {
  // 堆栈法：
  let ans = [], stack = []
  while (root || stack.length) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      ans.push(root.val)
      root = root.right
    }
  }
  return ans
}

let recusiving = (root) => {
  //递归法：
  let ans = []
  inOrder(root, ans)
  return ans
}

let inOrder = (root, ans) => {
  if (root == null) return
  inOrder(root.left, ans)
  ans.push(root.val)
  inOrder(root.right, ans)
}

// @lc code=end

