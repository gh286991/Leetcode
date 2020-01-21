/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const Index = nums.indexOf(target)

    if(Index < 0){
        nums.push(target)
        nums.sort((a,b)=>a-b)
        
        return nums.indexOf(target)
    }

    return Index
};
// @lc code=end

const nums = [1,3,5,6]
const target = 2
console.log(searchInsert(nums,target))

