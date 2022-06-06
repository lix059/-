

// 中心扩展法

/**
 * 
 * @param {string} s 
 * @returns {string}
 */
const getLongestPalindrome = (s) => {
  const len = s.length;
  if (len === 1) return s;
  let longestStr = '';
  let tmp1;
  let tmp2;
  for (let i = 0; i < len; i++) {
    tmp1 = palindrome(s, i, i);   // 中间数唯一
    tmp2 = palindrome(s, i, i + 1); // 中间两个数对称
    if (tmp1.length > longestStr.length) {
      longestStr = tmp1;
    }
    if (tmp2.length > longestStr.length) {
      longestStr = tmp2;
    }
  }
  return longestStr;
}


function palindrome(s, l, r) {
  while (l >= 0 && r <= s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return s.slice(l + 1, r);
}

// 时间复杂度 O(n^2)   空间复杂度 O(1)



// 方案二  动态规划
// 推导 递推公式   d[i][j] = d[i+1]d[j-1] && s[i] === s[j]
// 画二维表 -> 横着从下往上遍历


const getLongestPalindrome2 = (s) => {
  const len = s.length;
  if (len === 1) return s;
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(0));
  let start = 0;
  let maxLen = 0;
  for (let left = len - 1; left >= 0; left--) {
    for (let right = left; right < len; right++) {
      if (s[left] === s[right]) {
        if (right - left < 3) {
          dp[left][right] = true;
        } else {
          dp[left][right] = dp[left + 1][right - 1];
        }
        if (dp[left][right] && right - left + 1 > maxLen) {
          maxLen = right - left + 1;
          start = left;
        }
      }
    }
  }
  return s.substring(start, start + maxLen);
}

