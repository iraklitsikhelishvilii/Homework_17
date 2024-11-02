// // 1. Arrow Function და ორი რიცხვის დაჯამება:
// // დაწერე Arrow Function, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს. მაგალითად: const add = (a, b) => a + b;
// const add = (a, b) => a + b;
// console.log(add(1, 2));
// ---------------------------------------------------------------------------
// // 2. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ შორის სხვაობას. მაგალითად: (function(a, b) { return a - b; })(8, 3);
// (function (a, b) {
//   console.log(a - b);
// })(8, 3);
// ---------------------------------------------------------------------------
// // 3. Arrow Function
// // დაწერე რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის ლუწი (თუ ლუწია დააბრუნებს true). მაგალითად: const isEven = (num) => num % 2 === 0;
// const iseven = (x) => x % 2 === 0;
// console.log(iseven(2));
// ---------------------------------------------------------------------------
// // 4. Callback Function და გამრავლება:
// // დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც გამოიყენებს ამ რიცხვების ნამრავლის დასათვლელად:
// function calculator(num1, num2, Callback) {
//   return Callback(num1, num2);
// }
// function multiplication(num1, num2) {
//   return num1 * num2;
// }
// console.log(calculator(3, 4, multiplication));
// ---------------------------------------------------------------------------
// // 5. Arrow Function და რიცხვის დადებითობის შემოწმება:
// // Arrow Function, რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის დადებითი. მაგალითად: const isPositive = (num) => num > 0;
// const isPositive = (num) => num > 0;
// console.log(isPositive(-1));
// ---------------------------------------------------------------------------
// // 6. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს რიცხვს და დააბრუნებს მის გაორმაგებულ მნიშვნელობას. მაგალითად: (function(n) { return n * 2; })(5);(function(n) { return n * 2; })(5);
// (function (number) {
//   console.log(number * 2);
// })(7);
// ---------------------------------------------------------------------------
// 7. დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და Callback ფუნქციას, რომელიც დააბრუნებს ამ რიცხვის გაორმაგებულ მნიშვნელობას:
// function calculator(num1, Callback) {
//   return Callback(num1);
// }
// function multiplication(num1) {
//   return num1 * 2;
// }
// console.log(calculator(2, multiplication));
// ---------------------------------------------------------------------------
// 8. Arrow Function და რიცხვის ნაშთის შემოწმება:
// Arrow Function, რომელიც შეამოწმებს, თუ ნაშთია რიცხვის გაყოფისას 3-ზე (მაგალითად, არის თუ არა რიცხვი 3-ზე გაყოფადი). მაგალითად: const isDivisibleByThree = (num) => num % 3 === 0;
// const isDivisibleByThree = (num) => num % 3 === 0;
// console.log(isDivisibleByThree(4));
// ---------------------------------------------------------------------------
// 9. Callback Function და რიცხვის გადამოწმება:
// დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და Callback ფუნქციას, და გამოიძახებს Callback-ს, რომ შეამოწმოს, არის თუ არა ეს რიცხვი ლუწი.
// function number(num1, Callback) {
//   Callback(num1);
// }
// function isodd(num1) {
//   if (num1 % 2 === 0) {
//     console.log("ლუწია");
//   } else {
//     console.log("კენტია");
//   }
// }
// let sum = number(3, isodd);
// ---------------------------------------------------------------------------
// 10. Arrow Function და რიცხვის კუბის გამოთვლა:
// Arrow Function, რომელიც მიიღებს რიცხვს და დააბრუნებს მის კუბს. მაგალითად: const cube = (num) => num * num * num;
// const cube = (num) => num * num * num;
// console.log(cube(2));
// ---------------------------------------------------------------------------
// 11. Callback Function და მარტივი გამრავლება:
// დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც დააბრუნებს მათ ნამრავლს.
// function calculator(num1, num2, Callback) {
//   return Callback(num1, num2);
// }
// function multiply(num1, num2) {
//   console.log(num1 * num2);
// }
// let multiplication = multiply(2, 3, multiply);
// ---------------------------------------------------------------------------
// 12. Arrow Function და რიცხვის დადებითობის შემოწმება:
// Arrow Function, რომელიც შეამოწმებს, არის თუ არა რიცხვი ნულზე მეტი. მაგალითად: const isGreaterThanZero = (num) => num > 0;
// const isGreaterThanZero = (num) => num > 0;
// console.log(isGreaterThanZero(5));
// ---------------------------------------------------------------------------
// 13. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის ნახევარს. მაგალითად: (function(n) { return n / 2; })(10);
// let final = function (num) {
//   return num / 2;
// };
// console.log(final(12));
// ---------------------------------------------------------------------------
// Callback Function და რიცხვის დამატება:
// 14. დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც შეაჯამებს ამ რიცხვებს.
// function calculator(num1, num2, Callback) {
//   return Callback(num1, num2);
// }
// function sum(num1, num2) {
//   return num1 + num2;
// }
// console.log(calculator(3, 4, sum));
// ---------------------------------------------------------------------------
// 15. Arrow Function, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის კვადრატს. მაგალითი: const square = (num) => num * num;
// const square = (num) => num * num;
// console.log(square(2));
