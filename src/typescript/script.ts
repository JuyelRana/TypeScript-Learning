// Any type variables
let a: any;

a = 20;


a = {
    name: 'Rafia',
    age: a,
    occupation: 'Craft Instructor',
    isMarried: false
}

console.log(a);

a = "Juyel Rana";

console.log(a);


let b: any[] = [];

b.push(1);
b.push('Rafia');
b.push(26);
b.push({
    name: 'Rafia',
    age: 26,
    occupation: 'Craft Instructor',
    isMarried: false
});

console.log(b);
