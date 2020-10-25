/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
const levelOrder = function (root) {
  const res = [];

  const search = (root, level) => {
    if (root) {
      if (res.length < level) {
        res.push([]);
      }

      const arr = res[level - 1];
      arr.push(root.val);
      search(root.left, level + 1);
      search(root.right, level + 1);
    } else return;
  };

  search(root, 1);

  return res;
};
// @lc code=end
