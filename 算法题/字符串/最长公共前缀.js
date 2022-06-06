
// 两两处理

/**
 * 
 * @param {string[]} strs
 * @return {string} 
 */
const getLongestCommonPrefix = (strs) => {
  if (strs.length === 1) {
    return strs[0];
  }
  let commonStr = getTwoStrPrefix(strs[0], strs[1]);
  for (let i = 2; i < strs.length; i++) {
    if (commonStr.length < 1) {
      return commonStr;
    }
    commonStr = getTwoStrPrefix(commonStr, strs[i]);
  }
  return commonStr;
}

const getTwoStrPrefix = (s1, s2) => {
  let i = 0;
  for (; i < s1.length && i < s2.length; i++) {
    if (s1[i] !== s2[i]) break;
  }
  if (i < 1) {
    return '';
  }
  return s1.slice(0, i);
}

// 时间复杂度：O(mn)O(mn)，其中 mm 是字符串数组中的字符串的平均长度，nn 是字符串的数量。  空间 O(1)