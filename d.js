// 标准
// 工业品 销售主管审批 抄送领导 财务
// 样品合同 发给文馨peter 抄送冬哥财务？销售主管 孙

// 非标
// 老模板 标准工业品
// 新模板 上级财务领导审批
// kl-pxdhgbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\
// 合同审批结束发给后勤3人 抄送给孙总销售主管

function isPalindrome(s) {
  let str = s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]/g, '');
  console.log(str, str.length);
  if (str !== null) {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
      // if (i === j) break
      console.log(str.charAt(i), j, str.charAt(j));
      if (str.charAt(i) !== str.charAt(j)) {
        return false;
      }
    }
  }
  return true;
}

// console.log(isPalindrome('A man, a plan, a canal: Panama'));

function floodFill(image, sr, sc, color) {
  // console.log(sr, sc, image);
  if (image[sr][sc] === color) return image;

  const fixColor = image[sr][sc];
  const dfs = (r, c) => {
    console.log(r, c);
    if (image[r][c] === fixColor && r > 0 && c > 0 && r < image.length && c < image[0].length) {
      image[r][c] = color;
      dfs(r - 1, c);
      dfs(r, c - 1);
      dfs(r + 1, c);
      dfs(r, c + 1);
    }
  };
  dfs(sr, sc);
  return image;
}

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
