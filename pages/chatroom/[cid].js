import Chatroom from "@/components/chatroom/chatroom"
import AdminLayout from '@/components/layout/admin-layout'
import Image from "next/image"
import styles from '@/pages/chatroom/chatroom.module.css'

import { useRouter } from "next/router"
import { useState, useEffect } from "react"

export default function ChatroomId() {
    const router = useRouter()
    const cid = router.query.cid
    // console.log('cid', cid)

    const [friendsDetails, setFriendsDetails] = useState()

    useEffect(() => {
        fetch(`http://localhost:3002/friends/${cid}`, {
            method: 'GET',
        })
            .then((r) => r.json())
            .then((details) => {
                cid ? setFriendsDetails(details.result[0]) : 1
                // console.log('details', details)
            })
    }, [cid])

    console.log('aaa', friendsDetails)
    return (
        <>
            {friendsDetails && 
                <div className={`d-flex align-items-center mb-3`}>
                    <Image
                    src={`http://localhost:3002/face/${friendsDetails.images}`}
                    className={`${styles.avatar} me-3`}
                    alt="大頭貼"
                    width={20}
                    height={20}
                />
                    <h3 className={`restLabel ${styles.name}`}>{friendsDetails.member_name}</h3>
                    {/* {friendsDetails.member_name == auth.member_name && } */}
                    {/* <h3 className={`restLabel ${styles.name}`}>{friendsDetails.member_name}</h3> */}

                </div>}

            <Chatroom
                friendId={cid}
            />

        </>
    )
}
ChatroomId.getLayout = function (page) {
    return <AdminLayout>{page}</AdminLayout>
}