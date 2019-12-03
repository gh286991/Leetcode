/*
 * @lc app=leetcode id=1094 lang=javascript
 *
 * [1094] Car Pooling
 */

// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
const carPooling = function (trips, capacity) {
  const lst = [];
  trips.forEach((val) => {
    const N = val[0];
    const S = val[1];
    const E = val[2];
    lst.push([S, N]);
    lst.push([E, N * -1]);
  });

  lst.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  let pas = 0;
  for (let i = 0; i < lst.length; i++) {
    pas += lst[i][1];
    if (pas > capacity) {
      return false;
    }
  }
  return true;
};
// @lc code=end

trips = [[4, 5, 6], [6, 4, 7], [4, 3, 5], [2, 3, 5]];
cp = 13;

test = carPooling(trips, cp);
console.log('test: ', test);
