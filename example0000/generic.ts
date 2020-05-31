// 泛型
// 泛型函数、（带）泛型接口、泛型类

// 函数的字面量写法

// 以下函数可称为泛型(函数)
function func1 <T>(arg: T):T{
    return arg
}
// 类型推断

func1<number>(2323)

func1('xx') // 类型自动推断，不用写泛型

// 利用泛型
function func2 <U>(arg: U[]):U[]{
    return arg
}

// 泛型接口

function identity<Y>(arg: Y):Y{
    return arg
}

let myIdentity: <X>(arg: X) => X = identity
// 字面量写法
let id1: {<C>(arg:C) : C} =identity

// 抽取函数定义为接口

interface Id1 {
    <O>(arg: O): O
}

// 进一步处理
interface Id2<G> {
    (org: G): G
}

// 给泛型接口传参
let id2: Id2<number> = identity


// 泛型约束：即让泛型继承某个接口/类

interface FunPa {
    length: 2
}

function func3<T extends FunPa>(arg: T):T{
    console.log(arg.length)
    return arg
}

// 同时拥有多个泛型


function func4<T, U extends keyof T>(arg1: T, arg2: U):T[U]{
    return arg1[arg2]
}

func4({'a': 1, 'b':2}, 'a')

// 构造函数作为参数

function func5<T>(c: new()=>T):T{
    return new c()
}
