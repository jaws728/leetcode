/**
 * 环形链表
 * TODO: 给定一个链表，判断链表中是否有环。
 *  * 如果链表中有某个节点,可以通过连续跟踪next 指针再次到达该节点,则链表中存在环。
 *  * 如果链表中存在环，则返回 true。否则，返回false。
 *
 */

const hasCycle = node => {
  // let node = head;
  let set = new Set();
  while (node !== null) {
    if (set.has(node)) return true;
    set.add(node);
    // if (node.value === head.value) return true;
    node = node.next;
  }
  return false;
};

class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

let node5 = new ListNode(5, null);
let node4 = new ListNode(4, node5);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);
node5.next = node1;

console.log(hasCycle(node1));

// 双指针
const doublePointer = node => {
  if (node === null || node.next === null) return false;

  let slow = node,
    fast = node.next;
  while (slow !== fast) {
    if (slow === null || fast === null) return false;
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};

console.log(doublePointer(node1));
