// 两个数组合并,

// [1, 2, 3, 3, 4, 4, 4]
// [0, 3, 3, 3, 3, 4,  5]
// 合并输出 [0, 1, 2, 3, 3, 3, 3, 4, 4, 4, 5 ] 保留多的

function mergeArr(a1, a2) {
  let i = 0;
  let j = 0;
  const res = [];
  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      res.push(a1[i]);
      i++;
    } else if (a1[i] === a2[j]) {
      res.push(a1[i]);
      i++;
      j++;
    } else {
      res.push(a2[i]);
      j++;
    }
  }
  return res.concat(a1.slice(i - 1)).concat(a2.slice(j - 1));
}

console.log(mergeArr([1, 2, 3, 3, 4, 4, 4], [0, 3, 3, 3, 3, 4, 5]));