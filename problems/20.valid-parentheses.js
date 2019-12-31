/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const map = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else if (map[s[i]] !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};
// @lc code=end

const input = '{[]}';

const ans = isValid(input);
console.log(ans);
