// 构造器接口和实例接口联合使用
// 函数
function createClock(ctor, h, m) {
    return new ctor(h, m);
}
// 实现
var DigitalClock = /** @class */ (function () {
    function DigitalClock() {
    }
    DigitalClock.prototype.tick = function () {
        console.log('beep');
    };
    return DigitalClock;
}());
var AnologClock = /** @class */ (function () {
    function AnologClock() {
    }
    AnologClock.prototype.tick = function () {
        console.log('tick');
    };
    return AnologClock;
}());
// 类似于class的属性传递实例，这里interface属性传递实现类
var d1 = createClock(DigitalClock, 12, 15);
d1.tick();
