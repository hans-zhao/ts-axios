// class作为类型，指的是实例类型
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 如果一定要用类做类型，使用typeof class
// private protected static  abstract
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.age = 14;
        this.weight = 25;
    }
    return Person;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super.call(this, 'xx') || this;
    }
    Child.prototype.admin = function () {
        console.log(this.weight);
        return false;
    };
    return Child;
}(Person));
var cd = Child;
new cd().admin();
