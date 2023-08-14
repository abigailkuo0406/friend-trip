import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Btn from '@/components/common/button/btn-normal'
import styles from '@/components/invite/friends-list.module.css'
import AuthContext from '@/context/AuthContext'


export default function InviteEdit({
  friendName,
  images,
  iv_member_id,
  iv_member_id2,
  defaultBtn,
  onValueChange,
  friendsBtnTemp,
}) {
  // console.log(iv_member_id, iv_member_id2, friendName, defaultBtn)
  const { auth } = useContext(AuthContext)

  const [inviteFriend, setInviteFriend] = useState()
  const [inviteImg, setInviteImg] = useState()
  const [inviteId, setInviteId] = useState()

  const [inviteBtn, setInviteBtn] = useState(defaultBtn)
  // console.log('inviteBtn', inviteBtn)



  const handleClick = (e) => {

    // 如果按鈕是false(+)，重設邀請姓名與照片路徑，把按鈕改成true(移除)
    if (!inviteBtn) {
      setInviteBtn(true)
      setInviteFriend(friendName)
      setInviteImg(images)
      // setInviteId(iv_member_id)
      iv_member_id != auth.member_id
        ? setInviteId(iv_member_id)
        : setInviteId(iv_member_id2)
    }
    // 如果按鈕是true(移除)，重設按鈕為false(+)
    else {
      setInviteBtn(false)
      setInviteFriend(friendName)
      setInviteImg(images)
      iv_member_id != auth.member_id
        ? setInviteId(iv_member_id)
        : setInviteId(iv_member_id2)
      // setInviteId(iv_member_id)

    }

  }

  // 每次按鈕值改變，就送出邀請姓名、照片路徑和按鈕值到父層
  useEffect(() => {
    inviteId != undefined && onValueChange(inviteFriend, inviteImg, inviteBtn, inviteId)

    // console.log('子層本身渲染')
  }, [inviteBtn])


  return (
    <>
      <div className="my-4">
        <div className="d-flex align-items-center ">
          <Image
            src={`http://localhost:3002/face/${images}`}
            alt={images}
            className={styles.avatar}
            width={50}
            height={50} />
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