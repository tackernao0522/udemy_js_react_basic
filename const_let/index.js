'use strict';

// var val1 = "var変数";
// console.log(val1); // var変数

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1); // var変数を上書き

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1); // var変数を再宣言

// let val2 = 'let変数';
// console.log(val2); // let変数

// // letは上書きが可能
// val2 = 'let変数を上書き';
// console.log(val2); // let変数を上書き

// // letは再宣言不可
// let val2 = "let変数を再宣言";
// console.log(val2); // エラー

// const val3 = "const変数";
// console.log(val3); // const変数

// // const変数は上書き不可
// val3 = "const変数を上書き";
// console.log(val3); // エラー

// const val3 = "const変数を再宣言";
// console.log(val3); // エラー

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 ={
//   name: "孝樹",
//   age: 52
// };
// console.log(val4); // {name: '孝樹', age: 52}

// val4.name = "直美";
// val4.address = "Tokyo";
// console.log(val4); // {name: '直美', age: 52, address: 'Tokyo'}

// constで定義した配列はプロパティの変更が可能
const val5 = ['dog', 'cat'];
console.log(val5); // ['dog', 'cat']

val5[0] = 'bird';
console.log(val5); //  ['bird', 'cat']

val5.push('monkey');
console.log(val5); // ['bird', 'cat', 'monkey']
