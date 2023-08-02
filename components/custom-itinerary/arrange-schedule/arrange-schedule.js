import { useEffect, useState, useContext } from 'react'
import { Router,useRouter } from 'next/router'
import styles from './arrange-schedule.module.css'
import Image from 'next/image'
import Link from 'next/link'
import InitCard from './init-card'
import Host from '@/assets/fake-data/fake-persona.png'
import { LiaSave } from 'react-icons/lia'
import { FiMoreHorizontal } from 'react-icons/fi' 
import { BsStarHalf, BsStarFill, BsPlusLg, BsPersonPlus } from 'react-icons/bs'
import { BiHomeHeart } from 'react-icons/bi' 
import AuthContext from '@/context/AuthContext'
import Swal from 'sweetalert2'

export default function ScheduleSide({
  changeToSearch,
  selectedView,
  onDeleteView,
  onSaveClick,
  onShowRoute
}) {
  const router = useRouter();
  const [itineraryName, setItineraryName] = useState([])
  // const [filteredItineraryName, setFilteredItineraryName] = useState([])

  //取得登入之會員資料
  const { auth } = useContext(AuthContext)

  // useEffect(() => {
  //   fetch(`http://localhost:3002/try-name`)
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setItineraryName(data)
  //       // console.log('name:', data)
  //     })
  //     .catch((error) => {
  //       console.error('資料接收失敗', error)
  //     })
  // }, [])
  
 //取得行程名稱
  const[itinName,setItinName]=useState('')  
  useEffect(()=>{
    const storedData = localStorage.getItem('schedule_info')
    const parsedData = JSON.parse(storedData)
    const name =parsedData? parsedData.itin_name:''
    setItinName(name)
  },[])
 

  //儲存行程到後端
  const handleSaveClick = () => {
    // 處理點擊事件的邏輯
    // console.log('Handle Save Click is called!')
    Swal.fire({
      width: 400,
      title: '行程儲存成功囉！',
      text:'好好享受這一天的旅程吧!',
      icon: 'success',
      iconColor: '#FABCBF',
      color: '#674C87',
      confirmButtonColor: '#674C87',
      // showConfirmButton: false,
      // timer: 1500,
    })
    onSaveClick()
      //點選建立後3秒後跳轉
    setTimeout(() => {
      router.push('/custom-itinerary/save-view-task')
    }, 2000)
  }

  return (
    <>
      <div className="itineraryContainer ">
        <div className="mapCanvas position-absolute z-3">
          {/* sidebar */}
          <div className="itinerary-fade-in">
            <div className={`trip-list ${styles.tripList} `}>
              <div className="d-flex justify-content-end ">
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

                {/* 

                <Link
                  href="/custom-itinerary/save-view-task"
                  className={styles.link}
                  role="button"
                >
                
                </Link> */}
                <Link href="#" className={styles.link}>
                  <FiMoreHorizontal />
                </Link>
              </div>
              <div className="trip-list-header-info mx-4">
              <h4>{itinName}</h4>
                {/* {filteredItineraryName.map((nameObj) => {
                  return (
                    <h4 key={nameObj.itin_member_id} className={styles.h4}>
                      {nameObj.name}
                    </h4>
                  ) */}
                {/* })} */}
        
                <div className="d-flex mt-3">
                  <Image
                    src={Host}
                    alt="Host"
                    width={32}
                    height={32}
                    priority={true} //圖片預先載入
                  />
                  <p className="usr_name my-auto mx-2">{auth.member_name}</p>
                </div>
              </div>
              <div className="trip-list-day-container mx-2">
                <div className="trip-list-day-header mx-3">
                  <div className="d-flex mt-2">
                    <h6 className="mt-1 mx-1">出發時間：</h6>
                    <div>
                      <input type="time" className={`${styles.time}`}></input>
                    </div>
                  </div>
                </div>
                {/* 行程card */}
                <div className="overflow-y-auto" style={{ height: 520 }}>
                  <InitCard
                    selectedViews={selectedView}
                    onDeleteViews={onDeleteView}
                  />
                  <div className={styles.add}>
                    <button
                      className={`btn ${styles.addbtn}`}
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
