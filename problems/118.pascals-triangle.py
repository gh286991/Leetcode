#
# @lc app=leetcode id=118 lang=python
#
# [118] Pascal's Triangle
#

# @lc code=start
class Solution(object):
    def generate(self, numRows):
        """
        :type numRows: int
        :rtype: List[List[int]]
        """
        if numRows == 0:
            return []
        else:
            pasList = [[1]]
        
        for i in range(2,numRows+1):
            tempLList = []
            if i == 2:
                tempLList = [1,1]
            else:
                for idx, j in enumerate(pasList[-1]):
                    if idx == len(pasList[-1])-1 :
                        pass
                    else:
                        tempLList.append(j+pasList[-1][idx+1])
                
                tempLList.append(1)
                tempLList.insert(0, 1)

            pasList.append(tempLList)
        
        return pasList
# @lc code=end

rows = 5
test = Solution.generate('self' , rows)
print(test)
