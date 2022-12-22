//https://youtu.be/Fsp42zUNJYU?list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7
function User (email, name) {
    this.email = email;
    this.name = name;
}

function Admin (...args){  // It will store the arguments in object Admin as an array an then consoel .log will diplay that array
    //console.log(args)
    User.apply(this, args)
    this.role = 'superadmin'
}

User.prototype.login = function(){
    console.log(this.email, 'has logged in')
}

//for radmin we can inherit methods from User protoype

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(user){
    users = users.filter ( u => {
        return u.email != user.email
    })
}

var userOne = new User('abc@abc.com', 'abc');
var userTwo = new User('def@def.com', 'def');
var admin = new Admin('walt@walt.com', 'walt');

var users = [userOne, userTwo, admin];
admin.deleteUser(userTwo);
console.log(users);


