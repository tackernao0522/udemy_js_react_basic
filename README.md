# React イベントやstyleの扱い方

`index.js`<br>

```
import React from 'react'
import ReactDom from 'react-dom'
import App from './App.jsx'

ReactDom.render(<App />, document.getElementById("root"))
```

`App.jsx`<br>

```
import React from 'react'

const App = () => {
  const onClickButton = () => alert()
  const contentStyle = {
    color: 'blue',
    fontSize: '18px'
  }
  const contentLadyStyle = {
    color: 'pink',
    fontSize: '18px'
  }
  return (
    <>
      <h1 style{{ color: 'red' }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <p style={contentLadyStyle}>元気です!</p>
      <button onClick={onClickButton}>ボタン</button>
    </h1>
  )
}

export default App
```

## Props

+ コンポーネントに渡す引数のようなもの<br>

```
Props => コンポーネント
```

+ コンポーネント<br>
  =>画面要素の1単位。大(1画面)から小(1つのテキストボックス)まで様々<br>

+ Props<br>
  => コンポーネントに渡される引数的なもの<br>

`App.js`<br>

```
import React from 'react'
import ColorfulMessage from './components/ColorfulMessage'

const App = () => {
  const onClickButton = () => alert()
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは!</h1>
      <ColorfulMessage color="blue" message="お元気ですか？" />
      <ColorfulMessage color="pink" message="お元気です!" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
}

export default App
```

`src/components/ColorfulMessage.jsx`<br>

```
import React from 'react'

const ColorfulMessage = (props) => {
  // console.log(props)
  const contentStyle = {
    color: props.color,
    fontSize: '18px',
  }
  return <p style={contentStyle}>{props.message}</p>
}

export default ColorfulMessage
```

+ 別の方法<br>

`App.jsx`<br>

```
import React from 'react'
import ColorfulMessage from './components/ColorfulMessage'

const App = () => {
  const onClickButton = () => alert('clicked!!')
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
}

export default App
```

`src/components/ColorfulMessage.jsx`<br>

```
import React from 'react'

const ColorfulMessage = (props) => {
  // console.log(props)
  const contentStyle = {
    color: props.color,
    fontSize: '18px',
  }
  return <p style={contentStyle}>{props.children}</p>
}

export default ColorfulMessage
```

+ 分割代入を適用する<br>

`src/components/ColorfulMessage.jsx`<br>

```
import React from 'react'

const ColorfulMessage = (props) => {
  // console.log(props)
  { color, children } = props //
  const contentStyle = {
    color, // プロパティと値の名前が同じのときは値は省略できる
    fontSize: '18px',
  }
  return <p style={contentStyle}>{children}</p> //
}

export default ColorfulMessage
```

## PropsとState

+ コンポーネント<br>
  =>画面要素の1単位。大(1画面)から小(1つのテキストボックス)まで様々。<br>

+ Props<br>
  =>コンポーネントに渡される引数的なもの<br>

+ State<br>
  =>各コンポーネントが持つ状態。Stateが変更されると再レンダリングされる。<br>

`App.jsx`<br>

```
import React, { useState } from 'react'
import ColorfulMessage from './components/ColorfulMessage'

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1)
  }
  const [num, setNum] = useState(0) // 配列の分割代入 [num, setNum] numをいう変数をそれを更新していくsetNumという関数名、useDate()に初期値を入れられる
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  )
}

export default App
```

## 再レンダリングと副作用を知る(useEffect)

`App.jsx`<br>

```
import React, { useState } from 'react'
import ColorfulMessage from './components/ColorfulMessage'

const App = () => {
  const [num, setNum] = useState(0) // 配列の分割代入 [num, setNum] numをいう変数をそれを更新していくsetNumという関数名、useDate()に初期値を入れられる
  const [faceShowFlag, setFaceShowFlag] = useState(true)

  const onClickCountUp = () => {
    setNum(num + 1)
  }
  const onClickSwitchShowFlag = () => {
    // setFaceShowFlag(faceShowFlag ? false : true)
    setFaceShowFlag(!faceShowFlag)
  }
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/* 左の要素がtrueの場合に右を返す */}
      {faceShowFlag && <p>( ´ ▽ ` )</p>}
    </>
  )
}

export default App
```

## エラーの例

`App.jsx`<br>

```
import React, { useState } from 'react'
import ColorfulMessage from './components/ColorfulMessage'

