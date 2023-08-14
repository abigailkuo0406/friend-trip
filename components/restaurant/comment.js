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
  rate,
}) {
    const { auth } = useContext(AuthContext)
    console.log('rate',rate)
  const rateBlank = 5 - rate
  return (
    <>
      <div>
        {/* <p>{commentRestName}</p> */}
        {/* <p>餐廳編號</p> */}
        <div className="d-flex align-items-center">
          <Image
            src={`http://localhost:3002/face/${commentMemberImg}`}
            className={styles.avatar}
            alt="大頭貼"
            width={20}
            height={20}
          />
          <p className={`restTittle ms-3 ${styles.commentTitle}`}>
            {commentMemberName}
          </p>
          <div className={`d-flex starBlock justify-content-center`}>
            <div className="star-cb-group ms-3">
              {Array(rateBlank)
                .fill(1)
                .map((v, i) => {
                  return (
                    <label className="restRadioLabel rateStarBlank">5</label>
                  )
                })}
              {Array(rate)
                .fill(1)
                .map((v, i) => {
                  return (
                    <label
                      for="rating-5"
                      className="restRadioLabel rateStarFill"
                    >
                      5
                    </label>
                  )
                })}
            </div>
          </div>
        </div>
        <div className={`${styles.commentText}`}>
          <p>{comment}</p>
        </div>
      </div>
    </>
  )
}
