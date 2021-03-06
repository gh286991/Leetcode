/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
  const res = new ListNode();
  let curr = res;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      curr.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    curr = curr.next;
  }


  curr.next = l1 || l2;

  return res.next;
};
// @lc code=end
