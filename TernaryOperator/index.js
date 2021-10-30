'use strict';

/**
 * 三項演算子
 */

// ある条件 ? 条件がtrue時 : 条件がfalseの時
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1); // trueです

// const num = "1300";
// // console.log(num.toLocaleString()); // 1300

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum); // 数値を入力してください

const checkSum = (num1, num2) => num1 + num2 > 100 ? '100を超えています！！' : '許容範囲内です';
console.log(checkSum(50, 60)); // 100を超えています！！
