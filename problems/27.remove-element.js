/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let i = 0;
  while (i < nums.length) {
    nums[i] === val ? nums.sXplice(i, 1) : i++;
  }

  return nums.length;
};

// 好像會去CHECK ARRAY的長度?
// FILTER不能用~~
// @lc code=end

const input = [3, 2, 2, 3];
const val = 3;
console.log(removeElement(input, val));
