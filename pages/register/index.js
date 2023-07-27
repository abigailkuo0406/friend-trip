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
        email: aaa.email,
        password: aaa.height,
        images: aaa.images,
        member_name: aaa.member_name,
        member_birth: aaa.member_birth,
        id_number: aaa.id_number,
        gender: aaa.gender,
        location: aaa.location,
        height: aaa.height,
        weight: aaa.weight,
        zodiac: aaa.zodiac,
        bloodtype: aaa.bloodtype,
        smoke: aaa.smoke,
        alchohol: aaa.alchohol,
        education_level: aaa.education_level,
        job: aaa.job,
        profile: aaa.profile,
        mobile: aaa.mobile,
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
      <BtnNormal
        type="submit"
        value="submit"
        btnText="完成註冊"
        addClassforButton="btn-dark"
        onClick={add}
      />
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
Register.getLayout = function (page) {
  return <LoginLayout>{page}</LoginLayout>
}
