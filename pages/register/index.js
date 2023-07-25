import React, { useState } from 'react'
import LoginLayout from '@/components/layout/login-layout'
import RegisterLetter1 from '@/components/register/register'
import RegisterLetter2 from '@/components/register/register2'
export default function Register() {
  const [page, setPage] = useState(1)
  const page1 = <RegisterLetter1 setPage={setPage} />
  const page2 = <RegisterLetter2 setPage={setPage} />
  console.log(page)
  return (
    <>
      <div className="d-flex justify-content-center">
        {page === 1 ? page1 : page2}
      </div>
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
Register.getLayout = function (page) {
  return <LoginLayout>{page}</LoginLayout>
}
