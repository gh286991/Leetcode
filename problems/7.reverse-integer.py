#
# @lc app=leetcode id=7 lang=python3
#
# [7] Reverse Integer
#

# @lc code=start
class Solution:
    def reverse(self, x: int) -> int:
        
        num = 0

        range_32 = range(-2**31, 2**31-1)

        if x < 0:
            x = x * int(-1)
            while x:
                num = num*10 + x % 10
                x = x//10
            num = -num
        else:
            while x:
                num = num*10 + x % 10
                x = x//10
                
        if num not in range_32:
            return 0
        else:
            return num
# @lc code=end

x = -123
ans = Solution.reverse('123' , x)
print('ans ',ans)