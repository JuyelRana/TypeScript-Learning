class Player {
    constructor(
        private name: string,
        public age: number,
        protected country: string) {
    }

    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }

}

const rafia = new Player('Rafia', 26, 'Bangladesh');
rafia.play();
const lamia = new Player('Lamia', 45, 'Japan');
// lamia.country = 'usa';

const players: Player[] = [];
players.push(rafia, lamia);
console.log(players[0].name);
