/**
 * *素数：只能被1以及自身整除的自然数
 * TODO: 统计n以内的素数个数(除了0、1以外) -- 埃筛法
 * 比如：输入100，输出为25
 */

let bf = n => {
  // 暴力算法
  let count = 0

  for (let i = 2; i < n; i++){
    count += isPrime(i)
  }

  return count
}

let isPrime = n => {
  // i*i代替了根号n，因为5*2 = 2*5 判断过的没有必要再次判断
  for (let i = 2; i * i < n; i++){
    if (n % i === 0){
      return 0
    }
  }
  return 1
}

console.log(bf(100)) // 25

let eratosthenes = n => {
  // 埃氏筛法
}