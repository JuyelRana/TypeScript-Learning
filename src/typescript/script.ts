let add: (a: number, b: number) => number;

add = (a: number, b: number) => {
    return a + b;
}
console.log(add(12, 13));

let calc: (a: number, b: number, c: string) => number;

calc = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    } else {
        return a - b;
    }
}

console.log(calc(5, 4, 'add'));


let userInfo: (id: (number | string), user: {
    name: string,
    age: number,
    occupation?: string,
    isMarried?: boolean
}) => void;

userInfo = (id, user) => {
    console.log(id, user);
}

userInfo(1302058, {name: 'Rafia', age: 26});

