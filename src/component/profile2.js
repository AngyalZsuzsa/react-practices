import React from 'react'

const profile2 = () => {
    const user = {
        firstName: "Anna",
        lastName: "Kiss"
    }
    /*
    const firstName = user.firstName;
    const lastName = user.lastName;
    */

    const {firstName, lastName} = user;

    return <div>
        <h2>{firstName}</h2> 
        <h3>{lastName}</h3> 
    </div>
}

//ami jön: hogyan tudunk objkat létrehozni példányosítással
function User(firstName, lastName) {
    this.firstName = firstName;

}

export default profile2
