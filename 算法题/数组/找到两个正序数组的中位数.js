
// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

// 算法的时间复杂度应该为 O(log (m+n)) 。

// 中位数下标 奇数个  Math.ceil((m+n)/2) - 1,  偶数个  Math.ceil((m+n)/2) - 1,   Math.ceil((m+n)/2)
// 方法1  合并数组找到中位数
// 方法2  二叉树搜索 
function findMedianSortedArrays (nums1, nums2) {
  // 判断中位数位置
  const m = nums1.length;
  const n = nums2.length;
  const isOdd = (m + n) % 2 === 1;
  let i = 0;
  let j = 0;
  const mergetArray = [];
  while (i < m || j < n) {
    if (nums1[i] <= nums2[j]) {
      mergetArray.push(nums1[i ++]);
    } else {
      mergetArray.push(nums2[j ++]);
    }
  }
  if (isOdd) {
    midPositions = Math.floor((m + n) / 2);
    return mergetArray[midPositions];
  } else {
    midPositions = (m + n) / 2;
    console.log(midPositions, mergetArray);
    return (mergetArray[midPositions] + mergetArray[midPositions - 1]) / 2;
  }
}

// console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));


// 二分
function findMedianSortedArrays2 (nums1, nums2) {
  // 判断中位数位置
  const m = nums1.length;
  const n = nums2.length;
  const isOdd = (m + n) % 2 === 1;
  midPositions = Math.floor((m + n) / 2);
  let i = 0;
  let j = 0;
  let k 
}