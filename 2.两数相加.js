/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  //linked list head and tail
  let head = null;
  let tail = null;
  let carry = 0;
  
  // reverse sum
  while(l1 || l2){
    let n1 = 0;
    let n2 = 0;
    if (l1){
      n1 = l1.val;
      l1 = l1.next;
    }
    if (l2){
      n2 = l2.val;
      l2 = l2.next;
    }

    const sum = n1 + n2 + carry;
    carry = Math.floor(sum / 10);
    
    // if still no list: head = tail -> create new node
    if (!head){
      head = tail = new ListNode(sum % 10); // 7 % 10 = 7 or 13 % 10 = 3
    } else {
      // if there is a list: tail will create new node and move on
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }
  }

  if (carry > 0){
    tail.next = new ListNode(carry);
  }
  return head;
};
// @lc code=end

