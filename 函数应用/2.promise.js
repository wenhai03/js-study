// 链式调用 如果返回一个普通值 会走下一个then的成功
// 抛出错误 then失败的方法
// 如果是promise 就让promise执行采用他的状态
// 是返回一个新的promise 来实现链式调用

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
