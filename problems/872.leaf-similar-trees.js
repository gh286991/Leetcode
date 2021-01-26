/*
 * @lc app=leetcode id=872 lang=javascript
 *
 * [872] Leaf-Similar Trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {

    const list1 = []
    const list2 = []
    
    const treeTrevel = (node, list)=>{
        if(!node) return
        if(node){

            if(!node.left && !node.right){
                list.push(node.val)
            }
            treeTrevel(node.left,list)
            treeTrevel(node.right,list)
        }
    }

    treeTrevel(root1, list1)
    treeTrevel(root2, list2)
    
    return JSON.stringify(list1) === JSON.stringify(list2)
};
// @lc code=end

