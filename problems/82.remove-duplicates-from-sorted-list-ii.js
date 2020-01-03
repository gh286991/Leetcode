/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
  const res = new ListNode();
  let curr = res;
  const duplicates = [];

  while (head) {
    if (curr && curr.val == head.val) {
      duplicates.push(head.val);
      head = head.next;
    } else {
      curr.next = new ListNode(head.val);
      head = head.next;
      curr = curr.next;
    }
  }

  curr = res.next;
  let pre = res;

  for (let i = 0; i < duplicates.length; i++) {
    while (curr) {
      if (curr.val == duplicates[i]) {
        curr = pre;
        pre.next = curr.next.next;
      }

      curr = curr.next;
      pre = pre.next;
    }
    curr = res.next;
    pre = res;
  }
  return res.next;
};
// @lc code=end
