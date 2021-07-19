// array
// union types
let a: (string | number)[] = [];

a.push('1');
a.push(12);

console.log(a);

// union types
let b: (string | number);
b = 5;
console.log(b);
b = 'Sagun';
console.log(b);

// Object Types
let c: {
    name: string,
    age: number,
    occupation: string,
    isMarried: boolean
};

c = {
    name: 'Rafia',
    age: 26,
    occupation: 'Craft Instructor',
    isMarried: false
}

console.log(c);

let d: object;

d = [1, 2, 3, 4, 5];

console.log(d);
