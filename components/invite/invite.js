import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { InviteContext } from '@/pages/restaurant/[rid]'

export default function Invite({
  friendName,
  img,
  friendId,
  onValueChange,
}) {
  const [inviteFriend, setInviteFriend] = useState('')
  const [inviteImg, setInviteImg] = useState('')
  const [inviteId, setInviteId] = useState('')

  const [inviteBtn, setInviteBtn] = useState(false)
  // const [inviteList, setInviteList] = useState([])
  // console.log('子層的inviteList:', inviteList)


  const handleClick = (e) => {

    // 如果按鈕是false(+)，重設邀請姓名與照片路徑，把按鈕改成true(移除)
    if (!inviteBtn) {
      console.log('無邀請')
      setInviteBtn(true)
      setInviteFriend(friendName)
      setInviteImg(img)
      setInviteId(friendId)

    }
    // 如果按鈕是true(移除)，重設按鈕為false(+)
    else {
      console.log('已邀請')
      setInviteBtn(false)

    }

  }

  // 每次按鈕值改變，就送出邀請姓名、照片路徑和按鈕值到父層
  useEffect(() => {
    onValueChange(inviteFriend, inviteImg, inviteBtn, inviteId)


  }, [inviteBtn])


  return (
    <>
      <div className="my-4">
        <div className="d-flex ">
          <Image src={img} className={`rounded`} width={50} height={50} />
          <p className="mx-5">{friendName}</p>

          <button onClick={handleClick}>
            {!inviteBtn ? <AiOutlinePlusCircle /> : '移除'}
          </button>
        </div>
      </div>
    </>
  )
}
