// 接口继承类

// 接口的实现

class C1 {
    private sa: string
}

// 接口继承类，会继承私有的属性
// 但是私有的属性无法实现,因此会报错
interface I1 extends C1 {
    xs: number
}

class Xx implements I1{
    xs: number
    // sa: 'ss'
}