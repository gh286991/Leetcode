#
# @lc app=leetcode id=1094 lang=python3
#
# [1094] Car Pooling
#

# @lc code=start
class Solution:
    # def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
    def carPooling(self, trips, capacity: int):
        lst = []
        for n, start, end in trips:
            lst.append((start, n))
            lst.append((end, -n))

        lst.sort()

        pas = 0
        for loc in lst:
            pas += loc[1]

            if pas > capacity:
                return False

        return True
# @lc code=end

trips = [[4,5,6],[6,4,7],[4,3,5],[2,3,5]]
cp = 13

test = Solution.carPooling('self' ,trips,cp )
print(test)