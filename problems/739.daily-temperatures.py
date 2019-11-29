#
# @lc app=leetcode id=739 lang=python3
#
# [739] Daily Temperatures
#

# @lc code=start
class Solution:
    # def dailyTemperatures(self, T: List[int]) -> List[int]:
    def dailyTemperatures(self, T):
        stack = [] # in put ([T,index])
        res = [0] * len(T)
        
        for idx , t in  enumerate(T):
            
            while stack and stack[-1][0] < t:
                index = stack[-1][1]
                res[index] = idx - stack[-1][1]
                stack.pop()
            stack.append([t,idx])

        return res
# @lc code=end

T = [73,74,75,71,69,72,76,73]
test = Solution.dailyTemperatures('self' ,T)
print(test)