// 定义函数格式

// 类型推断

var saa:(param1: number, param2: number) => number = function(x: number, y: number){
    return x + y
}

// 左侧函数格式 (param1: number, param2: number) => number 的类型和右侧的函数定义的类型可以只写一边

// 它们可以自行推断

// 注意this指向


// 函数重载
// 先定义函数，再重载（实现）函数

function xx(pa: {x:string, y?:number}):void

// 重载的原因：函数定义时未作类型定义，调用时没法检查
function xx(){
    
}

// xx('xx')