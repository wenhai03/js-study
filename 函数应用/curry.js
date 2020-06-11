// 柯里化：就是将一个函数拆分成多个函数
// 判断类型 Object.prototype.toString.call

/*const checkType = (content, type) => {
  return Object.prototype.toString.call(content) === `[object ${type}]`
}

const b = checkType(123, 'Number')

console.log('b------', b)*/


const checkType = (type) => {
  return (content) => {
    return Object.prototype.toString.call(content) === `[object ${type}]`
  }
}

// 闭包
let types = ['Number', 'String', 'Boolean']

let utils = {}

types.forEach(type => {
  utils['is' + type] = checkType(type)
})

console.log('------', utils.isString('123'))
console.log('------', utils.isNumber(12341))


/*const add = (a, b, c, d, e) => a+b+c+d+e

add(1)(2)(3, 4)(5)*/

const add = (a, b, c, d, e) => a + b + c + d + e

// add(1)(2)(3, 4)(5)

const curring = (fn, arr = []) => {
  let len = fn.length

  return (...args) => {
    arr = arr.concat(args)

    if (arr.length < len) {
      return curring(fn, arr)
    }

    return fn(...arr)
  }
}

const r = curring(add)(1)(2)(3,4)(5)

console.log('r------', r)
