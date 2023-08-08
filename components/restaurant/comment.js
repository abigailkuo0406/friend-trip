import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import AuthContext from '@/context/AuthContext'
import styles from '@/components/restaurant/intro.module.css'


export default function Comment({
    commentMemberId,
    commentMemberName,
    commentMemberImg,
    commentRestId,
    commentRestName,
    comment,
    rate

}) {
    const { auth } = useContext(AuthContext)


    console.log('comment裡的commentText', comment)
    return (
        <>

            <div class="" >
                {/* <p>{commentRestName}</p> */}
                {/* <p>餐廳編號</p> */}
                <div className='d-flex'>
                    <Image
                        src={`http://localhost:3002/face/${commentMemberImg}`}
                        className={styles.avatar}
                        alt='大頭貼'
                        width={50}
                        height={50} />
                    <h4>{commentMemberName}</h4>
                    <p>星等{rate}</p>

                </div>
                <p>{comment}</p>
            </div >
        </>
    )
}