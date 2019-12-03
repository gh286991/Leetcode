/*
 * @lc app=leetcode id=1222 lang=javascript
 *
 * [1222] Queens That Can Attack the King
 */

// @lc code=start
/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
const queensAttacktheKing = function (queens, king) {
  const map = {};
  queens.forEach((q) => map[q.join(',')] = 1);

  // for eight directions, find the first queen
  const ans = [];
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1], [-1, 1], [1, -1], [1, 1], [-1, -1]];

  // record if needed to go further for each direction
  const visited = new Array(8).fill(false);
  console.log('visited ', visited);
  let step = 1;

  while (step < 8) {
    dirs.forEach((d, i) => {
      if (!visited[i]) {
        const x = king[0] + step * d[0];
        const y = king[1] + step * d[1];
        if (x < 0 || y < 0 || x > 7 || y > 7) {
          visited[i] = true;
        } else if (map[`${x},${y}`]) {
          console.log('dfdf', map[`${x},${y}`]);
          visited[i] = true;
          ans.push([x, y]);
        }
      }
    });
    step += 1;
  }

  return ans;
};
// @lc code=end
queens = [[0, 1], [1, 0], [4, 0], [0, 4], [3, 3], [2, 4]];
king = [0, 0];
test = queensAttacktheKing(queens, king);
console.log('test :', test);
