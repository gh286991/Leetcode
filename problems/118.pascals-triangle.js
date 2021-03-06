/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  const pascal = [[1]];

  for (let i = 0; i < numRows - 1; i++) {
    const lastRow = pascal[i];
    const A = [0, ...lastRow];
    const B = [...lastRow, 0];
    const nextRow = A.map((num, i) => num + B[i]);

    pascal.push(nextRow);
  }

  return numRows >= 1 ? pascal : [];
};

// @lc code=end
