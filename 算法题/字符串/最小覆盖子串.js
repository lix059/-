
// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

// 注意：

// 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。

// 示例 1：

// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"

// 滑动窗口
// 不断移动右指针，直到包含所有子串时，右指针停下，滑动左指针缩小范围，如果不包含，继续移动右指针直到包含。循环如上操作。

/**
 *  滑动窗口实现
 * @param {string} s 
 * @param {string} t 
 * @return {string}
 */
const minWindow = (s, t) => {
  if (!s || !t) {
    return '';
  }
  if (s.includes(t)) {
    return t;
  }
  const tCharMap = {
    restCharsNum: 0,
  };
  for (const char of t) {
    if (tCharMap[char]) {
      tCharMap[char] = tCharMap[char] + 1;
    } else {
      tCharMap[char] = 1;
    }
    tCharMap.restCharsNum = tCharMap.restCharsNum + 1;
  }
  let left = 0;
  let right = 0;
  let minLeft = 0;
  let minRight = s.length + 1;
  let currentChar;
  while (right < s.length) {
    currentChar = s[right];
    if (tCharMap[currentChar] || tCharMap[currentChar] === 0) {
      if (tCharMap[currentChar] > 0) {
        tCharMap.restCharsNum = tCharMap.restCharsNum - 1;
      }
      tCharMap[currentChar] = tCharMap[currentChar] - 1;
    }
    if (tCharMap.restCharsNum === 0) {
      while (left < right) {
        currentChar = s[left];
        if (tCharMap[currentChar] < 0) {
          tCharMap[currentChar] = tCharMap[currentChar] + 1;
          left++;
        } else if (tCharMap[currentChar] === 0) {
          if (right - left < minRight - minLeft) {
            minLeft = left;
            minRight = right;
          }
          tCharMap[currentChar] = 1;
          tCharMap.restCharsNum = 1;
          left++;
          break;
        } else {  // 不存在情况
          left++;
        }
      }
    }
    right++;
  }
  if (minRight === s.length + 1) {
    return '';
  }
  return s.slice(minLeft, minRight + 1);
}

//  s -> n  t -> m
// 空间复杂度O(m)  时间复杂度 O(m*n)