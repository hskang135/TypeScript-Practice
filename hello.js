var message = 'Hello World';
//console.log(message);
var isDone = false;
var decimal = 10;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var color = "red";
color = 'white';
var apple = [1, 2, 3];
var arr = [1, 2, 3];
var x;
x = ["hello", 100];
// x = [200, "hello"]; // error
//console.log(x[0].substring(1));
// enum Color {Red=1, Blue, Green}
// let c: Color = Color.Green;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var colorName = color[2];
//console.log(colorName);
var notSure = 4;
notSure = "maybe";
notSure = false;
// let notSures: any = 4;
// notSures.ifItExists();
// notSures.toFixed();
var lists = [1, true, "free"];
lists[1] = 100;
var name = "John";
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
;
var addressBook = [];
var Contact = {
    name: "Heesu",
    email: "hskang135@gmail.com",
    phone: "201-903-6879"
};
addressBook.push(Contact);
console.log(Contact);
