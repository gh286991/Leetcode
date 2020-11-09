/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  if (s.length != t.length) { return false; }

  const m = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!m.has(s[i])) { m.set(s[i], t[i]); } else if (m.get(s[i]) != t[i]) {
      return false;
    }
  }

  return new Set([...m.values()]).size == m.size;
};
// @lc code=end
