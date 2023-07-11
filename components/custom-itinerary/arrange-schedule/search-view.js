import React from 'react'
import styles from './arrange-schedule.module.css'
import Link from 'next/link'
import { BiSearchAlt } from 'react-icons/bi'
import { BiMap } from 'react-icons/bi'

export default function SearchView() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sideBar}>
          <div>
            <div className="mx-2 d-flex">
              <Link href="#">
                <h4 className="mx-4" > 
                  <BiSearchAlt />
                  <p>搜尋</p>
                </h4>
              </Link>
              <Link href="#">
                <h4 className="mx-4">
                  <BiMap />
                  <p>我的景點收藏</p>
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
