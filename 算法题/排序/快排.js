
// 排序 n 个项目要 Ο(nlogn) 次比较。在最坏状况下则需要 Ο(n2) 次

// 快速排序

function quickSort(arr, start, end) {
  if (arr.length < 2) {
    return arr;
  }
  if (start < end) {
    const partitionIdx = partition(arr, start, end);
    // console.log(partitionIdx);
    quickSort(arr, start, partitionIdx - 1);
    quickSort(arr, partitionIdx + 1, end);
  }
}


function partition(arr, left, right) {
  const poit = arr[left];
  let start = left + 1;
  let idx = start;
  while (start <= right) {
    if (arr[start] < poit) {
      swap(arr, start, idx);
      idx++;
    }
    start++;
  }
  swap(arr, left, idx - 1);
  return idx - 1;
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

const arr = [5, 4, 1, 2, 3];
quickSort(arr, 0, arr.length);
console.log(arr);