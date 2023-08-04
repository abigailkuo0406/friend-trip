import { useState } from 'react'
import LoginLayout from '@/components/layout/login-layout'
import Login from '@/components/login/login'
export default function Home() {
  // input-text
  const [inputText, setInputText] = useState('')
  // textarea
  const [textareaText, setTextareaText] = useState('')

  return (
    <>
      <div className="d-flex justify-content-center">
        <Login />
      </div>
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
Home.getLayout = function (page) {
  return <LoginLayout>{page}</LoginLayout>
}
