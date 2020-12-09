/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const pointer = dummyHead = new ListNode()
    let leftPointer = leftList = new ListNode()
    let rightPointer = rightList = new ListNode()

    pointer.next = head

    let curr = pointer 

    while(curr.next){
        curr = curr.next
        if(curr.val <x){
            leftPointer.next = curr
            leftPointer = leftPointer.next
        }else{
            rightPointer.next = curr
            rightPointer = rightPointer.next
        }
    }
    
    rightPointer.next = null
    leftPointer.next = rightList.next

    return leftList.next
    
};

// @lc code=end

