import React, { useState, useEffect, useContext } from 'react'
import styles from './friend.module.css'
import Image from 'rc-image'
import AuthContext from '@/context/AuthContext'
import UnacceptFriend from './unaccept-friend'



export default function FriendList() {
    const { auth, setAuth } = useContext(AuthContext)

    const [friends, setFriends] = useState([])
    const [friendsId, setFriendsId] = useState()
    const [delelteFriendsId, setDeleteFriendsId] = useState()


    useEffect(() => {
        if (!auth) return
        fetch(`http://localhost:3002/friends`, {
            method: 'POST',
            body: JSON.stringify({ memberID: auth.member_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        )
            .then((r) => r.json())
            .then((data) => {
                setFriends(data.all)
            })
            .catch((error) => console.error("Error:", error))

    }, [auth])



    // 成為好友
    const acceptFriend = (friendId) => {
        setFriendsId(friendId)
    }

    useEffect(() => {
        console.log('又渲染')

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
        console.log('進PUT')

    }, [friendsId])

    // 拒絕好友邀請
    const deleteFriend = (friendId) => {
        setDeleteFriendsId(friendId)
    }
    useEffect(() => {
        console.log('Delete渲染')

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
        console.log('進DELET')
    }, [delelteFriendsId])


    // console.log('friendsId', friendsId)


    return (
        <>
            <div className={`${styles.friendsheet} pt-4`}>
                <div>
                    <h2 className={`${styles.titlename} ms-4 mb-3`}>好友列表</h2>
                </div>
                <div className=''>
                    {/* <p className={`${styles.titlename}`}>我的好友</p> */}
                    <div className="d-flex flex-wrap ms-4 pb-3">
                        {friends ?
                            friends.map((v, i) => {
                                return (
                                    <div key={i} className='me-3 mb-2'>
                                        <Image
                                            src={`http://localhost:3002/face/${v.images}`}
                                            className={styles.avatar}
                                            alt={v.images}
                                            width={50}
                                            height={50}
                                        />
                                    </div>
                                )
                            }) : <li hidden></li>}
                    </div>
                    <p>待確認的好友</p>
                    <div className="d-flex flex-wrap ms-4 pb-3">
                        {friends ?
                            friends.map((v, i) => {
                                return (
                                    <div key={i} className='me-3 mb-2'>
                                        <UnacceptFriend
                                            images={v.images}
                                            friendsId={v.FriendId}
                                            sendFriendId={acceptFriend}
                                            deleteFriend={deleteFriend}
                                        />


                                    </div>
                                )
                            }) : <li hidden></li>}
                    </div>
                </div>
            </div>
        </>
    )
}
