/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const list = [];
  nums.forEach((el, ix) => {
    const Newnums = nums.filter((e, index) => ix !== index);
    Newnums.map((i) => {
      const sum = el + i;
      if (sum === target) {
        list.push(ix);
      } return null;
    });
  });

  return list;
};
// @lc code=end
