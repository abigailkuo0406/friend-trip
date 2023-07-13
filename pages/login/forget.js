import React from 'react'
import LoginLayout from '@/components/layout/login-layout'
import ForgetPassword from '@/components/login/forgetpassword'
export default function Forget() {
  return (
    <>
      <ForgetPassword />
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
Forget.getLayout = function (page) {
  return <LoginLayout>{page}</LoginLayout>
}
