var message: string = 'Hello World';
console.log(message);

let isDone: boolean = false;
let decimal: number = 10;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "red";
color = 'white';

let apple: number[] = [1, 2, 3];
let arr: Array<number> = [1, 2, 3];

let x: [string, number];
x = ["hello", 100];
// x = [200, "hello"]; // error
console.log(x[0].substring(1));

// enum Color {Red=1, Blue, Green}
// let c: Color = Color.Green;

enum Color {Red = 1, Green, Blue};
let colorName: string = color[2];
console.log(colorName);

let notSure: any = 4;
notSure = "maybe";
notSure = false;

// let notSures: any = 4;
// notSures.ifItExists();
// notSures.toFixed();

let lists: any[] = [1, true, "free"];
lists[1] = 100;

var name:string = "John"; 
var score1:number = 50;
var score2:number = 42.50;
var sum = score1 + score2;

console.log("name"+name); 
console.log("first score: "+score1);
console.log("second score: "+score2); 
console.log("sum of the scores: "+sum);

