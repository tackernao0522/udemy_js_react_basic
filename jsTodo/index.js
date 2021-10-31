'use strict';

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = ""; // textareaを空にする

  // divタグ生成
  const div = document.createElement("div"); // divタグの生成
  div.className = "list-row"; // 生成したdivタグにclass名を付与する

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText; // inputした内容を取得


  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode; // 完了ボタンの親要素取得
    const text = addTarget.firstElementChild.innerText; // 親要素の一番初めの子要素とテキストを取得

    // div以下を初期化
    addTarget.textContent = null;

    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ生成(戻す)
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);

    // const deleteTarget = completeButton.parentNode; // 親タグ(div)配下を取得
    // document.getElementById("incomplete-list").removeChild(deleteTarget); // id="incomplete-list"の子要素を削除
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
    // const deleteTarget = deleteButton.parentNode; // 親タグ(div)配下を取得
    // document.getElementById("incomplete-list").removeChild(deleteTarget); // id="incomplete-list"の子要素を削除
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
}

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());
