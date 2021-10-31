'use strict';

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグ生成
  const div = document.createElement("div"); // divタグの生成
  div.className = "list-row"; // 生成したdivタグにclass名を付与する

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText; // inputした内容を取得

  // divタグの子要素に各要素を設定
  div.appendChild(li);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());
