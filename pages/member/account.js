import React, { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import AdminLayout from '@/components/layout/admin-layout'
import Edit from '@/components/edit/edit'
import Edit2 from '@/components/edit/edit2'
import BtnNormal from '@/components/common/button/btn-normal'
import AuthContext from '@/context/AuthContext' // 會員 context 取用
import Swal from 'sweetalert2'
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
  const router = useRouter()
  const edit = (e) => {
    e.preventDefault()
    console.log('5555', aaa)
    fetch(process.env.API_SERVER + '/edit', {
      method: 'POST',
      body: JSON.stringify({
        memberID: auth.member_id,
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
          title: '修改成功',
          text: '感謝您的使用祝福您使用愉快',
          icon: 'success',
          iconColor: '#FABCBF',
          color: '#674C87',
          confirmButtonColor: '#674C87',
          showConfirmButton: false,
        })
      })
      .then(() => router.push('/member'))
  }
  const page1 = (
    <Edit
      key={memberInfo ? 'edit' : 'aaa'}
      setPage={setPage}
      setAaa={setAaa}
      aaa={aaa}
      memberInfo={memberInfo}
    />
  )
  const page2 = (
    <Edit2
      key={memberInfo ? 'edit' : 'aaa'}
      setPage={setPage}
      setAaa={setAaa}
      aaa={aaa}
      memberInfo={memberInfo}
    />
  )
  console.log(page)

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
        setAaa(data.all[0])
      })
  }, [auth])
  useEffect(() => {
    console.log('資料塞到', memberInfo)
  }, [memberInfo])
  return (
    <>
      <form onSubmit={edit}>
        {memberInfo && memberInfo.email ? (
          <div className="d-flex justify-content-center">
            {page === 1 ? page1 : page2}
          </div>
        ) : (
          <div></div>
        )}
      </form>
      <div className="d-flex justify-content-center mt-5">
        <BtnNormal
          type="submit"
          value="submit"
          btnText="完成修改"
          addClassforButton="btn-dark"
          onClick={edit}
        />
      </div>
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
EditHome.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
