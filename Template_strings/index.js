'use strict';

/**
 * テンプレート文字列
 */
const name = "Takaki";
const age = 52;

// 「私の名前はTakakiです。年齢は52歳です。」

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age  + "歳です。";
console.log(message1); // 私の名前はTakakiです。年齢は52歳です。

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message2); // 私の名前はTakakiです。年齢は52歳です。
