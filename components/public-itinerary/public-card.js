import { useEffect, useState, useContext } from 'react'
import Image from 'next/image'
import Host from '@/assets/fake-data/fake-persona.png'
import styles from './public-init.module.css'
import Link from 'next/link'
import AuthContext from '@/context/AuthContext'
import { PopoverPaper } from '@mui/material'
import { TbPropeller } from 'react-icons/tb'


export default function PublicCard (props) {

  //取得登入之會員資料
  const { auth } = useContext(AuthContext)
  // 格式化日期
  const formatDateString = (dateString) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0') //padStart->日期維持2位數 ex.05
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}年${month}月${day}日`
  }
  const formattedCreateAt = formatDateString(props.date) // 格式化后的創建日期

  console.log('props.itin_id',props.itin_id)

  return (
    <>

      <div>
        <div className={`card mx-2 mb-3 ${styles.card}`} style={{ width: 250 }}>
          {/* 行程封面照 */}
          <Image
            src={`http://localhost:3002/img/itinerary-photo/${props.coverPhoto}`}
            className="card-img-top rounded-top-4"
            alt={props.coverPhoto}
            height={200}
            width={200}
            priority={true}
          />
          <div className="card-body">
            <div className="d-flex mb-4">
              {/* 會員(大頭照＋名稱) */}
              <Image
                src={auth.images ? `http://localhost:3002/face/${props.member_images}` : persona}
                className="rounded-circle my-auto"
                alt={auth.member_name}
                width={32}
                height={32}
                priority={true} //圖片預先載入
              />
              <p className="d-flex align-items-center mt-3 mx-2">{props.member_name}</p>
            </div>
            <h5 className={`card-title text-truncate ${styles.cardTitle}`}>{props.name}</h5>
            <div className="d-flex justify-content-between pt-2 ">
              <div className="pt-2">
                <p className={`card-text ${styles.cardText}`} >{formattedCreateAt}</p>
              </div>
              <Link
                href="/public-itinerary/apply-task"
                onChange={()=>changeLocalStorage(v.itin_id)}
              >
              <button type="button" className={`btn ${styles.btn}`}>參加</button>
              </Link>
            </div>
          </div> 
        </div>
      </div>
    </>

  )
}
