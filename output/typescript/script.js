"use strict";
var add;
add = function (a, b) {
    return a + b;
};
console.log(add(12, 13));
var calc;
calc = function (a, b, c) {
    if (c === 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calc(5, 4, 'add'));
var userInfo;
userInfo = function (id, user) {
    console.log(id, user);
};
userInfo(1302058, { name: 'Rafia', age: 26 });
