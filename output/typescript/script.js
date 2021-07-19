"use strict";
var myRafi;
myRafi = function (name, age, occupation, isMarried) {
    if (isMarried === void 0) { isMarried = false; }
    return name + " " + age + " " + occupation + " " + isMarried;
};
console.log(myRafi('Rafia Rahman', 26, 'Craft Intsructor'));
