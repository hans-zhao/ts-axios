var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullNam = firstName + ' ' + lastName;
    }
    return User;
}());
function greeter(who) {
    return 'hello ' + who.firstName + ' ' + who.lastName;
}
// var user:Person = {
//     lastName: 'seeing',
//     firstName: 'zhao'
// }
var user = new User('xin', 'servena');
console.log(greeter(user));
