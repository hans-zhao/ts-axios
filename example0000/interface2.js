// 接口大致有三种类型定义：实例类型、构造器类型、函数类型
// 如果同时含有多个类型  =》混合类型
// 实例类型：属性和命名函数（即方法）
// 构造器类型：new ()
// 函数类型：匿名函数
// 类可以实现接口
// 注意：构造器属于类的静态方法
// 实现接口时只会检查实例属性
var XX = /** @class */ (function () {
    function XX() {
        this.name = 'x';
    }
    return XX;
}());
console.log(XX.constructor());
