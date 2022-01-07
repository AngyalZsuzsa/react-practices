//ami jön: hogyan tudunk objkat létrehozni példányosítással
function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

const profile3 = () => {
    const newUser = new User("Anna", "Kukucs");
    console.log(newUser);

    return <div>{newUser.fullName()}</div>
}

export default profile3
