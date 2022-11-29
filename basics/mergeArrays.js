/**
 * TODO: 合并两个有序数组
 *   * 两个有序整数数组nums1和nums2，将nums2合并到nums1中，使nums1成为一个有序数组。
 *   * 初始化nums1和nums2的元素数量分别为m和n。
 *   * 假设nums1的空间大小等于m+n,这样它就有足够的空间保存来自nums2的元素。
 */

const merge = (n1, m, n2, n) => {
  // console.log(n1.slice(m, m + n));
  n1.splice(m, n, ...n2);
  n1.sort();
  return n1;
};

let nums1 = [1, 3, 5, 7, 9, 0, 0, 0, 0];
let nums2 = [2, 4, 6, 8];
// console.log(merge(nums1, 5, nums2, 4));

const merge1 = (n1, m, n2, n) => {
  let n11 = n1.slice(0);
  for (let i = 0, j = 0, k = 0; k < m + n; k++) {
    if (i < m && j < n) {
      n1[k] = n11[i] < n2[j] ? n11[i++] : n2[j++];
    } else if (i < m) {
      n1[k] = n11[i++];
    } else if (j < n) {
      n1[k] = n2[j++];
    }
  }
  return n1;
};

// console.log(merge1(nums1, 5, nums2, 4));

// 双指针：从后往前
const twoPoints = (n1, m, n2, n) => {
  let p1 = m - 1,
    p2 = n - 1,
    p = m + n - 1;
  while (p >= 0) {
    // console.log(n1);
    if (p1 >= 0 && p2 >= 0) {
      n1[p--] = n1[p1] < n2[p2] ? n2[p2--] : n1[p1--];
    } else if (p1 >= 0) {
      n1[p--] = n1[p1--];
    } else if (p2 >= 0) {
      n1[p--] = n2[p2--];
    }
  }

  // if (p1 >= 0) {
  //   n1.splice(0, p + 1, n1.slice(0, p1 + 1));
  // }
  // if (p2 >= 0) {
  //   n1.splice(0, p + 1, n2.slice(0, p2 + 1));
  // }
  return n1;
};

console.log(twoPoints(nums1, 5, nums2, 4));
