import { useState } from 'react'

export default function Html5Form() {
  // input-text
  const [inputText, setInputText] = useState('')
  // textarea
  const [textareaText, setTextareaText] = useState('')

  return (
    <>
    <div>
      <h1>註冊/登入</h1>
      <section id="input-text">
        <h2>帳號</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section id="input-text">
        <h2>密碼</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
    </div>
    </>
  )
}