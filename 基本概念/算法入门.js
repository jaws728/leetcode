/*
  0. 算法效率：
    - 时间复杂度：算法运行时间，O(1) < O(logn) < O(n^2) ... logn代表log2(n)
      - 判断：确定问题规模n，循环减半则logn，n的循环层次k
    - 空间复杂度：算法占用的内存大小
      - 判断：几个变量则O(1)，一维列表则O(n)，m行n列的二维列表则O(mn)

  1. 递归：
    - 递归条件：调用自身、结束条件
    - 汉诺塔问题：H(n) = H(n-1) + 1 + H(n-1)
    - 空间复杂度：递归的次数

  2. 列表查找
    - 顺序查找/Linear search：从头到尾进行查找，直到找到为止
    - 二分查找/Binary search：从有序列表候选区的[0:n]开始，依次与中间值对比，每次可让候选区减少一般

  3. 列表排序: 
    - Low：冒泡排序、插入排序、选择排序
      - 时间复杂度：O(N^2)
      - 空间复杂度：O(1)
      - 原地排序
    - High：快速排序、堆排序、归并排序
      - 时间复杂度：O(nlogn)
      - 空间复杂度：除堆排序为O(1)，最坏都是O(n)，快速排序平均为O(nlogn)主要看递归
*/

// 冒泡排序
function bubbleSort(arr){
  if (arr.length < 2) return arr
  for (let i = 0; i<arr.length; i++){
    for (let j = 0; j<arr.length-i; j++){
      if (arr[j] > arr[j+1]){
        let tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp
      }
    }
  }
  return arr
}

// 选择排序
function selectSort(arr){
  if (arr.length < 2) return arr
  for (let i = 0; i<arr.length - 1; i++){
    let min = i
    for (let j = i + 1; j<arr.length; j++){
      if (arr[j] < arr[min]){
        min = j
      }
    }
    let tmp = arr[i]
    arr[i] = arr[min]
    arr[min] = tmp
  }
  return arr
}

// 插入排序
function insertSort(arr){
  if (arr.length < 2) return arr
  for (let i = 1; i < arr.length; i++){
    for (let j = i - 1; j > -1; j--){
      if (arr[j] <= arr[j+1]){
        break
      }
      let tmp = arr[j+1]
      arr[j+1] = arr[j]
      arr[j] = tmp
    }
  }
  return arr
}

// 快速排序
function partition(arr, left, right){
  let tmp = arr[left]
  while (left < right){
    console.log(left, right)
    while ((arr[right] >= tmp) && (left < right)){
      right--
      console.log(right);
    }
    // console.log(arr, 'right ', right)
    arr[left] = arr[right]
    while ((arr[left] <= tmp)  && (left < right)){
      left++
    }
    arr[right] = arr[left]
    // console.log(arr, 'left ', left)
  }
  arr[left] = tmp
  return left
}
function quickSort(arr, left, right){
  if (left < right){
    let mid = partition(arr, left, right)
    quickSort(arr, left, mid - 1) // 递归
    quickSort(arr, mid + 1, right)
  } 
  return arr
}

// 

/*
  4. 数据结构：
    （1）树：根节点、叶子节点、数的深度（高度）、树的度、孩子节点、父节点、子树
      - 二叉树：度不超过2的树，孩子分为左孩子节点和右孩子节点，存储方式分 顺序存储 与 链式存储
*/


//############## TEST FUNCTIONS ##############

function rangeArr(k, start){
  return [...Array(k).keys()].map(i => i + start)
}
function randomArr(k, start){
  return [...Array(k).keys()].map(e => Math.random() * k | 0)
}

//############## TESTS ##############

// let li = [6,4,3,5,2,5,1,5,9]
// console.log(insertSort(li))
// console.log(quickSort(li, 0, li.length - 1))

let arr = randomArr(50, 3)
console.log(insertSort(arr))