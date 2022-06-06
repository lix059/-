


// 双指针滑动窗口
function lengthOfLongestSubstring(s) {
  if (s.length === 1) {
    return s.length;
  }
  let slidWindow = [];
  let i = 0;
  let j = 0;
  let max = 0;
  const strLen = s.length;
  while (j < strLen) {
    const currentChar = s.charAt(j);
    const currentIndex = slidWindow.indexOf(currentChar);
    if (~currentIndex) {   // ~-1 -> 0 , 此判断存在
      slidWindow.splice(0, currentIndex + 1);
      slidWindow.push(currentChar);
      j++;
    } else {
      slidWindow.push(currentChar);
      if (slidWindow.length > max) max = slidWindow.length;
      j++;
    }
  }
  return max;
}

// console.log(lengthOfLongestSubstring('abcabcbb'))
// console.log(lengthOfLongestSubstring('bbbb'))
// console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring(' '))

// O(n)
// O(1)