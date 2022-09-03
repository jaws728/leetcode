// 与爬楼梯原理一致

let fibonacci = n => {
  return recursive(n, new Map())
}

let recursive = (n, m) => {
  if (n === 0) return 0
  if (n === 1) return 1
  
  if (m.has(n)) return m.get(n)

  res = recursive(n-2) + recursive(n-1)
  m.set(n, res)
  return res
}

let loop = n => {
  if (n === 0) return 0
  if (n === 1) return 2

  let temp = 0
  let prepre = 1
  let pre = 2

  for(let i = 2; i < n; i++){
    temp = prepre + pre
    prepre = pre
    pre = temp
  }

  return temp
}