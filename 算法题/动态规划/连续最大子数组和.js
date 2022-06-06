// 评价：描述信息 输出一个 int 型数组的最大连续子数组（所有元素加和最大）各个元素之和 保证数组中至少有一个正数
// 入参： [1,2,5,-7,8,-10,13, 1]; 
// 输出： 14

// 动态规划  f(i)=max{f(i−1)+nums[i],nums[i]}


/**
 * 
 * @param {number[]} nums 
 * @return {number}
 */
const maxSubArray = function (nums) {
  let pre = 0;
  let maxArr = nums[0];
  nums.forEach(item => {
    pre = Math.max(pre + item, item);
    maxArr = Math.max(maxArr, pre);
  });
  return maxArr;
}