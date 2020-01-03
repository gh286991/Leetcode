/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
  let curr = head;
  let pre = null;

  while (curr) {
    if (curr.val === val) {
      if (pre) {
        pre.next = pre.next.next;
        curr = pre;
      } else {
        head = curr.next;
      }
    } else {
      pre = curr;
    }
    curr = curr.next;
  }

  return head;
};
// @lc code=end
