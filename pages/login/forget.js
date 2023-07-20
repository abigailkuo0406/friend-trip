import React from 'react'
import LoginLayout from '@/components/layout/login-layout-violet'
import ForgetPassword from '@/components/login/forgetpassword'
export default function Forget() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <ForgetPassword />
      </div>
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
Forget.getLayout = function (page) {
  return <LoginLayout>{page}</LoginLayout>
}
