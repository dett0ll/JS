//https://www.youtube.com/watch?v=_cgBvtYT3fQ&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&index=8
class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }

    login(){
        console.log(this.name, 'has logged in')
        return this
    }
    logout(){
        console.log(this.name,'has logged out')
        
    }
}

class Admin extends User {
    deleteUser(user){
        users = users.filter( u => {
            return u.email != user.email
        })
    }
}

var userOne = new User('abc@abc.com', 'abc');
var userTwo = new User('def@def.com', 'def');
var admin  = new Admin('walt@walt.com', 'walt')

admin.login();
var users = [userOne, userTwo];
console.log(users);
admin.deleteUser(userTwo);
console.log(users);
