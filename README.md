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
