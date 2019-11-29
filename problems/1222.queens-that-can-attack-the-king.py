#
# @lc app=leetcode id=1222 lang=python
#
# [1222] Queens That Can Attack the King
#

# @lc code=start
class Solution(object):
    def queensAttacktheKing(self, queens, king):
        """
        :type queens: List[List[int]]
        :type king: List[int]
        :rtype: List[List[int]]
        """
        queenLoc = {}

        for q in queens:
            text = str(q).strip('[]')
            queenLoc.setdefault(text,1)

        ans = [];
        dirs = [[1, 0], [0, 1], [-1, 0], [0, -1], [-1, 1], [1, -1], [1, 1], [-1, -1]];

        visited = []
        # maxBorder = 8
        for i in range(8):
            visited.append(False)
        
        step = 1

        while( step < 8):
            for idx ,d in enumerate(dirs):

                if visited[idx] == False:
                    x = king[0] + step*d[0]
                    y = king[1] + step*d[1]

                    if x < -1 or y<-1 or x >7 or y>7:
                        visited[idx] = True

                    try :
                        if queenLoc[ str(x)+', '+str(y)]:
                            visited[idx] = True
                            ans.append([x,y])
                    except :
                        pass
            step = step +1

        return ans
# @lc code=end
queens = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]] 
king = [0,0]
test = Solution.queensAttacktheKing('self' , queens , king)
print('test' , test)