const App = () => {
  console.log("さいしょ")
  const [num, setNum] = useState(0) // 配列の分割代入 [num, setNum] numをいう変数をそれを更新していくsetNumという関数名、useDate()に初期値を入れられる
  const [faceShowFlag, setFaceShowFlag] = useState(true)

  const onClickCountUp = () => {
    setNum(num + 1)
  }

  const onClickSwitchShowFlag = () => {
    // setFaceShowFlag(faceShowFlag ? false : true)
    setFaceShowFlag(!faceShowFlag)
  }

  if (num % 3 === 0) {
    setFaceShowFlag(true)
  } else {
    setFaceShowFlag(false)
  }
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/* 左の要素がtrueの場合に右を返す */}
      {faceShowFlag && <p>( ´ ▽ ` )</p>}
    </>
  )
}

export default App
```

## エラーを対処する

`App.jsx`<br>

```
import React, { useState } from 'react'
import ColorfulMessage from './components/ColorfulMessage'

const App = () => {
  console.log('さいしょ')
  const [num, setNum] = useState(0) // 配列の分割代入 [num, setNum] numをいう変数をそれを更新していくsetNumという関数名、useDate()に初期値を入れられる
  const [faceShowFlag, setFaceShowFlag] = useState(false)

  const onClickCountUp = () => {
    setNum(num + 1)
  }

  const onClickSwitchShowFlag = () => {
    // setFaceShowFlag(faceShowFlag ? false : true)
    setFaceShowFlag(!faceShowFlag)
  }

  if (num > 0) {
    if (num % 3 === 0) {
      // falseの場合にだけsetState関数を呼ぶようにする
      faceShowFlag || setFaceShowFlag(true)
    } else {
      // trueの場合にだけsetState関数を呼ぶようにする
      faceShowFlag && setFaceShowFlag(false)
    }
  }
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/* 左の要素がtrueの場合に右を返す */}
      {faceShowFlag && <p>( ´ ▽ ` )</p>}
    </>
  )
}

export default App
```

しかし、これだとon/offボタンが動作しない<br>

## 対処法 (useEffectを使う)

`App.jsx`<br>

```
/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from 'react'
import ColorfulMessage from './components/ColorfulMessage'

const App = () => {
  console.log('さいしょ')
  const [num, setNum] = useState(0) // 配列の分割代入 [num, setNum] numをいう変数をそれを更新していくsetNumという関数名、useDate()に初期値を入れられる
  const [faceShowFlag, setFaceShowFlag] = useState(false)

  const onClickCountUp = () => {
    setNum(num + 1)
  }

  const onClickSwitchShowFlag = () => {
    // setFaceShowFlag(faceShowFlag ? false : true)
    setFaceShowFlag(!faceShowFlag)
  }

  // useEffectは()の中に関数を入れる(callback)、第二引数には配列を入れる。配列の中身は最初の一回だけ通したいコンポーネントを入れることができる
  useEffect(() => {
    // console.log("useEffect!!")
    if (num > 0) {
      if (num % 3 === 0) {
        // falseの場合にだけsetState関数を呼ぶようにする
        faceShowFlag || setFaceShowFlag(true)
      } else {
        // trueの場合にだけsetState関数を呼ぶようにする
        faceShowFlag && setFaceShowFlag(false)
      }
    }
    // この次のラインだけeslintをoffにすることもできる
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]) // numに関して関心を持つuseEffectになる numをいう変数が変化した時だけuseEffectを走らせる ESLINTの設定をoffにすることでコンソールにエラーが出なくなる 最上部にコメントアウトで設定できて、import React, { useEffect, useState } from 'react'のファイルの中での限定設定になる

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/* 左の要素がtrueの場合に右を返す */}
      {faceShowFlag && <p>( ´ ▽ ` )</p>}
    </>
  )
}

export default App
```

## default export以外のexport

`ColorfulMessage.jsx`<br>

```
import React from 'react'

export const ColorfulMessage = (props) => { // *
  // console.log(props)
  const { color, children } = props // 分割代入
  const contentStyle = {
    color,
    fontSize: '18px',
  }
  return <p style={contentStyle}>{children}</p>
}

// export default ColorfulMessage
```

`App.jsx`<br>

```
// /* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from 'react'
import { ColorfulMessage } from './components/ColorfulMessage' // 分割代入にする

const App = () => {
  // console.log('さいしょ')
  const [num, setNum] = useState(0) // 配列の分割代入 [num, setNum] numをいう変数をそれを更新していくsetNumという関数名、useDate()に初期値を入れられる
  const [faceShowFlag, setFaceShowFlag] = useState(false)

  const onClickCountUp = () => {
    setNum(num + 1)
  }

  const onClickSwitchShowFlag = () => {
    // setFaceShowFlag(faceShowFlag ? false : true)
    // クリックするとfalseに書き換え(更新)
    setFaceShowFlag(!faceShowFlag)
  }

  // useEffectは()の中に関数を入れる(callback)、第二引数には配列を入れる。配列の中身は最初の一回だけ通したいコンポーネントを入れることができる
  useEffect(() => {
    // console.log("useEffect!!")
    if (num > 0) {
      if (num % 3 === 0) {
        // falseの場合にだけsetState関数を呼ぶようにする
        faceShowFlag || setFaceShowFlag(true)
      } else {
        // trueの場合にだけsetState関数を呼ぶようにする
        faceShowFlag && setFaceShowFlag(false)
      }
    }
    // この次のラインだけeslintをoffにすることもできる
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]) // numに関して関心を持つuseEffectになる numをいう変数が変化した時だけuseEffectを走らせる ESLINTの設定をoffにすることでコンソールにエラーが出なくなる 最上部にコメントアウトで設定できて、import React, { useEffect, useState } from 'react'のファイルの中での限定設定になる

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/* 左の要素がtrueの場合に右を返す */}
      {faceShowFlag && <p>( ´ ▽ ` )</p>}
    </>
  )
}

