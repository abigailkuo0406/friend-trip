import React, { useState, useEffect, useContext } from 'react'
import styles from './friend.module.css'
import Image from 'rc-image'
import AuthContext from '@/context/AuthContext'



export default function FriendList() {
    const { auth, setAuth } = useContext(AuthContext)

    const [friends, setFriends] = useState()

    useEffect(() => {
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

        // fetch(`http://localhost:3002/friends`, {
        //     method: 'GET',
        // })
        //     .then((f) => f.json())
        //     .then((friendsData) => {
        //         setFriends(friendsData.rows)
        //     })
    }, [auth])
    return (
        <>
            <div className={styles.friendsheet}>
                <div>
                    <h2 className={styles.titlename}>好友列表</h2>
                </div>
                <div className={styles.labelbar}>
                    <label htmlFor="n">我的好友</label>
                    <ul id="friendsList" className="list d-flex">
                        {friends ?
                            friends.map((v, i) => {
                                return (
                                    <div key={i} className='me-2'>
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
                    </ul>
                </div>
            </div>
        </>
    )
}
