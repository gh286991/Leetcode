#
# @lc app=leetcode id=206 lang=python3
#
# [206] Reverse Linked List
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
       
        node = head
        pre = None
        cur = None

        while node:
            pre = cur
            cur = node
            node = node.next
            cur.next = pre
        
        return cur
            
        
        
# @lc code=end

