import React from 'react'
import AdminLayout from '@/components/layout/admin-layout'
import styles from './edit.module.css'
export default function Edit() {
  return (
    <>
      <div>
        <div className={styles.side}></div>
        <div className={styles.profileside}>
          <div className={styles.editplace}>
            <div>
              <h2>個人資料修改</h2>
            </div>
            <div>
              <label htmlFor="email">電子信箱/帳號</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
