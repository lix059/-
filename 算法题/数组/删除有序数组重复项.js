

// 快慢指针
const removeDuplicates = (nums) => {
  if (nums.length === 0) {
    return 0;
  }
  let left = 1;
  let right = 1;
  const len = nums.length;
  while (right < len) {
    if (nums[right - 1] !== nums[right]) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }
}
