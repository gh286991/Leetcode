/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = function (nums) {
  let curr = 0;
  let res = nums[0];

  nums.forEach((val) => {
    curr = curr > 0 ? curr + val : val;
    // 因為要找一段連續的最大的，所以用max判斷連續的時候有最大
    res = Math.max(res, curr);
  });

  return res;
};

// @lc code=end

const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(input));
