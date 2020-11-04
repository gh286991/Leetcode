/*
 * @lc app=leetcode id=1313 lang=javascript
 *
 * [1313] Decompress Run-Length Encoded List
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var decompressRLElist = function(nums) {
    
    const ansArray = []
    let temp
    nums.forEach( (item, index)=>{
        if(index % 2 === 0){
            temp = item
        }else{
            for (let i = 0; i < temp; i++) {
                ansArray.push(item)
            }
        }
    })

    return ansArray
};
// @lc code=end

