import React, { useEffect, useState } from 'react'
import LoginLayout from '@/components/layout/login-layout'
import RegisterLetter1 from '@/components/register/register'
import RegisterLetter2 from '@/components/register/register2'
import BtnNormal from '@/components/common/button/btn-normal'
export default function Register() {
  const [aaa, setAaa] = useState({
    email: '',
    password: '',
    images: '',
    // member_name: '',
    name: '',
    birth: '',
    id_number: '',
    gender: '',
    location: '',
    height: '',
    weight: '',
    zodiac: '',
    bloodtype: '',
    smoke: '',
    alchohol: '',
    education_level: '',
    job: '',
    profile: '',
    mobile: '',
  })
  const [page, setPage] = useState(1)
  const [form, setForm] = useState('')
  const page1 = <RegisterLetter1 setPage={setPage} setAaa={setAaa} aaa={aaa} />
  const page2 = <RegisterLetter2 setPage={setPage} setAaa={setAaa} aaa={aaa} />
  console.log(page)
  const add = (e) => {
    e.preventDefault()
    console.log('5555', aaa)
    fetch(process.env.API_SERVER + '/register/add', {
      method: 'POST',
      body: JSON.stringify({
        email: aaa.email,
        password: aaa.password,
        images: aaa.img,
        // member_name: aaa.member_name,
        member_name: aaa.name,

        member_birth: aaa.birth,
        id_number: aaa.id,
        gender: aaa.gender,
        location: aaa.location,
        height: aaa.height,
        weight: aaa.weight,
        zodiac: aaa.zodiac,
        bloodtype: aaa.bloodtype,
        smoke: aaa.smoke,
        alchohol: aaa.alchohol,
        education_level: aaa.education,
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
