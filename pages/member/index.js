import React, { useEffect, useState, useContext } from 'react'
import Friend1 from '@/components/friend/friend'
import Friend2 from '@/components/friend/friend2'
import AdminLayout from '@/components/layout/admin-layout'
import AuthContext from '@/context/AuthContext' // 會員 context 取用

export default function Friendhome() {
  const [page, setPage] = useState(1)

  const { auth, setAuth } = useContext(AuthContext) // 透過 auth 抓取登入的會員資料
  const [memberInfo, setMemberInfo] = useState()
  const [memberPassword, setMemberPassword] = useState()
  let page1 = <Friend1 setPage={setPage} memberInfo={memberInfo} />
  let page2 = <Friend2 setPage={setPage} memberInfo={memberInfo} />
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
      <div className="d-flex justify-content-center">
        {page === 1 ? page1 : page2}
      </div>
    </>
  )
}

// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
Friendhome.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
