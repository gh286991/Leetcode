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
<<<<<<< HEAD
        

        return node
# @lc code=end

=======

        return node
# @lc code=end
>>>>>>> 1dc9b848171f944ec27c559c54c9ab2e6fb05492
