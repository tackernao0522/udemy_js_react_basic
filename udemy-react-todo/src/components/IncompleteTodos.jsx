import React from 'react'

export const InCompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* map等を使用してレンダリングする場合はkeyは必須である */}
        {todos.map((todo, index) => {
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
  )
}
