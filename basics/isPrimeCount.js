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
    // 如果不是素数：会被整除
    if (n % i === 0){
      return 0
    }
  }
  return 1
}

console.log(bf(100)) // 25


/**
 * 埃氏筛法的根本就是将所有已所知遍历过的数，乘上2的倍数（i*2），定是合数，从而减少循环次数
 * @param {*} n 范围：0-n
 * @returns count 返回n中多少个素数
 */
let eratosthenes = n => {
  // 埃氏筛法
  let isPrime = new Array(n).fill(1) // 1表示素数，0表示合数/非素数
  let count = 0

  for (let i = 2; i < n; i++){
    if (isPrime[i] !== 0){
      count++
      for (let j = i*i; j < n; j+=i){ // 优化：i*i <- i*2
        isPrime[j] = 0
      }
    }
  }
  return count
}

console.log(eratosthenes(100)) // 25