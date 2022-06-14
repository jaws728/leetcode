/*
 * @lc app=leetcode.cn id=234 lang=java
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
        if (head == null) return true;
        ListNode pA = head, pB = head;
        while (pA != null && pA.next != null) {
            pA = pA.next.next;
            pB = pB.next;
        }
        if (pA != null) {
            // odd list need to add one more pB
            pB = pB.next;
        }
        // reverse pB to end
        ListNode prev = null;
        while (pB != null) {
            ListNode temp = pB.next;
            pB.next = prev;
            prev = pB;
            pB = temp;
        }
        pB = prev;
        pA = head;
        while (pB != null) {
            if (pA.val != pB.val) {
                return false;
            }
            pA = pA.next;
            pB = pB.next;
        }
        return true;
    }
}
// @lc code=end

