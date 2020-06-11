// 1.解决并发 (同步多个异步方法的执行结果)
// 2.链式调用 (现获取 name，通过name再获取age) 解决多个回调嵌套的问题


// Promise是一个类
// 1.每次new 一个Promise 都需要传递执行器，执行器是立即执行的
// 2.执行器函数中有两个参数 resolve reject
// 3.默认Promise有三个状态 pending => resolve 表示成功 reject就是拒绝
// 4.如果一旦成功了 不能变成失败 一旦失败不能再成功了
// 5.每个Promise都有一个then方法

let Promise = require('./1.promise.js')
console.log('Promise------', Promise)

// let p = new Promise((resolve, reject) => {
//   resolve('我有钱')
// })
//
// p.then((data) => { // 成功的回调
//   console.log('data------', data)
// }, err => { // 失败的回调
//   console.log('err------', err)
// })
//
// p.then((data) => { // 成功的回调
//   console.log('data------', data)
// }, err => { // 失败的回调
//   console.log('err------', err)
// })
//
// p.then((data) => { // 成功的回调
//   console.log('data------', data)
// }, err => { // 失败的回调
//   console.log('err------', err)
// })
