/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
// var swapPairs = function(head) {
    
//     let point = dummyHead = new ListNode()

//     point.next = head

//     let node1 , node2

//     while (point.next && point.next.next) {
       
//         node1 = point.next
//         node2 = node1.next

//         //Change
//         node1.next = node2.next
//         node2.next = node1
    
//         point.next = node2
//         point = node1

//     }

//     return dummyHead.next
// };

var swapPairs = function(head) {
    if(!head || !head.next) return head
    let node1 = head
    let node2 = head.next

    node1.next = swapPairs(node2.next)
    node2.next = node1
    return node2
};
// @lc code=end

