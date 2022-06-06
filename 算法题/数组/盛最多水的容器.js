

/**
 * 解法: 双指针，高度较低的依次向中间移动，有交集结束
 * @param {number[]} height 
 * @return {number}
 */
const maxArea = (height) => {
  if (height.length < 1) {
    return 0;
  }
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  let area;
  while (left < right) {
    area = Math.min(height[left], height[right]) * (right - left);
    if (max < area) max = area;
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}