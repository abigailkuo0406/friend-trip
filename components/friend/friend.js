import React, { useEffect, useState, useContext } from 'react'
import styles from './friend.module.css'
import BtnNormal from '@/components/common/button/btn-normal'
import AuthContext from '@/context/AuthContext' // 會員 context 取用
import Image from 'next/image'
import FriendList from './friend-list'

export default function Friend1({ setPage, memberInfo }) {
  const { auth, setAuth } = useContext(AuthContext) // 透過 auth 抓取登入的會員資料
  // const [memberInfo, setMemberInfo] = useState()
  // const [memberPassword, setMemberPassword] = useState()
  // useEffect(() => {
  //   fetch(process.env.API_SERVER + '/catchMember', {
  //     method: 'POST',
  //     body: JSON.stringify({ memberID: auth.member_id }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((r) => r.json())
  //     .then((data) => {
  //       console.log(data)
  //       console.log('資料抓到', data.all)
  //       setMemberInfo(data.all)
  //       console.log('資料塞到', member)
  //     })
  // }, [auth])
  // console.log(auth)
  return (
    <>
      <div className={styles.main}>
        <div className={styles.side}></div>
        <div className={styles.profileside}>
          <div className={styles.profile}>
            <div>
              <h2 className={styles.titlename}>個人資料</h2>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">照片</label>
              <Image
                className={styles.img}
                src={`http://localhost:3002/face/${auth.images}`}
                width={70}
                height={70}
              />
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">電子信箱</label>
              <p className={styles.p}>{memberInfo?.email}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">密碼</label>
              <p className={styles.p}>{memberInfo?.password}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">會員名稱</label>
              <p className={styles.p}>{memberInfo?.member_name}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">會員生日</label>
              <p className={styles.p}>{memberInfo?.member_birth}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">身分證字號</label>
              <p className={styles.p}>{memberInfo?.id_number}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">性別</label>
              <p className={styles.p}>{memberInfo?.gender}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">地區</label>
              <p className={styles.p}>{memberInfo?.location}</p>
            </div>
            <div className={`gap-3 ${styles.buttonbar}`}>
              {/* <a href="http://localhost:3000/member/account">
                <BtnNormal
                  btnText="修改"
                  addClassforButton={`btn-dark ${styles.btnsize}`}
                />
              </a> */}
              <BtnNormal
                btnText="下一頁"
                onClick={() => {
                  setPage(2)
                }}
              />
            </div>
          </div>
          {/* <div className={styles.friendsheet}>
            <div>
              <h2 className={styles.titlename}>好友列表</h2>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="n">我的好友</label>
            </div>
          </div> */}
          <FriendList/>
        </div>
      </div>
    </>
  )
}
