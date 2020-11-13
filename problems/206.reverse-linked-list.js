/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
// var reverseList = function(head) {
//     if (!head)
//         return null;

//     let pre = null, node = head, cur=null;

//     while (node) {
//         pre = cur
//         cur = node
//         node = node.next
//         cur.next = pre
//     }
//     return cur;

// };

// 遞迴
const reverseList = function (head) {
  if (!head) { return null; }

  const revse = (cur, pre, node) => {
    if (!node) return cur;
    pre = cur;
    cur = node;
    node = node.next;
    cur.next = pre;

    return revse(cur, pre, node);
  };

  return revse(null, null, head);
};
// @lc code=end
