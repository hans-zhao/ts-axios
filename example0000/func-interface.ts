// 函数类型的接口

interface SearchFunc {
    (search: string, subStr: string) :boolean
}

let mySearch: SearchFunc

mySearch = function(src: string, sub: string): boolean{
    return src.search(sub) > -1
}

console.log(mySearch('hello seeing ts', 'ts'))

// 冲突的情况
// 1.字符串和数字索引同时存在且包含不正确(字符串索引包含数字索引)
// 2.同类型的索引名：索引值类型不同

class Animal {
    age: number
}

class Dog extends Animal {
    breed: string
}

interface Mixin {
    // 11: 11,  
    [x: number]: Animal,
    // [y: string]: Dog,
    name: 'xx'
}

// let xxx: Mixin = {1: new Animal()}

// 数字的索引签名

interface Nm {
    [index: number]:string
}

const nm:Nm = ['xx']

// 只读的索引签名

interface ReadonlyInter {
    readonly [key: number]: string
}

let xxs:ReadonlyInter = ['x', 'e']


// xxs[1] = 5