class Player {
    name: string;
    age: number;
    country: string;

    constructor(name: string, age: number, country: string) {
        this.name = name;
        this.age = age;
        this.country = country
    }

    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }

}

const rafia = new Player('Rafia', 26, 'Bangladesh');
// rafia.play();
const lamia = new Player('Lamia', 45, 'Japan');
// lamia.play();

const players: Player[] = [];
players.push(rafia, lamia);
console.log(players[0].name);
