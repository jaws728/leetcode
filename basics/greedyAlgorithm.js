/**
 * ! 重点：贪心算法 --> 不断贪心的选取当前最优策略的计算方法(从局部最优出发，找到整体的求解)
 *    ! 贪心算法与动态规划的不同在于它对每个子问题的解决方案都做出选择，不能回退。
 *    ! 动态规划则会保存以前的运算结果，并根据以前的结果对当前进行选择，有回退功能。
 * TODO: 最长连续递增序列
 *    * 给定一个未经排序的整数数组,找到最长且连续递增的子序列,并返回该序列的长度。序列的下标是连续的
 */

const findMaxLength = n => {
  let max = 0,
    start = 0;
  for (let i = 1; i < n.length; i++) {
    max = Math.max(max, i - start + 1);
    if (n[i] <= n[i - 1]) {
      start = i;
    }
  }
  return max;
};

let arr = [1, 2, 3, 2, 3, 4, 5, 6, 7, 8]; //7
console.log(findMaxLength(arr));

/**
 * TODO: 柠檬水找零
 *    * 在柠檬水摊上,每一杯柠檬水的售价为5美元。
 *    * 顾客排队购买
 *    * 你的产品,一次购买一杯。
 *    * 每位顾客只买一杯柠檬水,然后向你付5美元、10美元或20美元。必须给每个顾客正确找零
 *    * 注意，一开始你手头没有任何零钱。
 *    * 如果你能给每位顾客正确找零，返回 true,否则返回false。
 */

const change = bills => {
  // 这里没有定义20块，因为在找钱中20块没有意义
  let five = 0,
    ten = 0;

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      five++;
    } else if (bills[i] === 10) {
      if (five === 0) return false; //无法给出找钱
      else {
        five--;
        ten++;
      }
    } else {
      if (five > 0 && ten > 0) {
        ten--;
        five--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(change([5, 5, 20]));

/**
 * TODO: 三角形的最大周长
 *    * 给定由一些正数(代表长度）组成的数组arr，返回由其中三个长度组成的、面积不为零的三角形的最大周长。
 *    * 如果不能形成任何面积不为零的三角形,返回0
 */

// 组成三角形条件：a+b > c
const largestPerimeter = arr => {
  arr.sort();
  for (let i = arr.length - 1; i >= 2; i--) {
    if (arr[i - 1] + arr[i - 2] > arr[i]) {
      return arr[i] + arr[i - 1] + arr[i - 2];
    }
  }
  return 0;
};

console.log(largestPerimeter([3, 6, 2, 3]));
