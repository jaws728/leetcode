/*
 * @lc app=leetcode.cn id=733 lang=typescript
 *
 * [733] 图像渲染
 */

// @lc code=start
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  if (image[sr][sc] === color) return image

  const fixColor = image[sr][sc]
  const dfs = (r:number ,c:number) => {
    // if (image[r][c] !== fixColor || r < 0 || c < 0 || r >= image.length || c >= image[0].length) return
    if (image[r][c] === fixColor && r >= 0 && c >= 0 && r < image.length && c < image[0].length) {
      image[r][c] = color;
      dfs(r - 1, c);
      dfs(r, c - 1);
      dfs(r + 1, c);
      dfs(r, c + 1);
    }
  }
  dfs(sr,sc)
  return image
};

// @lc code=end

