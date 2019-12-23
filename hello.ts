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

enum Color {Red = 1, Green, Blue}
let colorName: string = color[2];
console.log(colorName);

let notSure: any = 4;
notSure = "maybe";
notSure = false;

