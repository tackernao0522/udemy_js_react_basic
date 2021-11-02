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
