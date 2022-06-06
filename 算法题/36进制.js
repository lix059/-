
const CHAR0 = '0'.charCodeAt(0);
const CHAR9 = '9'.charCodeAt(0);
const CHARA = 'a'.charCodeAt(0);



function to36(num) {
  let rest = num % 36;
  let high = Math.floor(num / 36);
  const res = [getChar(rest)];
  while (high > 0) {
    rest = high % 36;
    high = Math.floor(high / 36);
    res.unshift(getChar(rest));
  }
  return res.join('');
}


// 方案一： 1. 转10进制
// 方案二： 2. 字符串位处理
function add36(str1, str2) {
  let idx = 0;
  let tmp1;
  let tmp2;
  let high = 0; // 进位
  let sum;
  const res = [];
  while (str1[idx] || str2[idx]) {
    tmp1 = getInt(str1[idx] || '0');
    tmp2 = getInt(str2[idx] || '0');
    sum = tmp1 + tmp2 + high;
    res.unshift(getChar(sum % 36));
    high = Math.floor(sum / 36);
    idx++;
  }
  if (high > 0) {
    res.unshift('1');
  }
  return res.join('');
}


function getInt(char) {
  const charCode = char.charCodeAt(0);
  if (charCode <= CHAR9) {
    return charCode - CHAR0;
  }
  return charCode - CHARA + 10;
}

function getChar(num) {
  if (num <= 9) {
    return num;
  }
  return String.fromCharCode(num - 10 + CHARA);
}


console.log(to36(111));
console.log(add36('b', '33'));