export default App
```

## React ToDoアプリ

<h4>JSXで構造を作成</h4>

`App.jsx`<br>

```
import React from "react"
import './App.css';

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>ああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>いいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          <div>
            <li>うううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
    )
}
```
## CSSでスタイリング

`App.jsxにclassをあてる`<br>

```
import React from "react"
import './App.css';

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>ああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>いいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>うううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
    )
}
```

## App.cssにスタイルを記述

```
body {
  font-family: sans-serif;
}

input {
  border-radius: 16px;
  border: none;
  padding: 6px 16px;
  outline: none;
}

button {
  border-radius: 16px;
  border: none;
  padding: 4px 16px;
}

button:hover {
  background-color: #ff7fff;
  color: #fff;
  cursor: pointer;
}

li {
  margin-right: 8px;
}

.input-area {
  background-color: #c1ffff;
  width: 400px;
  height: 30px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
}

.incomplete-area {
  background-color: #c6ffe2;
  width: 400px;
  min-height: 200px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
}

.complete-area {
  background-color: #ffffe0;
  width: 400px;
  min-height: 200px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
}

.title {
  text-align: center;
  margin-top: 0;
  font-weight: bold;
  color: #666;
}

.list-row {
  display: flex;
  align-items: center;
  padding-bottom: 4px;
}
```

## App.jsxをuseStateとmapを使用したモックに変更

```
import React, { useState } from 'react' // 編集
import './App.css'

