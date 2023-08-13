import { useEffect, useState } from "react";
import Image from 'next/image'

import styles from './friend.module.css'
import Btn from '@/components/common/button/btn-normal'




export default function UnacceptFriend({
    images,
    friendsId,
    sendFriendId,
    deleteFriend
}) {
    const [friendId, setFriendId] = useState('')
    const [deleteFriendId, setDeleteFriendId] = useState('')


    const handleChange = () => {
        setFriendId(friendsId)
    }

    const haneleDelete = () => {
        setDeleteFriendId(friendsId)
    }

    useEffect(() => {
        sendFriendId(friendId)

    }, [friendId])

    useEffect(() => {
        deleteFriend(deleteFriendId)
    }, [deleteFriendId])
    return (
        <>
            <Image
                src={`http://localhost:3002/face/${images}`}
                className={styles.avatar}
                alt={images}
                width={50}
                height={50}
            />
            <Btn
                btnText='接受'
                onClick={handleChange}
            />
            <Btn
                btnText='拒絕'
                onClick={haneleDelete}
            />

        </>
    )
}
