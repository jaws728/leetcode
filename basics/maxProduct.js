/**
 * TODO: 三个数的最大乘积
 *      * 整型数组nums中找出由三个数字组成的最大乘积,并输出该乘积(乘积不会越界)
 *      ! 重点: 线性扫描
 *
 * 存在的情况有三种:
 *  1. 全是正数: 求三个最大的乘积即可
 *  2. 全是负数: 同样也是求三个最大数的乘积
 *  3. 有正有负: 这时可以求 两个绝对值最大的负数 再乘上 最大的正数
 *
 * ! 提示: 可以先对数组进行排序
 */

// 基于排序算法: 时间复杂度为 O(nlogn)
const getMax = nums => {
  nums.sort();
  let len = nums.length;
  return Math.max(nums[len - 1] * nums[len - 2] * nums[len - 3], nums[0] * nums[1] * nums[len - 1]);
};

const test = [4, 3, 1, 2, 5]; // 5*4*3=60
console.log(getMax(test));

// ----------------------------------------------------------------

// 基于线性扫描: 主要思路就是将5个需要的数字找出来: 第一二三大值, 第一二绝对最大负值 -> 时间复杂度为 O(n)
const getMaxMin = nums => {
  // 可以先使用Number中的最大值和最小值作为阈值: 这样才具有可比性, 若是其他数字则是很难判断,而设置成最大最小就不容易出错
  let min1 = Number.MAX_SAFE_INTEGER,
    min2 = Number.MAX_SAFE_INTEGER;
  let max1 = Number.MIN_SAFE_INTEGER,
    max2 = Number.MIN_SAFE_INTEGER,
    max3 = Number.MIN_SAFE_INTEGER;

  nums.forEach(element => {
    // 找最小值: 此时需要注意先对比第一最小再对比第二最小
    if (element < min1) {
      min2 = min1;
      min1 = element;
    } else if (element < min2) {
      min2 = element;
    }
    // 找最大值: 与找最小值原理相同
    if (element > max1) {
      max3 = max2;
      max2 = max1;
      max1 = element;
    } else if (element > max2) {
      max3 = max2;
      max2 = element;
    } else if (element > max3) {
      max3 = element;
    }
  });
  return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};

console.log(getMaxMin(test));
