// 构造器接口和实例接口联合使用

// 定义一个实例接口
interface Clock {
    tick()
}

// 构造器接口
interface ClockConstructor {
    new (h: number, m: number): Clock
}

// 函数
function createClock(ctor: ClockConstructor, h: number, m: number): Clock {
    return new ctor(h, m)
}

// 实现
class DigitalClock implements Clock {
    tick(){
        console.log('beep')
    }
}

class AnologClock implements Clock {
    tick() {
        console.log('tick')
    }
}

// 类似于class的属性传递实例，这里interface属性传递实现类
const d1 = createClock(DigitalClock, 12, 15)
d1.tick()


// 接口继承 多继承


interface A {
    name: string
}

interface B {
    age: number
}

interface C extends A, B {
    weight: number
}

const da = {} as C
// da.age = 'x'


// 混合类型

interface Mix {
    (x: string) :number
    fuck(who: string): void
    atr: boolean
}

// 用于函数返回值类型

function counter(): Mix{
    const coun = function(s: string) {} as Mix
    coun.fuck = function(da: string){

    }
    coun.atr = true

    return coun
}

let xsa = counter()
xsa.atr = false

xsa('ww')
xsa.fuck('xsds')

// 实现是接口的特有的

// 接口继承类

