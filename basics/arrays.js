/**
 * TODO：删除排序数组中的重复项
 *      * 一个有序数组nums，原地删除重复出现的元素，使每个元素只出现一个，返回删除后的新长度
 *      ! 不能使用额外空间：空间度 O(1)
 *      考察：双指针算法
 * E.g. IN: [0,1,2,2,3,3,4], OUT: 5
 */

let removeDuplicates = nums => {
  let i = 0
  for (let j = 1; j < nums.length; j++){
    // 如果前一个跟后一个数字一样，则不移动慢光标
    if (nums[i] !== nums[j]){
      i++
      nums[i] = nums[j]
    }
  }
  return ++i
}

let arr = [0,1,2,2,3,3,4]
console.log(removeDuplicates(arr))

/**
 * TODO: 寻找数组的中心下标
 *       * 给一个整数数组nums，编写出能够返回数组中心下标的方法
 *       * 中心下标：数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和
 *       * 如果不存中心下标，返回-1，若有多个应该返回最左边的
 * ! 中心下标有可能出现在数组的两端
 */

let pivotIndex1 = nums => {
  let left = 0, right = 0
  for (let i = 0, j = nums.length; i < j;){
    left += nums[i]
    right += nums[j]

    if (left < right) {
      i++
    } else if (left > right) {
      j--
    } else {
      if (++i === --j){
        return i
      }
    }
  }
  return -1
}

let pivotIndex = nums => {
  let sum = nums.reduce((a,b) => a+b)
  let left = 0
  for (let i = 0; i < nums.length; i++){
    left += nums[i]
    if (left === sum) {
      return i
    }
    sum -= nums[i]
  }
}

let pivotTest = [1,7,3,6,5,6] // 3
console.log(pivotIndex(pivotTest)) //3