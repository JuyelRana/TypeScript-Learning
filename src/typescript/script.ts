let myRafi: Function;

myRafi = (name: string, age: number, occupation: string, isMarried: boolean = false): string => {
    return name + " " + age + " " + occupation + " " + isMarried;
}

console.log(myRafi('Rafia Rahman', 26, 'Craft Intsructor'));


