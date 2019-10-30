#
# @lc app=leetcode id=507 lang=python
#
# [507] Perfect Number
#

# @lc code=start
class Solution(object):
    def checkPerfectNumber(self, num):
        """
        :type num: int
        :rtype: bool
        """
        sum = 0

        if(num == 0):
            return False
        
        for i in range(1,num/2+1):
            if( num % i == 0):
                sum = sum + i
        
        if(sum == num):
            return True
        else:
            return False

# @lc code=end

