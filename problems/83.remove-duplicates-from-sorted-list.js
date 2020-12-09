/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  const res = new ListNode(null);
  let curr = res;
  if(!head) return null

  while (head) {
    if (curr.val === head.val) {
      head = head.next;
    } else {
      curr.next = new ListNode(head.val);
      head = head.next;
      curr = curr.next;
    }
  }

  return res.next;
};
// @lc code=end
