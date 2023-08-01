import React, { useEffect, useState, useContext } from 'react'
import AdminLayout from '@/components/layout/admin-layout'
import Edit from '@/components/edit/edit'
import Edit2 from '@/components/edit/edit2'
import BtnNormal from '@/components/common/button/btn-normal'
import AuthContext from '@/context/AuthContext' // 會員 context 取用

export default function EditHome() {
  const [aaa, setAaa] = useState({
    email: '',
    password: '',
    img: '',
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
    education: '',
    job: '',
    profile: '',
    mobile: '',
  })
  const [page, setPage] = useState(1)
  const [form, setForm] = useState('')

  const { auth, setAuth } = useContext(AuthContext) // 透過 auth 抓取登入的會員資料
  const [memberInfo, setMemberInfo] = useState()
  const page1 = (
    <Edit setPage={setPage} setAaa={setAaa} aaa={aaa} memberInfo={memberInfo} />
  )
  const page2 = (
    <Edit2
      setPage={setPage}
      setAaa={setAaa}
      aaa={aaa}
      memberInfo={memberInfo}
    />
  )
  console.log(page)
  const edit = (e) => {
    e.preventDefault()
    console.log('5555', aaa)
    fetch(process.env.API_SERVER + '/edit', {
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
  useEffect(() => {
    fetch(process.env.API_SERVER + '/catchMember', {
      method: 'POST',
      body: JSON.stringify({ memberID: auth.member_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        console.log('資料抓到', data.all)
        setMemberInfo(data.all[0])
      })
  }, [auth])
  useEffect(() => {
    console.log('資料塞到', memberInfo)
  }, [memberInfo])
  return (
    <>
      <form onSubmit={edit}>
        <div className="d-flex justify-content-center">
          {page === 1 ? page1 : page2}
        </div>
      </form>
      <BtnNormal
        type="submit"
        value="submit"
        btnText="完成修改"
        addClassforButton="btn-dark"
        onClick={edit}
      />
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
EditHome.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
