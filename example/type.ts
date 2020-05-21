// 枚举 null undefined  void never  子集 类型断言

var a:null = undefined
var b:null = null
var c:undefined = undefined
var d:undefined = null

function xx(s: string):void{
    console.log('msg')
}

function yy():never{
    throw new Error('xx')
}

function zz():never{
    while(true){

    }
}


function xyz():never{
    return yy()
}

// 子集：子集类型可以赋给父级类型

// 联合类型
var un: string | null
un = null

// 断言
var oh:any = 'random val';
(oh as string).length;

// 枚举 ：属性-》值， 值-》属性


enum Color {
    red,
    green = 4,
    blue
}

console.log(Color.green)
console.log(Color[5])