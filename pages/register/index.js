import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LoginLayout from '@/components/layout/login-layout'
import RegisterLetter1 from '@/components/register/register'
import RegisterLetter2 from '@/components/register/register2'
import BtnNormal from '@/components/common/button/btn-normal'
import Swal from 'sweetalert2'
export default function Register() {
  const [aaa, setAaa] = useState({
    email: '',
    password: '',
    images: '',
    name: '',
    birth: '',
    id: '',
    gender: '',
    location: '',
    height: '',
    weight: '',
    zodiac: '',
    bloodtype: '',
    smoke: '',
    alchohol: '',
    education: '',
    job: '',
    profile: '',
    mobile: '',
  })
  const [page, setPage] = useState(1)
  const [form, setForm] = useState('')
  const page1 = <RegisterLetter1 setPage={setPage} setAaa={setAaa} aaa={aaa} />
  const page2 = <RegisterLetter2 setPage={setPage} setAaa={setAaa} aaa={aaa} />
  console.log(page)
  const router = useRouter()
  const add = (e) => {
    e.preventDefault()
    console.log('5555', aaa)
    fetch(process.env.API_SERVER + '/register/add', {
      method: 'POST',
      body: JSON.stringify({
        email: aaa.email,
        password: aaa.password,
        images: aaa.images,
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
        Swal.fire({
          width: 400,
          title: '註冊成功',
          text: '感謝您的使用祝福您使用愉快',
          icon: 'success',
          iconColor: '#FABCBF',
          color: '#674C87',
          confirmButtonColor: '#674C87',
          showConfirmButton: false,
        })
      })
      .then(() => router.push('/login'))
  }
  useEffect(() => {
    console.log(aaa)
  }, [aaa])
  const arr = [
    'email',
    'password',
    'images',
    'id_number',
    'gender',
    'location',
    'height',
    'weight',
    'zodiac',
    'bloodtype',
    'smoke',
    'alchohol',
    'education_level',
    'job',
    'profile',
    'mobile',
  ]
  const imgUpload = (e) => {
    async function upload(formData) {
      try {
        const response = await (process.env.API_SERVER + '/register/add',
        {
          method: 'POST',
          body: formData,
        })
        const result = await response.json()
        console.log('Success:', result)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    const formData = new FormData()
    for (let i = 0; i < arr.length; i++) {
      formData.append(arr[i], aaa[arr[i]])
      console.log(formData)
    }
    upload(formData)
  }

  return (
    <>
      <form onSubmit={add}>
        <div className="d-flex justify-content-center">
          {page === 1 ? page1 : page2}
        </div>
      </form>
      <div className="d-flex justify-content-center mt-5">
        <BtnNormal
          type="submit"
          value="submit"
          btnText="完成註冊"
          addClassforButton="btn-dark"
          onClick={add}
        />
      </div>
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
Register.getLayout = function (page) {
  return <LoginLayout>{page}</LoginLayout>
}
