// 模块 为什么要有模块？
// 按功能划分项目结构 可以包装命名不冲突，方便维护


import obj from "./a.js";

setInterval(() => {
   console.log('obj.a------', obj.a)
}, 1000)

