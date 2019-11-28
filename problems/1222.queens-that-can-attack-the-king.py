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
        # print( 'd' , d['123'])

        for q in queens[0]:
            text = str(q).strip('[]')
            queenLoc.setdefault(text,1)
        ans = [];
        dirs = [[1, 0], [0, 1], [-1, 0], [0, -1], [-1, 1], [1, -1], [1, 1], [-1, -1]];

        visited = []
        # maxBorder = 8
        for i in range(8):
            visited.append(False)

        print(visited)
# @lc code=end
queens = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], 
king = [0,0]
test = Solution.queensAttacktheKing('self' , queens , king)
print('test' , test)
