'use strict';

/**
 * アロー関数
 */
// 従来の関数
function func1(str) {
  return str;
}
console.log(func1("func1です")); // func1です

const func2 = function(str) {
  return str;
}
console.log(func2("func2です")); // func2です

// アロー関数
const func3 = (str) => {
  return str;
}
console.log(func3("func3です")); // func3です

const func4 = str => str;
console.log(func4("func4です")); // func4です

const func5 = (num1, num2) => num1 + num2;
console.log(func5(10, 20)); // 30
