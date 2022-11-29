/**
 * TODO: 二叉树最小深度
 *     * 给定一个二叉树,找出其最小深度。
 *     * 最小深度是从根节点到最近叶子节点的最短路径上
 *     * 的节点数量
 *  ! 重点：深度优先、广度优先 (时间复杂度都是 O(n))
 */

class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
let node7 = new TreeNode(7, null, null);
let node6 = new TreeNode(6, node7, null);
let node5 = new TreeNode(5, null, null);
let node4 = new TreeNode(4, null, null);
let node3 = new TreeNode(3, node6, null);
let node2 = new TreeNode(2, node4, node5);
let node1 = new TreeNode(1, node2, node3);

// 深度优先：找到树中每个叶子节点，从叶子节点往回找进行深度计算 --> 空间复杂度为O(logn)
const minDepth = root => {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return 1;

  let min = Number.MAX_SAFE_INTEGER;

  if (root.left !== null) {
    min = Math.min(minDepth(root.left), min);
  }
  if (root.right !== null) {
    min = Math.min(minDepth(root.right), min);
  }

  return min + 1;
};

// console.log(minDepth(node1));

// 广度优先：从上向下找到叶子节点 --> 空间复杂度为O(n)
const minDeep = root => {
  if (root === null) return 0;
  let queue = [];
  root.deep = 1;
  queue.push(root);
  while (!+queue) {
    //空数组的情况下：+arr = 0
    let node = queue.shift();
    // node是否为叶子节点
    if (node.left === null && node.right === null) {
      return node.deep;
    }
    if (node.left !== null) {
      node.left.deep = node.deep + 1;
      queue.push(node.left);
    }
    if (node.right !== null) {
      node.right.deep = node.deep + 1;
      queue.push(node.right);
    }
  }
  return 0;
};

// console.log(minDeep(node1));

// ---------------------------------------------------------------

/**
 * TODO: 二叉树遍历 --> 先上到下、后左到右
 *    * 前序遍历:根左右
 *    * 中序遍历:左根右
 *    * 后序遍历:左右根
 *    * 层序遍历:从上往下、从左往右
 * ----
 *    * 递归遍历:使用递归方法遍历
 *    * 迭代遍历:使用迭代方法实现递归函数，与递归等价morris遍历
 */

// 1. 前序遍历
const preorder = root => {
  if (root === null) return;
  console.log(root.value);
  preorder(root.left);
  preorder(root.right);
};

preorder(node1);

// 2. 中序遍历
const inorder = root => {
  if (root === null) return null;
  inorder(root.left);
  console.log(root.value);
  inorder(root.right);
};
inorder(node1);

// 3. 后序遍历
const posorder = root => {
  if (root === null) return;
  posorder(root.left);
  posorder(root.right);
  console.log(root.value);
};
posorder(node1);
