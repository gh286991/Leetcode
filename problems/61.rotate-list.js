/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    
    const pointer = dummyHead = new ListNode()
    if(!head || !head.next) return head

    let length = 1
    pointer.next = head

    let fast = pointer.next
    //Get Length and reduce loop
    while(fast.next){
        fast = fast.next
        length = length +1
    }

    for (let i = 0; i <  k % length; i++) {

        let cur = pointer.next

        while (cur) {
            if(!cur.next.next){
                const behind = pointer.next
                pointer.next = cur.next
                pointer.next.next = behind
                cur.next = null
            }
            cur = cur.next
        }
        
    }
   
    return dummyHead.next
};
// @lc code=end

