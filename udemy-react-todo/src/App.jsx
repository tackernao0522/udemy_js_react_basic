import React, { useState } from 'react'
import './App.css'

export const App = () => {
  const [inCompleteTodos, setInCompleteTodos] = useState(['ああああ', 'いいいい'])

  const [completeTodos, setCompleteTodos] = useState(['うううう'])

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {/* map等を使用してレンダリングする場合はkeyは必須である */}
          {inCompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
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
