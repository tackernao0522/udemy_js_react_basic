/**
 * 分割代入
 */

// const myProfile = {
//   name: "Naomi",
//   age: 56,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1); // 名前はNaomiです。年齢は56歳です。

// // 分割代入(オブジェクト)
// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2); // 名前はNaomiです。年齢は56歳です。

// 配列
const myProfile = ['Takaki', 52];
const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message3); //　名前はTakakiです。年齢は52歳です。

// 分割代入(配列)
const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message4); // 名前はTakakiです。年齢は52歳です。
