import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Btn from '@/components/common/button/btn-normal'
import styles from '@/components/invite/friends-list.module.css'


// 引入邀請元件
import Invite from '@/components/invite/invite-edit'


export default function InviteModalEdit({
    onValueChange,
    alreadyInvite
}) {

    // console.log('alreadyInvite', alreadyInvite)

    /*邀請功能*/
    const [inviteList, setInviteList] = useState([])

    useEffect(() => {
        setInviteList(alreadyInvite)
    }, [alreadyInvite])
    // console.log('外層邀請清單:', inviteList)

    const handleValueChange = (ivImg, ivBtn, ivId) => {
        console.log('yy', ivId)
        if (ivBtn) {
            // 子層傳上來的按鈕值為true(+)，就把傳上來的邀請姓名和照片路徑拷貝到邀請清單中
            setInviteList([{ 'images': ivImg, 'iv_member_id': ivId }, ...inviteList])
        }
        else {
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
        fetch(`http://localhost:3002/friends`, {
            method: 'GET',
        })
            .then((f) => f.json())
            .then((friendsData) => {
                // console.log('aa', friendsData.rows)

                const friend = friendsData.rows.map((f) => {
                    let defaultBtn = { "defaultBtn": false }

                    f = { ...f, ...defaultBtn }

                    // console.log('f', f)
                    return f

                })
                setFriends(friend)
            })
    }, [])
    // console.log('friends', friends)

    useEffect(() => {
        const friendsBtn = friends.map((f, i, arr) => {
            inviteList.forEach((iv) => {
                if (f.FriendId == iv.iv_member_id) {
                    f.defaultBtn = true
                    console.log('btntrue', f)
                }
            })
            return f

        })
        setFriendsBtnTemp(friendsBtn)
    }, [friends])


    // console.log('11', friendsBtn)








    return (
        <>
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        {/* <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
                        <div class="modal-body mt-4">
                            <ul id="inviteList" className={`d-flex justify-content-start ${styles.ivList}`}>
                                {inviteList.map((v, i) => {
                                    return (
                                        // 陣列中有姓名才顯示li
                                        <div key={i} className='me-2'>
                                            {v.iv_member_id
                                                ?
                                                <li>
                                                    <Image
                                                        src={`http://localhost:3002/face/${v.images}`}
                                                        className={styles.avatar}
                                                        width={50}
                                                        height={50}
                                                    />
                                                    {/* {v.inviteName} */}
                                                </li>
                                                :
                                                <li hidden></li>}

                                        </div>
                                    )
                                })}

                            </ul>
                            <ul id="friendsList" className="list">
                                {friendsBtnTemp != [] ?
                                    friendsBtnTemp.map((v, i) => {
                                        return (
                                            <div key={i}>
                                                <Invite
                                                    friendName={v.member_name}
                                                    images={v.images}
                                                    iv_member_id={v.FriendId}
                                                    defaultBtn={v.defaultBtn}
                                                    onValueChange={handleValueChange}
                                                    friendsBtnTemp={friendsBtnTemp}
                                                />
                                            </div>
                                        )
                                    }) : <li hidden></li>}
                            </ul>
                        </div>

                        <div class="modal-footer">
                            <Btn
                                btnText='回上一頁'
                                bsModle1="#exampleModalToggle"
                                bsModle2='modal'
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}