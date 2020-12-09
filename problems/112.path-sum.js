/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  
    function helper(root, sum) {
        if (!root) {
          return false;
        }
        console.log('sum' , sum)
        if (!root.left && !root.right) {
          if (sum === root.val) {
            return true;
          } else {
            return false;
          }
        }
    
        return (
          helper(root.left, sum - root.val) || helper(root.right, sum - root.val)
        );
      }
      
      return helper(root, sum);
      
};
// @lc code=end

