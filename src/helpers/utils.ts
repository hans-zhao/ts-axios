/* 
工具函数
*/

const toString = Object.prototype.toString


// 类型谓词 is 返回值也是布尔
export function isDate(val: any): val is Date{
    return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object{
    return val!==null && typeof val === 'object'
}