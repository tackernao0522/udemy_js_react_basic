import React, { useState } from 'react'
import './App.css'
import { InputTodo } from './components/InputTodo'
import { InCompleteTodos } from './components/IncompleteTodos'
import { CompleteTodos } from './components/CompleteTodos'

export const App = () => {
  const [todoText, setTodoText] = useState('') // テキストボックスの初期値を空にする
  const [inCompleteTodos, setInCompleteTodos] = useState([])
  const [completeTodos, setCompleteTodos] = useState([])
  const onChangeTodoText = (event) => setTodoText(event.target.value) // event.target.valueはそのまま覚えても良い
  const onClickAdd = () => {
    // テキストボックスが未入力のまま追加ボタンを押したら追加できないようにする
    if (todoText === '') {
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
    newCompleteTodos.splice(index, 1)

    const newInCompleteTodos = [...inCompleteTodos, completeTodos[index]]
    setCompleteTodos(newCompleteTodos)
    setInCompleteTodos(newInCompleteTodos)
  }

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={inCompleteTodos.length >= 5}
      />
      {inCompleteTodos.length >= 5 && (
        <p style={{ color: 'red' }}>
          登録できるTodoは5個までです。削除するか完了してください。
        </p>
      )}
      <InCompleteTodos
        todos={inCompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  )
}
