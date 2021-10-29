'use script';

/**
 * mapやfilterを使った配列の処理
 */

const nameArr = ["田中", "山田", "佐藤"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// 従来の配列ループ処理
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i]);
// }

// const nameArr2 = nameArr.map(name => name);
// console.log(nameArr2); // ['田中', '山田', '佐藤']
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));
// 1番目は田中です。
// 2番目は山田です。
// 3番目は佐藤です。
// nameArr.map((name) => console.log(`${name}です。`));

// const numArr = [1, 2, 3, 4, 5];

// const newNumArr = numArr.filter(num => num % 2 === 1);

// console.log(newNumArr); // [1, 3, 5]

const newNameArr = nameArr.map((name) => {
  if (name === "佐藤")  {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr); // ['田中さん', '山田さん', '佐藤']