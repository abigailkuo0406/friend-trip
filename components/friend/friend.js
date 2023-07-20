import React from 'react'
import styles from './friend.module.css'
import BtnNormal from '@/components/common/button/btn-normal'
export default function Friend() {
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
              <p className={styles.p}>hjhjhjhj@gmail.jlkjl</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">密碼</label>
              <p className={styles.p}>jk;jjhhjhjjjhk</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">會員名稱</label>
              <p className={styles.p}>王大明</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">會員生日</label>
              <p className={styles.p}>2000/02/02</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">身分證字號</label>
              <p className={styles.p}>asfjhjhfdf</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">性別</label>
              <p className={styles.p}>女</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">地區</label>
              <p className={styles.p}>台北市</p>
            </div>
            <div className={`gap-3 ${styles.buttonbar}`}>
              <BtnNormal btnText="修改" />
              <BtnNormal btnText="下一頁" />
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
