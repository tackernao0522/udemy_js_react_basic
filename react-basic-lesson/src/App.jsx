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
