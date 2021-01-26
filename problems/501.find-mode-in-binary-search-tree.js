/*
 * @lc app=leetcode id=501 lang=javascript
 *
 * [501] Find Mode in Binary Search Tree
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
 * @return {number[]}
 */
var findMode = function(root) {
    
    const map = {}
    const res = []
    let max = 0

    const treeTrevel = (node)=>{
        if(!node) return
        if(node.left ||node.right ){
            treeTrevel(node.left)
            treeTrevel(node.right)
        }

        if (!map[node.val]) {
            map[node.val] = 1;
            max = Math.max(1 , max)
          } else {
            map[node.val] = map[node.val] + 1;
            max = Math.max(map[node.val] , max)
          }
    }


    treeTrevel(root)

    Object.keys(map).forEach( item => {
        if(map[item] === max) res.push(item)
    })

    return res
};
// @lc code=end

