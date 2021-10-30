'use strict';

/**
 * 論理演算子の本当に意味を知る && ||
 */
const flag1 = true;
const flag2 = false;

// if (flag1 || flag2) { // flag1(左側)がfalseだった場合に右を返す
//   console.log("1か2はtrueになります"); // 1か2はtrueになります
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります"); // 出力されない
// }

// || は左側がfalseなら右側を返す 左側がtrueなら左側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee); // 金額未設定です

// && は左側がtrueなら右側を返す 左側がfalseなら左側を返す
const num2 = 0;
const fee2 = num2 && "何か設定されました";
console.log(fee2); // 何か設定されました
