

/**
 * hashMap 解法
 * @param {number[]} nums 
 * @return {number}
 */
const longestConsecutive = function (nums) {
  if (nums.length < 1) {
    return 0;
  }
  const map = {};
  const calMap = {}; // 判断是否已计算过
  nums.forEach(o => map[o] = 1);
  let count = 1;
  let tmp;
  let max = 1;
  for (const num of nums) {
    tmp = num + 1;
    while (map[tmp]) {
      if (calMap[tmp]) {
        count = calMap[tmp] + count;
        calMap[num] = count;
        break;
      } else {
        delete map[tmp];
        count++;
        tmp++;
      }
    }
    if (count > max) max = count;
    if (!calMap[num]) calMap[num] = count;
    count = 1;
  }
  return max;
};

console.log(longestConsecutive([0, 0, 1, -1]));

// O(mn) O(n)