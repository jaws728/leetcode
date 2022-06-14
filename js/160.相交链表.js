/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) return null
  // let pA = headA, pB = headB
  // while (pA != pB) {
  //   pA = (pA === null ? headB : pA.next)
  //   pB = (pB === null ? headA : pB.next) 
  // }
  // return pA

  // get A and B length
  let pA = headA, pB = headB
  let lenA = 0, lenB = 0
  while (pA) {
    lenA++
    pA = pA.next
  }
  while (pB) {
    lenB++
    pB = pB.next
  }
  pA = headA, pB = headB
  if (lenA > lenB) {
    for (let i = lenA - lenB; i > 0; i--){
      pA = pA.next
    }
  } else {
    for (let i = lenB - lenA; i > 0; i--){
      pB = pB.next
    }
  }
  while (pA !== pB) {
    pA = pA.next
    pB = pB.next
  }
  return pA
};
// @lc code=end

