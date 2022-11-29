/**
 * TODO: 总共有n枚硬币，将它们摆成一个阶梯形状，第k行必须正好有k枚硬币
 *  * 给定一个数字n，找出可形成完整阶梯行的总行数
 *  * n是一个非负整数，并且在32位有符号整型的范围内
 */

// 迭代方法
const arrangeCoins = n => {
  for (let i = 1; i <= n; i++) {
    n = n - i;
    if (n < i) return i;
  }
  return 0;
};

console.log(arrangeCoins(10));

// 二分查找: x! == (x^2 + x) / 2 --> 1+2+3 == 4 --> 也就是说1+...n-1 == n --> 找到 n-1
const binSearchCoins = n => {
  let low = 0,
    high = n;
  while (low <= high) {
    let mid = Math.round(low + (low - high) / 2);
    let cost = ((mid + 1) * mid) / 2;
    if (n === cost) return mid;
    else if (n < cost) high = mid - 1;
    else low = mid + 1;
  }
  return high;
};

console.log(binSearchCoins(10));

// 牛顿迭代：fx = (x^2 + x)/2 = n <=> x = sqrt(2n - x) 可以用来快速求解函数零点的方法 => (x + fx/x)/2
const newtonIterate = n => {
  if (n === 0) return 0;
  return Math.round(fx(n, n));
};

const fx = (x, n) => {
  let res = (x + (2 * n - x) / x) / 2;
  if (res === x) {
    return res;
  } else {
    return fx(res, n);
  }
};

console.log(newtonIterate(10));
