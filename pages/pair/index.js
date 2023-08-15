import React, { useEffect, useState, useContext } from 'react'
import AuthContext from '@/context/AuthContext' // 會員
import AdminLayout from '@/components/layout/admin-layout'
import Pairs from '@/components/pairs/pairs'
import _ from 'lodash'
import Swal from 'sweetalert2'
export default function PairsIndex() {
  const { auth, setAuth } = useContext(AuthContext)
  const [memberinfo, setMemberInfo] = useState()
  const [imgIndex, setImgIndex] = useState(0)
  const [randomstate, setRandomState] = useState([])

  useEffect(() => {
    // const photos = []
    // for (let i = 0; i < memberinfo?.length; i++) {
    //   // photos.push(memberinfo[i].images)
    //   // console.log(memberinfo)
    //   // console.log(photos)
    // }
    if (!memberinfo) return
    const photos = memberinfo.sort(() => Math.random() - 0.5)
    setRandomState(photos)
    // setRandomState(_.shuffle(photos))
  }, [memberinfo])
  console.log(randomstate)
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
        Swal.fire({
          width: 400,
          title: '篩選成功',
          text: '感謝您的使用祝福您使用愉快',
          icon: 'success',
          iconColor: '#FABCBF',
          color: '#674C87',
          confirmButtonColor: '#674C87',
          showConfirmButton: false,
        })
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
          randomstate={randomstate}
          setImgIndex={setImgIndex}
          imgIndex={imgIndex}
        />
      </div>
      {console.log(randomstate)}
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
PairsIndex.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}