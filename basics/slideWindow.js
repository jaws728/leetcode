/**
 * TODO: 子数组最大平均数
 *   * 给一个整数数组，找出平均数最大且长度为k的下标连续的子数组，并输出该最大平均数。
 *   * 输入:[1,12,-5,-6,50,3], k =4输出:12.75
 *   * 最大平均数(12-5-6+50)/4 = 51/4 = 12.75
 */

// 滑动窗口：其实就是双指针的一种
// n是数组，k是窗口大小
const findMaxAverage = (n, k) => {
  let total = 0;
  // 先算出第一个窗口相加的总数
  for (let i = 0; i < k; i++) {
    total += n[i];
  }
  // 定义最大总和
  let max = total;
  //每次滑动窗口，减去前面一个窗口的第一个数，再加上当前窗口的最后一个数
  for (let i = k; i < n.length; i++) {
    total = total - n[i - k] + n[i];
    max = Math.max(max, total);
  }
  // 最后需要平均数，而不是所有相加数
  return max / k;
};

let test = [1, 12, -5, -6, 50, 3];
let k = 4;
console.log(findMaxAverage(test, k));
