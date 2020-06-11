const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class Promise{
  constructor(executor){
    this.status = PENDING
    this.value = undefined
    this.reason = undefined

    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []


    let resolve = value => {
      if (this.status === PENDING) {
        this.value = value
        this.status = FULFILLED

        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }

    let reject = reason => {
      if (this.status === PENDING) {
        this.reason = reason
        this.status = REJECTED

        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }

    // 这里可能会发证异常
    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }

  }

  then(onFulfilled, onRejected){
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected(this.reason)
    }

    if (this.status === PENDING) {
      this.onResolvedCallbacks.push(() => {
         onFulfilled(this.value)
      })

      this.onRejectedCallbacks.push(() => {
        onFulfilled(this.reason)
      })
    }
  }
}


module.exports = Promise
