import React, { useEffect, useState, useContext } from 'react'
import AuthContext from '@/context/AuthContext' // 會員
import SlideLayout from '@/components/layout/slide-layout'
import Pairs from '@/components/pairs/pairs'
import _ from 'lodash'
export default function PairsIndex() {
  const { auth, setAuth } = useContext(AuthContext)
  const [memberinfo, setMemberInfo] = useState()
  const [imgIndex, setImgIndex] = useState(0)
  const [randomstate, setRandomState] = useState([])

  useEffect(() => {
    const photos = []
    for (let i = 0; i < memberinfo?.length; i++) {
      photos.push(memberinfo[i].images)
      // console.log(memberinfo[i].images)
      // console.log(photos)
    }
    setRandomState(_.shuffle(photos))
  }, [memberinfo])

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
        <Pairs
          memberinfo={memberinfo}
          Random={randomstate}
          setImgIndex={setImgIndex}
          imgIndex={imgIndex}
        />
      </div>
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
PairsIndex.getLayout = function (page) {
  return <SlideLayout>{page}</SlideLayout>
}
