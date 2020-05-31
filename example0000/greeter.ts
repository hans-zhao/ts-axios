class User {
    // 类的全局public属性
    firstName: string;
    lastName: string;
    fullNam: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName
        this.fullNam = firstName + ' ' + lastName
    }
}

interface Person {
    firstName: string,
    lastName: string
}


function greeter(who: Person){
    return 'hello ' + who.firstName + ' ' + who.lastName
}
// var user:Person = {
//     lastName: 'seeing',
//     firstName: 'zhao'
// }
var user = new User('xin', 'servena')
console.log(greeter(user))