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
