//ami jön: profile3 modern változata: class-sal

/*
function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}
*/

class User{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`
        // a class nem egy fü., ezért szüksége van egy metódusra, ami returnöl
    }
}

const profile4 = () => {
    const newUser = new User("Peter", "Hello");
    console.log(newUser);

    return <div>{newUser.fullName()}</div>
}

export default profile4
