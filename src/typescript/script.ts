import {Player} from "../classes/Player.js";

const rafia = new Player('Rafia Rahman', 26, 'Bangladesh');
rafia.play();
const lamia = new Player('Lamia', 45, 'Japan');
// lamia.country = 'usa';

const players: Player[] = [];
players.push(rafia, lamia);
// console.log(players[0].name);
