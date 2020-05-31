// class作为类型，指的是实例类型

// 如果一定要用类做类型，使用typeof class

// private protected static  abstract
abstract class Person {
    name: string
    private age: number
    protected weight: number
    static sex: string
    constructor(name: string){
        this.name = name
        this.age = 14
        this.weight = 25
    }
    abstract admin(xx?: Object): boolean
}

class Child extends Person{
    admin(){
        console.log(this.weight)
        return false
    }
    constructor(){
        super('xx')
    }
}

let cd:typeof Child = Child

new cd().admin()