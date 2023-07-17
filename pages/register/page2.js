import React from 'react'
import LoginLayout from '@/components/layout/login-layout'
import RegisterLetter from '@/components/register/register2'
export default function Register() {
  return (
    <>
      <RegisterLetter />
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
Register.getLayout = function (page) {
  return <LoginLayout>{page}</LoginLayout>
}
