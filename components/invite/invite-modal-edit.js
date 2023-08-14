import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import Btn from '@/components/common/button/btn-normal'
import styles from '@/components/invite/friends-list.module.css'
import AuthContext from '@/context/AuthContext'

// 引入邀請元件
import Invite from '@/components/invite/invite-edit'

export default function InviteModalEdit({ onValueChange, alreadyInvite = [] }) {
  const { auth, setAuth } = useContext(AuthContext)

  /*邀請功能*/
  const [inviteList, setInviteList] = useState([])

  useEffect(() => {
    setInviteList(alreadyInvite)
  }, [alreadyInvite])

  const alreadyInviteIds = alreadyInvite.map((v) => v.iv_member_id)
  // const alreadyInviteIds2 = alreadyInvite.map((v) => v.iv_member_id)

  console.log('alreadyInviteIds', alreadyInviteIds)

  const handleValueChange = (ivName, ivImg, ivBtn, ivId) => {
    if (ivBtn) {
      // 子層傳上來的按鈕值為true(+)，就把傳上來的邀請姓名和照片路徑拷貝到邀請清單中
      inviteList
        ? setInviteList([
            {
              reserveId: inviteList.reserveId,
              reserve_member_id: inviteList.reserve_member_id,
              // "invite_id": null,
              iv_member_id: ivId,
              images: ivImg,
              member_name: ivName,
            },
            ...inviteList,
          ])
        : ''
    } else {
      // 子層傳上來的按鈕值為false(移除)，由於傳上來的邀請姓名和照片路徑state沒有變，輸出一個過濾掉該邀請姓名的陣列(arr)，再重設回邀請清單

      const arr = inviteList.filter((v) => {
        return v.iv_member_id !== ivId
      })
      setInviteList(arr)
    }
  }
  useEffect(() => {
    onValueChange(inviteList)
  }, [inviteList])

  // 設定好友列表
  const [friends, setFriends] = useState([])
  const [friendsBtnTemp, setFriendsBtnTemp] = useState([])

  // 匯入好友資料
  useEffect(() => {
    // fetch(`http://localhost:3002/friends`, {
    //     method: 'GET',
    // })
    fetch(`http://localhost:3002/friends`, {
      method: 'POST',
      body: JSON.stringify({
        memberID: auth.member_id,
        acceptState: 1,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((f) => f.json())
      .then((friendsData) => {
        const friend = friendsData.rows.map((f) => {
          let defaultBtn = { defaultBtn: false }

          f = { ...f, ...defaultBtn }

          return f
        })
        setFriends(friend)
      })
  }, [auth])

  // 比對按鈕值
  useEffect(() => {
    const friendsBtn = friends.map((f, i, arr) => {
      inviteList.forEach((iv) => {
        if (f.FriendId == iv.iv_member_id) {
          f.defaultBtn = true
        }
      })
      return f
    })
    setFriendsBtnTemp(friendsBtn)
  }, [friends])

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
            <div className="modal-body mt-4">
              <ul
                id="inviteList"
                className={`d-flex justify-content-start ${styles.ivList}`}
              >
                {inviteList.map((v, i) => {
                  return (
                    // 陣列中有姓名才顯示li
                    <div key={i} className="me-2">
                      {v.iv_member_id ? (
                        <li>
                          <Image
                            src={`http://localhost:3002/face/${v.images}`}
                            className={styles.avatar}
                            width={50}
                            height={50}
                          />
                          {/* {v.inviteName} */}
                        </li>
                      ) : (
                        <li hidden></li>
                      )}
                    </div>
                  )
                })}
              </ul>
              <ul id="friendsList" className="list">
                {friendsBtnTemp != [] ? (
                  friendsBtnTemp.map((v, i) => {
                    return (
                      <div key={i}>
                        <Invite
                          friendName={v.member_name}
                          images={v.images}
                          iv_member_id={v.FriendId}
                          iv_member_id2={v.memberId}
                          //   defaultBtn={v.defaultBtn}
                          defaultBtn={alreadyInviteIds.includes(v.FriendId) || alreadyInviteIds.includes(v.memberId)}
                          onValueChange={handleValueChange}
                          friendsBtnTemp={friendsBtnTemp}
                        />
                      </div>
                    )
                  })
                ) : (
                  <li hidden></li>
                )}
              </ul>
            </div>

            <div className="modal-footer">
              <Btn
                btnText="回上一頁"
                bsModle1="#exampleModalToggle"
                bsModle2="modal"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
