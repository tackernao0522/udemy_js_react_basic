import React, { useState } from 'react'
import './App.css'

export const App = () => {
  const [todoText, setTodoText] = useState('') // テキストボックスの初期値を空にする
  const [inCompleteTodos, setInCompleteTodos] = useState([])
  const [completeTodos, setCompleteTodos] = useState([])
  const onChangeTodoText = (event) => setTodoText(event.target.value) // event.target.valueはそのまま覚えても良い
  const onClickAdd = () => {
    // テキストボックスが未入力のまま追加ボタンを押したら追加できないようにする
    if (todoText === "") {
      return alert('未入力です。')
    }
    // console.log(todoText)
    const newTodos = [...inCompleteTodos, todoText] // 配列の結合 ...inCompleteTodosは ああああ, いいいいであり配列ではなく値が拾えている ...がないと配列の型で拾うことになる
    setInCompleteTodos(newTodos)
    setTodoText('') // Todoタスクを追加したらテキストボックスの中の値を空にする
  }

  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodos]
    newTodos.splice(index, 1) // 第一引数に何番目の要素か？第二引数に幾つの要素を削除するかを入れる
    setInCompleteTodos(newTodos)
    // alert(index)
  }

  const onClickComplete = (index) => {
    // alert(index)
    const newInCompleteTodo = [...inCompleteTodos] // 未完了リストのコピー
    newInCompleteTodo.splice(index, 1) // 指定されたタスクの削除

    const newCompleteTodo = [...completeTodos, inCompleteTodos[index]] // 完了リストに完了タスクを結合
    setInCompleteTodos(newInCompleteTodo) // 完了を押して削除された後の未完了リストに更新
    setCompleteTodos(newCompleteTodo) // 完了後の完了リストの更新
  }

  const onClickBack = (index) => {
    // alert(index)
    const newCompleteTodos = [...completeTodos]
    newConpleteTodos.splice(index, 1)

    const newInCompleteTodos = [...inCompleteTodos, completeTodos[index]]
    setCompleteTodos(newCompleteTodos)
    setInCompleteTodos(newInCompleteTodos)
  }

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {/* map等を使用してレンダリングする場合はkeyは必須である */}
          {inCompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                {/* アロー関数を挿入してここの時点でonClickDelete関数が実行されないようにする */}
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            )
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
            {completeTodos.map((todo, index) => {
              return (
                <div key={todo} className="list-row"> {/* keyを忘れないようにすること */}
                  <li>{todo}</li>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              )
            })}
        </ul>
      </div>
    </>
  )
}
