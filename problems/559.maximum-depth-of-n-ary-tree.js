/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    console.log(root.children)
    let max = 0
    const treeTrevel = (node, level)=>{
        if(!node) return
        if(node.children  ){
            treeTrevel(node.children , level)
            // treeTrevel(node.right, level)
            console.log(node.val)
        }

       
        level = level+1
        max = Math.max(level , max)
    }


    treeTrevel(root, 0)
    console.log(max)
};
// @lc code=end