export const App = () => {
  const [inCompleteTodos, setInCompleteTodos] = useState(['ああああ', 'いいいい']) // 追記

  const [completeTodos, setCompleteTodos] = useState(['うううう']) // 追記

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          // ここから編集
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
          // ここまで
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
            // ここから編集
            {completeTodos.map((todo) => {
              return (
                <div key={todo} className="list-row"> {/* keyを忘れないようにすること */}
                  <li>{todo}</li>
                  <button>戻す</button>
                </div>
              )
            })}
            // ここまで
        </ul>
      </div>
    </>
  )
}
```

## ToDoタスクの追加機能の実装

+ `App.jsx`の編集<br>

```
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
```

## React Taskの削除機能の実装

`App.jsx`の編集<br>

```
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

  // ここから追記
  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodos]
    newTodos.splice(index, 1) // 第一引数に何番目の要素か？第二引数に幾つの要素を削除するかを入れる
    setInCompleteTodos(newTodos)
    // alert(index)
  }
  // ここまで

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
                <button onClick={() => onClickDelete(index)}>削除</button> // 編集
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
```

## React Todoタスクの完了機能

`App.jsx`の編集<br>

```
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

  const onClickComplete = (index) => {
    // alert(index)
    const newInCompleteTodo = [...inCompleteTodos] // 未完了リストのコピー
    newInCompleteTodo.splice(index, 1) // 指定されたタスクの削除

    const newCompleteTodo = [...completeTodos, inCompleteTodos[index]] // 完了リストに完了タスクを結合
    setInCompleteTodos(newInCompleteTodo) // 完了を押して削除された後の未完了リストに更新
    setCompleteTodos(newCompleteTodo) // 完了後の完了リストの更新
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
```

## React ToDoタスクの戻す機能の実装

`App.jsx`の編集<br>

```
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
    newCompleteTodos.splice(index, 1)

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
```

## React ToDoのコンポーネント化

+ テキストボックス<br>

`src/components/inputTodo.jsx`の作成<br>

```
import React from 'react'

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props
  return (
    <div className="input-area">
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  )
}
```

`App.jsx`の編集<br>

```
import React, { useState } from 'react'
import './App.css'
import { InputTodo } from './components/InputTodo' // 追記

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
    newCompleteTodos.splice(index, 1)

    const newInCompleteTodos = [...inCompleteTodos, completeTodos[index]]
    setCompleteTodos(newCompleteTodos)
    setInCompleteTodos(newInCompleteTodos)
  }

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} /> // 編集
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
```

+ 未完了タスク<br>

`src/components/InCompleteTodos.jsx`を作成<br>

```
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
```

`App.jsx`の編集<br>

```
import React, { useState } from 'react'
import './App.css'
import { InputTodo } from './components/InputTodo'
import { InCompleteTodos } from './components/IncompleteTodos' // 追記

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
    newCompleteTodos.splice(index, 1)

    const newInCompleteTodos = [...inCompleteTodos, completeTodos[index]]
    setCompleteTodos(newCompleteTodos)
    setInCompleteTodos(newInCompleteTodos)
  }

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />
      <InCompleteTodos todos={inCompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} /> // 編集
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
```

+ 完了タスク<br>

`src/components/CompleteTodos.jsx`の作成<br>

```
import React from 'react'

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props
  return (
    <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
            {todos.map((todo, index) => {
              return (
                <div key={todo} className="list-row"> {/* keyを忘れないようにすること */}
                  <li>{todo}</li>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              )
            })}
        </ul>
      </div>
  )
}
```

`App.jsx`の編集<br>

```
import React, { useState } from 'react'
import './App.css'
import { InputTodo } from './components/InputTodo'
import { InCompleteTodos } from './components/IncompleteTodos'
import { CompleteTodos } from './components/CompleteTodos' // 追記

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
    newCompleteTodos.splice(index, 1)

    const newInCompleteTodos = [...inCompleteTodos, completeTodos[index]]
    setCompleteTodos(newCompleteTodos)
    setInCompleteTodos(newInCompleteTodos)
  }

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />
      <InCompleteTodos todos={inCompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack}  /> // 編集
    </>
  )
}
```

## コンポーネントの中にスタイルを入れる

`App.css`の編集<br>

```
body {
  font-family: sans-serif;
}

input {
  border-radius: 16px;
  border: none;
  padding: 6px 16px;
  outline: none;
}

button {
  border-radius: 16px;
  border: none;
  padding: 4px 16px;
}

button:hover {
  background-color: #ff7fff;
  color: #fff;
  cursor: pointer;
}

li {
  margin-right: 8px;
}

// ここから削除
.input-area {
  background-color: #c1ffff;
  width: 400px;
  height: 30px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
}
// ここまで

.incomplete-area {
  background-color: #c6ffe2;
  width: 400px;
  min-height: 200px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
}

.complete-area {
  background-color: #ffffe0;
  width: 400px;
  min-height: 200px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
}

.title {
  text-align: center;
  margin-top: 0;
  font-weight: bold;
  color: #666;
}

.list-row {
  display: flex;
  align-items: center;
  padding-bottom: 4px;
}

```

`InputTodo.jsx`の編集<br>

```
import React from 'react'

// ここから追記
const style= {
  backgroundColor: '#c1ffff',
  width: '400px',
  height: '30px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
}
// ここまで

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props
  return (
    <div style={style}> // 編集
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  )
}
```

## React Todoタスク登録の上限設定<br>

`App.jsx`の編集<br>

```
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
        disabled={inCompleteTodos.length >= 5} // 追記
      />
      // ここから追記
      {inCompleteTodos.length >= 5 && (
        <p style={{ color: 'red' }}>
          登録できるTodoは5個までです。削除するか完了してください。
        </p>
      )}
      // ここまで
      <InCompleteTodos
        todos={inCompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  )
}
```

`InputTodo.jsx`の編集<br>

```
import React from 'react'

const style= {
  backgroundColor: '#c1ffff',
  width: '400px',
  height: '30px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
}

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props // 編集
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange} // 追記
      />
      <button disabled={disabled} onClick={onClick}>追加</button> // 編集
    </div>
  )
}
```
