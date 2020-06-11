class Subject{ // 被观察者 小宝宝
  constructor(name){
    console.log('name------', name)
    this.arr = []
    this.state = '我很开心'
  }
  attach(o){ // 原型上的方法
    this.arr.push(o)
  }
  setState(newState){
    this.state = newState

    this.arr.forEach( o => o.update(newState))
  }
}

class Observer{ // 观察者 我 我媳妇
  constructor(name){
    this.name = name
  }
  update(newState){
    console.log('状态------', this.name + '小宝宝' + newState)
  }
}

const s = new Subject('小宝宝')
const o1 = new Observer('我')
const o2 = new Observer('我媳妇')

s.attach(o1)
s.attach(o2)

s.setState('不开心')
