"use strict";
var Player = /** @class */ (function () {
    function Player(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    Player.prototype.play = function () {
        console.log(this.name + " from " + this.country + " is playing!");
    };
    return Player;
}());
var rafia = new Player('Rafia', 26, 'Bangladesh');
// rafia.play();
var lamia = new Player('Lamia', 45, 'Japan');
// lamia.play();
var players = [];
players.push(rafia, lamia);
console.log(players[0].name);
