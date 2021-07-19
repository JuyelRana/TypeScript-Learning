"use strict";
var userDetails = function (id, user) {
    console.log("User id is " + id + ", name is " + user.name + " age is " + user.age + " occupation " + user.occupation + " and marital status " + (user.isMarried ? "Married" : "UnMarried"));
};
var helloUser = function (user) {
    console.log("Hello " + (user.age > 30 ? "Sir" : "Mr. ") + " " + user.name + " ");
};
userDetails(1302058, { name: 'Rafia', age: 26, occupation: 'Craft Instructor', isMarried: false });
