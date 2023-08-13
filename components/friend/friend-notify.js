import React, { useState, useEffect, useContext } from 'react'
import styles from './friend.module.css'
import AuthContext from '@/context/AuthContext'
import UnacceptFriend from './unaccept-friend'



export default function FriendList({
    unaccepts,
    items

}) {
    const { auth, setAuth } = useContext(AuthContext)
    const [friendsId, setFriendsId] = useState()
    const [delelteFriendsId, setDeleteFriendsId] = useState()

    const [notifyState, setNotifyState] = useState(false)

    const [itemState, setItemState] = useState(true)
    // console.log('itemState', itemState)
    // console.log('notifyState', notifyState)
    // console.log('陣列長度', unaccepts.length)



    // 控制通知訊息切換-資料剛fetch進來
    useEffect(() => {
        // console.log('資料渲染')
        unaccepts.length > 0 && setNotifyState(true)
        unaccepts.length <= 0 && setNotifyState(false)
        items(itemState)    
    }, [unaccepts, itemState])


    // 成為好友
    const acceptFriend = (friendId) => {
        setFriendsId(friendId)
    }

    useEffect(() => {

        if (!friendsId) return

        fetch(`http://localhost:3002/friends/edit`, {
            method: 'PUT',
            body: JSON.stringify({
                memberID: auth.member_id,
                FriendId: friendsId
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        )

    }, [friendsId])

    // 拒絕好友邀請
    const deleteFriend = (friendId) => {
        setDeleteFriendsId(friendId)
    }
    useEffect(() => {

        if (!delelteFriendsId) return

        fetch(`http://localhost:3002/friends/delete`, {
            method: 'DELETE',
            body: JSON.stringify({
                memberID: auth.member_id,
                FriendId: delelteFriendsId
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        )
    }, [delelteFriendsId])
    return (
        <>
            <div className={`${styles.friendsheet} w-100 p-4  rounded-4 rounded-top-1`}>
                {notifyState ?
                    <p className={`${styles.infoBox} mb-3`}>新的交友邀請！</p>
                    :
                    <p className={`${styles.infoBox}`}>目前沒有新的交友邀請！</p>

                }
                <div className="d-flex flex-column">
                    {unaccepts ?
                        unaccepts.map((v, i) => {
                            return (
                                <div key={i} className='me-3 mb-2'>
                                    <UnacceptFriend
                                        images={v.images}
                                        friendsId={v.memberId}
                                        sendFriendId={acceptFriend}
                                        deleteFriend={deleteFriend}
                                        itemState={setItemState}
                                    />


                                </div>
                            )
                        }) : <li hidden></li>}
                </div>
            </div>
        </>
    )
}
