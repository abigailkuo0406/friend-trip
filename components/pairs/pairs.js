import React, { Fragment, useEffect, useState } from 'react'
import styles from './pairs.module.css'
import Face from '@/public/img/avatar/face/face52.png'
import Image from 'next/image'
import { TbZodiacLeo } from 'react-icons/tb'
import Logo from '@/public/FriendTrip-Logo.png'
import PairBtns from '@/components/pairs/pairs-button'
import PairBtns2 from '@/components/pairs/pairs-button2'

export default function Pairs({
  memberinfo,
  randomstate,
  setImgIndex,
  imgIndex,
}) {
  const [page, setPage] = useState(1)
  const page1 = <PairBtns setPage={setPage} />
  const page2 = (
    <PairBtns2
      setPage={setPage}
      setImgIndex={setImgIndex}
      imgIndex={imgIndex}
    />
  )
  return (
    <>
      {randomstate.length !== 0 ? (
        <>
          <div className={styles.main}>
            <div className={`card ${styles.card}`} style={{ width: '18rem' }}>
              <div className={`d-flex justify-content-end ${styles.white}`}>
                <a className={styles.link} href="./pair/condition">
                  <i className="fa-solid fa-sliders fa-rotate-270"></i>
                </a>
              </div>
              <div className={` ${styles.imgborder}`}>
                <div className={styles.imgabove}>
                  <Image
                    src={Logo}
                    className={`${styles.imglogo}`}
                    alt="logo.png"
                  />
                </div>
                <div className={styles.imgContainer}>
                  <Image
                    src={`http://localhost:3002/face/${randomstate[imgIndex].images}`}
                    className={`${styles.img}`}
                    width={100}
                    height={100}
                    alt="face1.png"
                  />
                </div>
              </div>
              <div className={`card-body ${styles.cardprofile}`}>
                <h5 className={`card-title text-center ${styles.fontcolor}`}>
                  {randomstate[imgIndex].member_name}
                  <TbZodiacLeo />
                </h5>
                <p className={`card-text text-center ${styles.fontcolor}`}>
                  不菸不酒 工程師 高爾夫 衝浪 <br />
                  想找一起打高爾夫的朋友~
                </p>
              </div>
              {page === 1 ? page1 : page2}
            </div>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}
