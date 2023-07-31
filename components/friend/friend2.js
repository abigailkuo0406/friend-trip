import React, { useEffect, useState, useContext } from 'react'

import styles from './friend2.module.css'
import BtnNormal from '@/components/common/button/btn-normal'
import AuthContext from '@/context/AuthContext' // 會員 context 取用
export default function Friend2({ setPage }) {
  const { auth, setAuth } = useContext(AuthContext) // 透過 auth 抓取登入的會員資料
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
              <label htmlFor="emailadd">身高</label>
              <p>{auth.height}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">體重</label>
              <p className={styles.p}>{auth.weight}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">星座</label>
              <p className={styles.p}>{auth.zodiac}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">血型</label>
              <p className={styles.p}>{auth.bloodtype}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">抽菸</label>
              <p className={styles.p}>{auth.smoke}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">酒精</label>
              <p className={styles.p}>{auth.alchohol}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">教育程度</label>
              <p className={styles.p}>{auth.education_level}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">工作</label>
              <p className={styles.p}>{auth.job}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">自我介紹</label>
              <p className={styles.p}>{auth.profile}</p>
            </div>
            <div className={styles.labelbar}>
              <label htmlFor="emailadd">手機號碼</label>
              <p className={styles.p}>{auth.mobile}</p>
            </div>
            <div className="d-flex justify-content-end gap-3">
              <BtnNormal
                btnText="修改"
                addClassforButton={`btn-dark ${styles.btnsize}`}
              />
              <BtnNormal
                type="button"
                value="button"
                btnText="上一頁"
                addClassforButton={`btn-dark ${styles.btnsize}`}
                onClick={() => {
                  setPage(1)
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
