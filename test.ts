const a: number = 5;

let b: number = 4;
let c: string = "Ivan";

let arr: Array<string> = ["asd", "asfwf"];

let d = true;

let e: any = 3;
e = "egwe";

function test(a: string): string | number {
  console.log(a);
  return a;
}

const test2 = (a: number): number => {
  b = a * 2;
  console.log(b);
  return b;
};

arr = arr.map((el) => el.toUpperCase());
console.log(arr);
test("ПНХ");

function countCoordinates(coord: { lat: number; long?: number }) {}

function printIt(id: string | number) {
  if (typeof id === "number") {
    id.toString();
  } else if (typeof id === "string") {
    id.toUpperCase();
  }
}

function getSum(a: number | number[]) {
  if (Array.isArray(a)) {
  }
}
