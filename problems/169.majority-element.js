/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const map = {};
  let ans;

  if (nums.length === 1) return nums[0];

  nums.forEach((item) => {
    if (!map[item]) {
      map[item] = 1;
    } else {
      map[item] = map[item] + 1;
      if (map[item] >= nums.length / 2) {
        ans = item;
      }
    }
  });

  console.log(map)

  return ans;
};

// const data = [2,2,1,1,1,2,2]

// majorityElement(data)
// @lc code=end
