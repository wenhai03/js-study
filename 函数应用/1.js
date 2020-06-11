// 高阶函数
// 一个函数的参数是一个函数
// 一个函数返回一个函数 (拆分函数)

Function.prototype.before = function (beforeFn) {
 return (...args) => { // 箭头函数中没有this指向 没有argument 所以会向上级作用域查找
   beforeFn()
   console.log('this------', this===say)
   this(...args)
 }
}

// AOP 切片 装饰 把核心功能抽泣出来 在核心基础上增加功能
const say = (...args) => { // 剩余运算符把所有的参数组成一个数组
   console.log('说话------', args)
}

const newSay = say.before(() => {
   console.log('天气很好------')
})

newSay(1,2,3)
