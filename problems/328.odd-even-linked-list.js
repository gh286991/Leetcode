/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
var oddEvenList = function(head) {
    if (!head || !head.next) return head; // Watch out for edge cases! (0 or 1 item)
    
    const pointer = dummyHead = new ListNode()
    pointer.next =head

    let cur = pointer
    let counter = 0
    let oddNode = oddList = new ListNode()
    let evenNode = evenList = new ListNode()

    while(cur){
        cur = cur.next
        counter++
        
        if(counter%2 === 1 && cur){
            oddNode.next = cur
            oddNode = oddNode.next
        }else{
            evenNode.next = cur
            evenNode = evenNode.next
        }
    }

    oddNode.next = evenList.next
    return  oddList.next
};

// @lc code=end

