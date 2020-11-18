/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let reverse = (pre, cur) => {
        if(!cur) return pre;
        let next = cur.next;
        cur.next = pre;
        return reverse(cur, next);
    }
    let dummyHead = slow = fast = new ListNode();
    dummyHead.next = head;
    // 注意注意，来找中点了, 黄金模板
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let next = slow.next;
    slow.next = null;
    let newStart = reverse(null, next);
    for(let p = head, newP = newStart; newP != null; p = p.next, newP = newP.next) {
        if(p.val != newP.val) return false;
    }
    return true;
};
// @lc code=end

