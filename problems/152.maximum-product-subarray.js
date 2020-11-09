/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  let res = nums[0];
  let n_max = 1;
  let n_min = 1;

  nums.forEach((val) => {
    // curr = curr > 0 ? curr * val : val;
    // 因為要找一段連續的最大的，所以用max判斷連續的時候有最大
    if (val < 0) {
      const temp = n_max;
      n_max = Math.max(n_min * val, val);
      n_min = Math.min(temp * val, val);
    } else {
      n_max = Math.max(n_max * val, val);
      n_min = Math.min(n_min * val, val);
    }

    res = Math.max(n_max, res);
  });

  return res;
};
// @lc code=end
