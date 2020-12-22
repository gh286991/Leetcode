/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0

    const helper = (node)=>{
        if(!node) return

        if(node.val <= high && node.val >=low){
            sum = sum + node.val
            helper(node.left)
            helper(node.right)
        }
        // else if(node.val < low){
        //     helper(node.right)
        // }else if(node.val > high){
        //     helper(node.left)
        // }
    }

    helper(root)
    return sum

};
// @lc code=end

