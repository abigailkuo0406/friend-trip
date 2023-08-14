import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Btn from '@/components/common/button/btn-normal'
import styles from '@/components/invite/friends-list.module.css'
import AuthContext from '@/context/AuthContext'

export default function Invite({
  friendName,
  img,
  friendId,
  friendId2,
  onValueChange,
}) {
  const { auth } = useContext(AuthContext)

  console.log('img', img)
  const [inviteFriend, setInviteFriend] = useState('')
  const [inviteImg, setInviteImg] = useState('')
  const [inviteId, setInviteId] = useState('')

  const [inviteBtn, setInviteBtn] = useState(false)

  const handleClick = () => {
    // 如果按鈕是false(+)，重設邀請姓名與照片路徑，把按鈕改成true(移除)
    if (!inviteBtn) {
      setInviteBtn(true)
      setInviteFriend(friendName)
      setInviteImg(img)
      friendId != auth.member_id
        ? setInviteId(friendId)
        : setInviteId(friendId2)
    }
    // 如果按鈕是true(移除)，重設按鈕為false(+)
    else {
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
        <div className="d-flex align-items-center ">
          <Image
            src={img}
            className={styles.avatar}
            alt={friendId}
            width={50}
            height={50}
          />
          <p className={`mx-5 ${styles.listText}`}>{friendName}</p>

          <Btn
            btnText={
              !inviteBtn ? (
                <AiOutlinePlusCircle className={styles.plus} />
              ) : (
                '移除'
              )
            }
            onClick={handleClick}
            addClassforButton={styles.ivBtn}
          />
        </div>
      </div>
    </>
  )
}
