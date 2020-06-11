const after = (times, fn) => {
  return () => {
     if (--times === 0) {
       fn()
     }
  }
}

const newAfter = after(3, () => {
   console.log('三次后调用------')
})

newAfter();
newAfter();
newAfter();
