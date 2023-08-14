import React, { Fragment, useContext, useEffect, useState } from 'react'
import styles from './pairs.module.css'
import Face from '@/public/img/avatar/face/face52.png'
import Image from 'next/image'
import Logo from '@/public/FriendTrip-Logo.png'
import PairBtns from '@/components/pairs/pairs-button'
import PairBtns2 from '@/components/pairs/pairs-button2'
import AuthContext from '@/context/AuthContext'
import Swal from 'sweetalert2'
export default function Pairs({
  memberinfo,
  randomstate,
  setImgIndex,
  imgIndex,
}) {
  const [page, setPage] = useState(1)
  const { auth, setAuth } = useContext(AuthContext)
  const page1 = (
    <PairBtns
      page={page}
      setPage={setPage}
      setImgIndex={setImgIndex}
      imgIndex={imgIndex}
      randomstate={randomstate}
    />
  )
  const page2 = (
    <PairBtns2
      page={page}
      setPage={setPage}
      setImgIndex={setImgIndex}
      imgIndex={imgIndex}
    />
  )
  useEffect(() => {
    console.log('page change', page)
    if (page == 2) {
      console.log('hjhjhjhj')
      fetch(process.env.API_SERVER + '/makefriend', {
        method: 'POST',
        body: JSON.stringify({
          memberId: auth.member_id,
          FriendId: randomstate[imgIndex].select_id,
          acceptState:0
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(data)
          Swal.fire({
            width: 400,
            title: '配對成功',
            text: '感謝您的使用祝福您使用愉快',
            icon: 'success',
            iconColor: '#FABCBF',
            color: '#674C87',
            confirmButtonColor: '#674C87',
            showConfirmButton: false,
          })
          console.log('資料抓到', data.all)
        })
    }
  }, [page])
  return (
    <>
      {randomstate.length !== 0 ? (
        <>
          <div className={styles.main}>
            <div
              className={`card ${styles.card}`}
              style={{
                width: '28rem',
                // display: 'flex',
                // justifyContent: 'center',
              }}
            >
              <div className={`d-flex justify-content-end ${styles.white}`}>
                <a className={styles.link} href="./pair/condition">
                  <i className="fa-solid fa-sliders fa-rotate-270"></i>
                </a>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
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
              </div>
              <div className={`card-body ${styles.cardprofile}`}>
                <h5 className={`card-title text-center ${styles.fontcolor}`}>
                  {randomstate[imgIndex].member_name}{' '}
                  {randomstate[imgIndex].gender} {randomstate[imgIndex].age}歲
                  <br />
                  {randomstate[imgIndex].height}公分{' '}
                  {randomstate[imgIndex].zodiac}
                </h5>
                <p className={`card-text text-center ${styles.fontcolor}`}>
                  {randomstate[imgIndex].profile}
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
