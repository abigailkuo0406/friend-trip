import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Btn from '@/components/common/button/btn-normal'
import styles from '@/components/invite/friends-list.module.css'


// 引入邀請元件
import Invite from '@/components/invite/invite'
// 引入朋友假資料
import friendss from '@/data/restaurant/friend-list.json'


export default function InviteModal({
    onValueChange,
    alreadyInvite
}) {

    /*邀請功能*/
    const [inviteList, setInviteList] = useState(alreadyInvite)
    console.log('外層邀請清單:', inviteList)

    const handleValueChange = (ivName, ivImg, ivBtn, ivId) => {

        if (ivBtn) {
            // 子層傳上來的按鈕值為true(+)，就把傳上來的邀請姓名和照片路徑拷貝到邀請清單中
            setInviteList([{ 'member_name': ivName, 'images': ivImg, 'inviteId': ivId }, ...inviteList])
        }
        else {
            // 子層傳上來的按鈕值為false(移除)，由於傳上來的邀請姓名和照片路徑state沒有變，輸出一個過濾掉該邀請姓名的陣列(arr)，再重設回邀請清單

            const arr = inviteList.filter((v) => {
                return v.inviteName !== ivName
            })
            setInviteList(arr)
        }
    }
    useEffect(() => {
        onValueChange(inviteList)
    }, [inviteList])

    const [friends, setFriends] = useState()

    useEffect(() => {
        fetch(`http://localhost:3002/friends`, {
            method: 'GET',
        })
            .then((f) => f.json())
            .then((friendsData) => {
                setFriends(friendsData.rows)
            })
    }, [])


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
                                            {v.member_name
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
                                {friends ?
                                    friends.map((v, i) => {
                                        return (
                                            <div key={i}>
                                                <Invite
                                                    friendName={v.member_name}
                                                    img={v.images}
                                                    friendId={v.FriendId}
                                                    onValueChange={handleValueChange}
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