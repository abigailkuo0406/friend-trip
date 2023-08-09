import { useEffect, useState, useContext } from 'react'
import Image from 'next/image'
import Host from '@/assets/fake-data/fake-persona.png'
import styles from './public-init.module.css'
import Link from 'next/link'
import AuthContext from '@/context/AuthContext'
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


  //取得itin_id
  const changeSelectLocalStorage = () => {
    console.log('changeSelectLocalStorage==>', props)
    localStorage.setItem(
      'select_schedule_info',
      JSON.stringify({ itin_member: props.itin_id, itin_name: props.name,itin_memberName:props.member_name,itin_image:props.member_images,itin_ppl:props.ppl
      })
    )
  }
  return (
    <>
      <div className="mx-3">
        <div className={`card mb-4  ${styles.card}`} style={{ width: 250 }}>
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
            <div className="d-flex mb-2">
              {/* 會員(大頭照＋名稱) */}
              <Image
                src={auth.images ? `http://localhost:3002/face/${props.member_images}` : persona}
                className="rounded-circle"
                alt={auth.member_name}
                width={35}
                height={35}
                priority={true} //圖片預先載入
              />
              <p className={`d-flex align-items-center my-auto mx-2  ${styles.spnaName}`}>{props.member_name}</p>
            </div>
            <h5 className={`card-title text-truncate mx-2 mt-3 ${styles.cardTitle}`}>{props.name}</h5>
            <div className="d-flex justify-content-between ">
              <div className="mx-2 mt-4 ">
                <p className={`card-text mx-1 ${styles.cardText}`} >{formattedCreateAt}</p>
              </div>
              <Link
                href="/public-itinerary/apply-task"
                onClick={changeSelectLocalStorage}
                className={styles.textcolor}
              >
              <button type="button" className={`btn mt-3 mx-1 ${styles.btn}`}>參加</button>
              </Link>
            </div>
          </div> 
        </div>
      </div>
    </>

  )
}
