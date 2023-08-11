import { useEffect, useState, useContext } from 'react'
import { Router, useRouter } from 'next/router'
import styles from './arrange-schedule.module.css'
import Image from 'next/image'
import Link from 'next/link'
import InitCard from './init-card'
import persona from '@/public/img/fake-data/fake-persona.png'
import { LiaSave } from 'react-icons/lia'
import { FiMoreHorizontal } from 'react-icons/fi'
import { BsStarHalf, BsStarFill, BsPlusLg, BsPersonPlus } from 'react-icons/bs'
import { BiHomeHeart } from 'react-icons/bi'
import AuthContext from '@/context/AuthContext'
import Swal from 'sweetalert2'
import ScheduleContext from '@/context/ScheduleContext'

export default function ScheduleSide ({
  changeToSearch,
  selectedView,
  onDeleteView,
  onSaveClick,
  onShowRoute,
}) {
  const router = useRouter()

  //取得行程名稱
  const [itinName, setItinName] = useState('')
  useEffect(() => {
    const storedData = localStorage.getItem('schedule_info')
    const parsedData = JSON.parse(storedData)
    const name = parsedData ? parsedData.itin_name : ''
    setItinName(name)

    console.log('itinName', itinName)
  }, [setItinName])

  //取得登入之會員資料
  const { auth } = useContext(AuthContext)
  const {itin_name}=useContext(ScheduleContext)

  //儲存行程到後端
  const handleSaveClick = () => {
    // 處理點擊事件的邏輯
    // console.log('Handle Save Click is called!')
    Swal.fire({
      width: 400,
      title: '行程儲存成功囉！',
      text: '好好享受這一天的旅程吧!',
      icon: 'success',
      iconColor: '#FABCBF',
      color: '#674C87',
      confirmButtonColor: '#674C87',
      showConfirmButton: false,
      // timer: 1500,
    })
    onSaveClick()
    // //點選建立後3秒後跳轉
    setTimeout(() => {
      router.push('/custom-itinerary/save-view-task')
    }, 1000)
  }



  return (
    <>
      <div className="itineraryContainer ">
        <div className="mapCanvas position-absolute z-3">
          {/* sidebar */}
          <div className="itinerary-fade-in">
            <div className={`trip-list ${styles.tripList} `}>
              <div className="d-flex  justify-content-between ">
              <div className="d-flex">
              <Image
                    src={auth.images ? `http://localhost:3002/face/${auth.images}` : persona}
                    alt={auth.member_name}
                    width={40}
                    height={40}
                    priority={true} //圖片預先載入
                    className={`rounded-circle mt-3 ${styles.perName}`}
                  />
                  <p className={`my-auto mx-3 ${styles.itinNameColor}`}>{auth.member_name}</p>
               </div>   
                  <div className='d-flex justify-content-end'>
                <Link href="/member/itinerary" className={styles.link}>
                  <BiHomeHeart />
                </Link>
              
                {/* <Link href="#" className={styles.link}>
                  <FaRegEdit />
                </Link> */}
                {/* <Link href="#" className={styles.link}>
                  <BsPersonPlus />
                </Link> */}
                <button
                  className={`btn ${styles.link}`}
                  onClick={handleSaveClick}
                >
                  <LiaSave />
                </button>
                <Link href="#" className={styles.link}>
                  <FiMoreHorizontal />
                </Link>
                </div>
              </div>
              <div className={`trip-list-header-info mx-4 ${styles.itinNameColor}`}>
                <h4 className='mt-3 mx-2'>{itin_name}</h4>
                {/* <div className="d-flex mt-3">
                  <Image
                    src={auth.images ? `http://localhost:3002/face/${auth.images}` : persona}
                    alt={auth.member_name}
                    width={40}
                    height={40}
                    priority={true} //圖片預先載入
                    className={`rounded-circle ${styles.perName}`}
                  />
                  <p className="usr_name my-auto mx-2">{auth.member_name}</p>
                </div> */}
              </div>
              
              <div className="trip-list-day-container mx-2">
                {/* <div className="trip-list-day-header mx-3">
                  <div className="d-flex mt-2">
                    <h6 className="mt-1 mx-1">出發時間：</h6>
                    <div>
                      <input type="time" className={`${styles.time}`}></input>
                    </div>
                  </div>
                </div> */}
                {/* 行程card */}
                <div className="overflow-y-auto mt-4 mx-3" style={{ height: 520 }}>
                  <InitCard
                    selectedViews={selectedView}
                    onDeleteViews={onDeleteView}
                  />
                  <div className={styles.add}>
                    <button
                      className={`btn ${styles.addbtn} mt-4`}
                      onClick={changeToSearch}
                    >
                      <BsPlusLg />
                      新增行程
                    </button>
                    <button
                      className={`btn ${styles.addbtn}`}
                      onClick={onShowRoute}
                    >
                      <BsPlusLg />
                      規劃路線
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
