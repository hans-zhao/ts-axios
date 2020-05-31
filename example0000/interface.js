// 索引签名（或者类型断言）
function createSquare(config) {
    var newSquare = {
        color: 'white',
        area: 100
    };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = Math.pow(config.width, 2);
    }
    // null/ undefined /void是其他类型集合的子集
    // return null || undefined || void
    return newSquare;
}
var mySquare = createSquare({ color: 'black', width: 50 });
console.log("mySquare", mySquare);
