import React, { useEffect, useState } from 'react'
import LoginLayout from '@/components/layout/login-layout'
import RegisterLetter1 from '@/components/register/register'
import RegisterLetter2 from '@/components/register/register2'
export default function Register() {
  const [aaa, setAaa] = useState({
    email: '',
    photo: '',
  })
  const [page, setPage] = useState(1)
  const [form, setForm] = useState('')
  const page1 = <RegisterLetter1 setPage={setPage} setAaa={setAaa} aaa={aaa} />
  const page2 = <RegisterLetter2 setPage={setPage} setAaa={setAaa} aaa={aaa} />
  console.log(page)
  const add = (e) => {
    e.preventDefault()
    fetch(process.env.API_SERVER + '/register/add', {
      method: 'POST',
      body: JSON.stringify({
        member_id: inputValue1,
        email: inputValue2,
        password: inputValue3,
        images: inputValue4,
        member_name: inputValue5,
        member_birth: inputValue6,
        id_number: inputValue7,
        gender: inputValue8,
        location: inputValue9,
        height: inputValue10,
        weight: inputValue11,
        zodiac: inputValue12,
        bloodtype: inputValue13,
        smoke: inputValue14,
        alchohol: inputValue15,
        education_level: inputValue16,
        job: inputValue17,
        profile: inputValue18,
        mobile: inputValue19,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          const obj = { ...data.data }
          localStorage.setItem('auth', JSON.stringify(obj))
          setAuth(obj)
          // alert('登入成功')
          router.push('/')
        } else {
          alert(data.error || '帳密錯誤')
        }
      })
  }
  useEffect(() => {
    console.log(aaa)
  }, [aaa])

  return (
    <>
      <form onSubmit={add}>
        <div className="d-flex justify-content-center">
          {page === 1 ? page1 : page2}
        </div>
      </form>
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
Register.getLayout = function (page) {
  return <LoginLayout>{page}</LoginLayout>
}
