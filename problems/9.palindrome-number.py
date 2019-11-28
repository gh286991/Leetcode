#
# @lc app=leetcode id=9 lang=python
#
# [9] Palindrome Number
#

# @lc code=start
class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        strNum = str(x)
        if strNum == strNum[::-1]:
            return True
        else:
            return False

# @lc code=end
t= 121
test = Solution.isPalindrome('23' ,t)
print(test)
