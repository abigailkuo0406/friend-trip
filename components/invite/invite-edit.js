import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Btn from '@/components/common/button/btn-normal'
import styles from '@/components/invite/friends-list.module.css'

export default function InviteEdit({
  friendName,
  images,
  iv_member_id,
  defaultBtn,
  onValueChange,
  friendsBtnTemp,
}) {

  const [inviteFriend, setInviteFriend] = useState('')
  const [inviteImg, setInviteImg] = useState('')
  const [inviteId, setInviteId] = useState('')

  const [inviteBtn, setInviteBtn] = useState(defaultBtn)


  // console.log(friendName, defaultBtn, '11', inviteBtn)


  const handleClick = (e) => {
    // console.log('qq', inviteBtn)

    // 如果按鈕是false(+)，重設邀請姓名與照片路徑，把按鈕改成true(移除)
    if (!inviteBtn) {
      setInviteBtn(true)
      setInviteFriend(friendName)
      setInviteImg(images)
      setInviteId(iv_member_id)

    }
    // 如果按鈕是true(移除)，重設按鈕為false(+)
    else {
      setInviteBtn(false)
      setInviteFriend(friendName)
      setInviteImg(images)
      setInviteId(iv_member_id)

    }

  }

  // 每次按鈕值改變，就送出邀請姓名、照片路徑和按鈕值到父層
  useEffect(() => {
    onValueChange(inviteImg, inviteBtn, inviteId)


  }, [inviteBtn, friendsBtnTemp])


  return (
    <>
      <div className="my-4">
        <div className="d-flex align-items-center ">
          <Image src={`http://localhost:3002/face/${images}`} className={styles.avatar} width={50} height={50} />
          <p className={`mx-5 ${styles.listText}`}>{friendName}</p>

          <Btn
            btnText={!inviteBtn ? <AiOutlinePlusCircle className={styles.plus} /> : '移除'}
            onClick={handleClick}
            addClassforButton={styles.ivBtn}
          />

        </div>
      </div>
    </>
  )
}