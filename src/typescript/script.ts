type stringOrNumber = string | number;
type userType = { name: string, age: number, occupation: string, isMarried: boolean };


const userDetails = (
    id: stringOrNumber,
    user: userType
) => {
    console.log(`User id is ${id}, name is ${user.name} age is ${user.age} occupation ${user.occupation} and marital status ${user.isMarried ? "Married" : "UnMarried"}`)
}

const helloUser = (user: userType) => {
    console.log(`Hello ${user.age > 30 ? "Sir" : "Mr. "} ${user.name} `)
}

userDetails(1302058, {name: 'Rafia', age: 26, occupation: 'Craft Instructor', isMarried: false});

