/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head) return head
    const dummyHead = pointer = new ListNode()
    pointer.next = head
       
    let [slow, fast] = [pointer, pointer]
    // move fast ahead by n
    while(n--){
        fast = fast.next
    }
    
    while(fast.next){
        [slow, fast] = [slow.next, fast.next]
    }
    
    // remove slow.next
    slow.next = slow.next.next
    
    return dummyHead.next
};
// @lc code=end

