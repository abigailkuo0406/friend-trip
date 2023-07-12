import React from 'react'

import styles from './friend2.module.css'
export default function Friend() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.side}></div>
        <div className={styles.profileside}>
          <div className={styles.profile}>
            <div>
              <h2>個人資料</h2>
            </div>
            <div className={styles.labelbar}>
              <label htmlfor="emailadd">身高</label>
            </div>
            <div className={styles.labelbar}>
              <label htmlfor="emailadd">體重</label>
              <p className={styles.p}>hjhjhjhj@gmail.jlkjl</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlfor="emailadd">星座</label>
              <p className={styles.p}>jk;jjhhjhjjjhk</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlfor="emailadd">血型</label>
              <p className={styles.p}>王大明</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlfor="emailadd">抽菸</label>
              <p className={styles.p}>2000/02/02</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlfor="emailadd">酒精</label>
              <p className={styles.p}>asfjhjhfdf</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlfor="emailadd">教育程度</label>
              <p className={styles.p}>女</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlfor="emailadd">工作</label>
              <p className={styles.p}>台北市</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlfor="emailadd">自我介紹</label>
              <p className={styles.p}>台北市</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlfor="emailadd">手機號碼</label>
              <p className={styles.p}>台北市</p>
            </div>
            <div>
              <button type="button">修改</button>
              <button type="button">下一頁</button>
            </div>
          </div>
          <div className={styles.friendsheet}>
            <div>
              <h2>好友列表</h2>
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
