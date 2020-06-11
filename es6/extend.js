/*function Animal() {
  this.name = '动物' // 实例属性
}

Animal.prototype.say = function () {
  console.log('说话hello------')
}

// 1）继承实例属性
function Tiger() {
  Animal.call(this) // 调用父类构造函数，改变this指向
}

let tiger = new Tiger()
let name = tiger.name
console.log('------', name)*/


/*function Animal() {
  this.name = '动物' // 实例属性
}

Animal.prototype.say = function () {
  console.log('说话hello------')

  return 123
}

// 2）继承公共属性
function Tiger() {
  Animal.call(this) // 调用父类构造函数，改变this指向
}

Tiger.prototype.__proto__ = Animal.prototype

let tiger = new Tiger()
console.log('tiger.say------', tiger.say)*/

function Animal() {
  this.name = '动物' // 实例属性
}

Animal.prototype.say = function () {
  console.log('说话hello------')

  return 123
}

// 2）继承公共属性
function Tiger() {
  Animal.call(this) // 调用父类构造函数，改变this指向
}

// 3）Object.create方法实现继承公共属性
Tiger.prototype = Object.create(Animal.prototype, {constructor: {value: Tiger}})

/*function create(parentPrototype) {
  function Fn() {}
  Fn.prototype = parentPrototype

  return new Fn()
}

Tiger.prototype = create(Animal.prototype)*/

let tiger = new Tiger()
console.log('tiger.say方法------', tiger.constructor)


