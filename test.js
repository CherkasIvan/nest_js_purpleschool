"use strict";
const a = 5;
let b = 4;
let c = "Ivan";
let arr = ["asd", "asfwf"];
let d = true;
let e = 3;
e = "egwe";
function test(a) {
    console.log(a);
    return a;
}
const test2 = (a) => {
    b = a * 2;
    console.log(b);
    return b;
};
arr = arr.map((el) => el.toUpperCase());
console.log(arr);
test("ПНХ");
function countCoordinates(coord) { }
function printIt(id) {
    if (typeof id === "number") {
        id.toString();
    }
    else if (typeof id === "string") {
        id.toUpperCase();
    }
}
