// 我们希望读取数据 node 异步 会等待同步代码都执行完成后再执行

const fs = require('fs')

let school = {}

// 并发的问题 如何解决 计数器
let index = 0
/*
function out () {
  if (index == 2) {
    console.log('school------', school)
  }
}

fs.readFile('name.txt', 'utf8', (err, data) => {
  school['name'] = data
  index++
  out()
})

fs.readFile('age.txt', 'utf8', (err, data) => {
  school['age'] = data
  index++
  out()
})
console.log('school------', school)

*/



/*const after = (times, fn) => () => --times === 0 && fn()

let newAfter = after(2, () => {
  console.log('school------', school)
})

console.dir('newAfter------', newAfter)



fs.readFile('name.txt', 'utf8', (err, data) => {
  school['name'] = data
  newAfter()
})

fs.readFile('age.txt', 'utf8', (err, data) => {
  school['age'] = data
  newAfter()
})*/



let e = {
  arr: [],
  on(fn){
    this.arr.push(fn)
  },
  emit(){
    this.arr.forEach(fn => fn())
  },
}

e.on(() => {
   console.log('ok------')
})

e.on(() => {
  if (Object.keys(school).length === 2) {
    console.log('school------', school)
  }
})

fs.readFile('name.txt', 'utf8', (err, data) => {
  school['name'] = data
  e.emit()
})

fs.readFile('age.txt', 'utf8', (err, data) => {
  school['age'] = data
  e.emit()
})
