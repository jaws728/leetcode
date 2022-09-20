/**
 * TODO: 两数之和
 *        * 给定一个整数数组numbers, 从中找出两个数,满足相加之和等于目标数target
 *        * 假设: 每个输入只对应唯一的答案,而且不可以重复使用相同的元素
 *        * 返回: 两个数的下标值,以数组形式返回
 */

let numbers = [1, 2, 3, 4, 5, 6];
let target = 10;

// 暴力算法: 一个一个找 -> 时间复杂度为 O(n^2)
const sumBF = (numbers, target) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return [0];
};

console.log(sumBF(numbers, target));

// -----------------------------------------------------------

// 标记法: 只需要遍历一次数组 -> 原理就是将下标i的数和需要达到target所需要的数算出并进行标记
const sumPoint = (numbers, target) => {
  let map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      // 说明有该元素
      let key = target - numbers[i]; // 数字
      return [map.get(key), i];
    }
    // 若没有则放入 map 中
    map.set(numbers[i], i);
  }
  return [0];
};

console.log(sumPoint(numbers, target));

// -----------------------------------------------------------

// 有序数组

// 二分查找：binarySearch

const twoSearch = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let low = i,
      high = nums.length - 1;
    while (low <= high) {
      let mid = low + (high - low) / 2;
      if (nums[mid] === target - nums[i]) {
        return [i, mid];
      } else if (nums[mid] > target - nums[i]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  return [];
};

console.log(twoSearch(numbers, target));

// -----------------------------------------------------------

// 双指针

const twoPoint = (n, target) => {
  for (let i = 0, j = n.length; i < j; ) {
    let sum = n[i] + n[j];
    if (sum === target) {
      return [i, j];
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
  return [];
};

console.log(twoPoint(numbers, target));
