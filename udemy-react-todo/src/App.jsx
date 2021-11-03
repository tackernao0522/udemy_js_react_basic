import React, { useState } from 'react'
import './App.css'

export const App = () => {
  const [todoText, setTodoText] = useState('') // テキストボックスの初期値を空にする
  const [inCompleteTodos, setInCompleteTodos] = useState(['ああああ', 'いいいい'])
  const [completeTodos, setCompleteTodos] = useState(['うううう'])
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
                <button>完了</button>
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
            {completeTodos.map((todo) => {
              return (
                <div key={todo} className="list-row"> {/* keyを忘れないようにすること */}
                  <li>{todo}</li>
                  <button>戻す</button>
                </div>
              )
            })}
        </ul>
      </div>
    </>
  )
}
