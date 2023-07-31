import React, { useEffect, useState, useContext } from 'react'
import styles from './friend.module.css'
import BtnNormal from '@/components/common/button/btn-normal'
import AuthContext from '@/context/AuthContext' // 會員 context 取用
export default function Friend1({ setPage }) {
  const { auth, setAuth } = useContext(AuthContext) // 透過 auth 抓取登入的會員資料
  useEffect(() => {
    // fetch(process.env.API_SERVER + '/edit', {
    //   method: 'POST',
    //   body: JSON.stringify({ memberID: auth.member_id }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((r) => r.json())
    //   .then((data) => {
    //     console.log(data)
    //   })
  }, [auth])
  console.log(auth)
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
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">電子信箱</label>
              <p className={styles.p}>{auth.email}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">密碼</label>
              <p className={styles.p}>{auth.password}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">會員名稱</label>
              <p className={styles.p}>{auth.member_name}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">會員生日</label>
              <p className={styles.p}>{auth.member_birth}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">身分證字號</label>
              <p className={styles.p}>{auth.id_number}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">性別</label>
              <p className={styles.p}>{auth.gender}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">地區</label>
              <p className={styles.p}>{auth.location}</p>
            </div>
            <div className={`gap-3 ${styles.buttonbar}`}>
              <BtnNormal btnText="修改" />
              <BtnNormal
                btnText="下一頁"
                onClick={() => {
                  setPage(2)
                }}
              />
            </div>
          </div>
          <div className={styles.friendsheet}>
            <div>
              <h2 className={styles.titlename}>好友列表</h2>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="n">我的好友</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
