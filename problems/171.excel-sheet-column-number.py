#
# @lc app=leetcode id=171 lang=python3
#
# [171] Excel Sheet Column Number
#

# @lc code=start
class Solution:
    def titleToNumber(self, s: str) -> int:
  
        sum = 0
        for i in range(len(s)):
            sum = sum*26 + ord(s[i])-ord("A")+1

        print('ord A ' + str(ord("A")) )
        print('ord Z ' + str(ord("Z")) )
        return sum
        
# @lc code=end

s = "AAA"
ans = Solution.titleToNumber( '123',s)
print('ans ' + str(ans))