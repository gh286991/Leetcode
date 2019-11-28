#
# @lc app=leetcode id=119 lang=python
#
# [119] Pascal's Triangle II
#

# @lc code=start
class Solution(object):
    def getRow(self, rowIndex):
        """
        :type rowIndex: int
        :rtype: List[int]
        """
        pasList = [[1]]
        
        for i in range(2,rowIndex+2):
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
        
        return pasList[-1]
# @lc code=end

idx = 3
test = Solution.getRow('self' , idx)
print(test)