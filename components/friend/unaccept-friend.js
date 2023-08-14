import { useEffect, useState } from "react";
import Image from 'next/image'

import styles from './friend.module.css'
import Btn from '@/components/common/button/btn-normal'




export default function UnacceptFriend({
    images,
    friendsId,
    sendFriendId,
    deleteFriend,
    itemState
}) {
    const [friendId, setFriendId] = useState('')
    const [deleteFriendId, setDeleteFriendId] = useState('')
    const [itemOpen, setItemOpen] = useState(true)

    const handleChange = () => {
        setFriendId(friendsId)
        setItemOpen(false)
    }

    const haneleDelete = () => {
        setDeleteFriendId(friendsId)
        setItemOpen(false)
    }

    useEffect(() => {
        if (friendId == '') return
        sendFriendId(friendId)
        itemState(itemOpen)

    }, [friendId])

    useEffect(() => {
        if (deleteFriendId == '') return
        deleteFriend(deleteFriendId)
        itemState(itemOpen)

    }, [deleteFriendId])
    return (
        <>
            {itemOpen &&
                <div className="d-flex align-items-center justify-content-center">
                    <Image
                        src={`http://localhost:3002/face/${images}`}
                        className={`${styles.avatar} me-4`}
                        alt={images}
                        width={50}
                        height={50}
                    />
                    <Btn
                        btnText='接受'
                        onClick={handleChange}
                        addClassforButton='btn-light me-3'
                    />
                    <Btn
                        btnText='拒絕'
                        onClick={haneleDelete}
                        addClassforButton='btn-white'

                    />
                </div>
            }

        </>
    )
}
