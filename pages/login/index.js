import { useState } from 'react'
import Login from '@/components/login/login'
export default function Home() {
  // input-text
  const [inputText, setInputText] = useState('')
  // textarea
  const [textareaText, setTextareaText] = useState('')

  return (
    <>
      <Login />
    </>
  )
}
