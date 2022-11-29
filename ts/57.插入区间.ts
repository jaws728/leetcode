/*
 * @lc app=leetcode.cn id=57 lang=typescript
 *
 * [57] 插入区间
 */

// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
  let i= 0;
  let res: number[][] = []

  // 1. 找到需要合并的区间
  while (i < intervals.length && intervals[i][1] < newInterval[0]){
    res.push(intervals[i++])
  }

  // 2. 处理合并区间
  while (i < intervals.length && intervals[i][0] <= newInterval[1]){
    newInterval[0] = Math.min(newInterval[0], intervals[i][0])
    newInterval[1] = Math.max(newInterval[1], intervals[i][1])
    i++
  }
  res.push(newInterval)

  // 3. 处理合并区间之后的区间
  while (i < intervals.length){
    res.push(intervals[i++])
  }

  return res
};
// @lc code=end

