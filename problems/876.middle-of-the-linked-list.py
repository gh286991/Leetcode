#
# @lc app=leetcode id=876 lang=python
#
# [876] Middle of the Linked List
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def middleNode(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        node = head
        nodeFast = head

        while nodeFast and nodeFast.next:
            node = node.next
            nodeFast = nodeFast.next.next
        

        return node
# @lc code=end

