/*function uncurring(fn) {
  return function(context){
    return fn.call(context)
  }
}

let toString = uncurring(Object.prototype.toString)

let r = toString({name: 'zf'})
console.log('r------', r)*/

function uncurring(fn) {
  return function(context, ...args){
    return fn.call(context, ...args)
  }
}

let join = uncurring(Array.prototype.join)

let r = join([1,2,3], ':')
console.log('r------', r)
