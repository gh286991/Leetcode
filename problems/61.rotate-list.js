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

    for (let i = 0; i < k; i++) {
        
        pointer.next = head
        let cur = pointer.next
        while (cur) {
            console.log(cur)
            if(!cur.next.next){
                console.log('last two' ,cur )
                const behind = pointer.next
                pointer.next = cur.next
                pointer.next.next = behind
                console.log('pointer' ,pointer)
                cur.next = null
            }
            cur = cur.next
        }
    }
    

    console.log('dummyHead' , dummyHead)
};
// @lc code=end

