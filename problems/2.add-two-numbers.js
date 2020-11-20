/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
var addTwoNumbers = function(l1, l2) {
    const dummyHead = point = new ListNode()

    let sum = 0, carry = false

    while(l1 || l2 || carry ){
        sum = carry ? 1:0
        if(l1){
            sum = sum + l1.val
            l1 = l1.next
        }

        if(l2){
            sum = sum + l2.val
            l2 = l2.next
        }

        if(sum >= 10){
            sum = sum -10
            carry = true
        }else{
            carry = false
        }
        
        point.next = new ListNode(sum)
        point=point.next
        sum = 0
    }

   return dummyHead.next
};


// @lc code=end

