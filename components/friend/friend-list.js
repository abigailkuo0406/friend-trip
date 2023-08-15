import React, { useState, useEffect, useContext } from 'react'
import styles from './friend.module.css'
import Image from 'rc-image'
import AuthContext from '@/context/AuthContext'

export default function FriendList() {
  const { auth, setAuth } = useContext(AuthContext)

  const [friends, setFriends] = useState([])
  console.log('friends', friends)

  useEffect(() => {
    if (!auth) return
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
      .then((r) => r.json())
      .then((data) => {
        setFriends(data.rows)
      })
      .catch((error) => console.error('Error:', error))
  }, [auth])

  return (
    <>
      <div className={`${styles.friendsheet} pt-4`}>
        <div>
          <h2 className={`${styles.titlename} ms-4 mb-3`}>好友列表</h2>
        </div>
        <div className="">
          <div className="d-flex flex-wrap ms-4 pb-3">
            {friends.length > 0 ? (
              friends.map((v, i) => {
                  return (
                      auth.member_id != v.FriendId
                      ?
                  <a
                    key={i}
                    className="me-3 mb-2"
                    href={`/chatroom/${v.FriendId}`}
                  >
                    <Image
                      src={`http://localhost:3002/face/${v.images}`}
                      className={styles.avatar}
                      alt={v.images}
                      width={50}
                      height={50}
                    />
                          </a>
                          :
                          <a
                    key={i}
                    className="me-3 mb-2"
                    href={`/chatroom/${v.memberId}`}
                  >
                    <Image
                      src={`http://localhost:3002/face/${v.images}`}
                      className={styles.avatar}
                      alt={v.images}
                      width={50}
                      height={50}
                    />
                          </a>
                )
              })
            ) : (
              <p>目前尚無好友</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
