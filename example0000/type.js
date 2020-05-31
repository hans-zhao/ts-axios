// 枚举 null undefined  void never  子集 类型断言
var a = undefined;
var b = null;
var c = undefined;
var d = null;
function xx(s) {
    console.log('msg');
}
function yy() {
    throw new Error('xx');
}
function zz() {
    while (true) {
    }
}
function xyz() {
    return yy();
}
// 子集：子集类型可以赋给父级类型
// 联合类型
var un;
un = null;
// 断言
var oh = 'random val';
oh.length;
// 枚举 ：属性-》值， 值-》属性
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 4] = "green";
    Color[Color["blue"] = 5] = "blue";
})(Color || (Color = {}));
console.log(Color.green);
console.log(Color[5]);
