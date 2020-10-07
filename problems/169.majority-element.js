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
var majorityElement = function(nums) {
    const map = {}
    let ans

    nums.forEach( (item ) => {
        if(!map[item]){
            map[item] = 1
        }else{
            map[item] = map[item] +1
            if( map[item] >= nums.length/2){
                ans = item
            }
        }
    })

    return ans

};

// const data = [2,2,1,1,1,2,2]

// majorityElement(data)
// @lc code=end

