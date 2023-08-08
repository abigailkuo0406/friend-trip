import React, { useEffect, useState, useContext } from 'react'
import AuthContext from '@/context/AuthContext' // 會員
import SlideLayout from '@/components/layout/slide-layout'
import Pairs from '@/components/pairs/pairs'
export default function PairsIndex() {
  const { auth, setAuth } = useContext(AuthContext)
  const [memberinfo, setMemberInfo] = useState()
  useEffect(() => {
    fetch(process.env.API_SERVER + '/select', {
      method: 'POST',
      body: JSON.stringify({
        memberID: auth.member_id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        alert('篩選成功')
        console.log('資料抓到', data.all)
        setMemberInfo(data.all)
      })
  }, [auth])

  // if (!memberinfo) return <p>Loading...</p>
  return (
    <>
      <div className="d-flex justify-contents-center">
        <Pairs memberinfo={memberinfo} />
      </div>
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
PairsIndex.getLayout = function (page) {
  return <SlideLayout>{page}</SlideLayout>
}
