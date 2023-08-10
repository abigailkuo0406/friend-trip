import { useEffect, useState, useContext } from 'react'
import AdminLayout from '@/components/layout/admin-layout'
import SaveViewInit from '@/components/custom-itinerary/save-view-task/save-view-task'
import CoverPhoto from '@/components/custom-itinerary/save-view-task/cover-photo'
import Image from 'next/image'
import Link from 'next/link'
import persona from '@/assets/fake-data/fake-persona.png'
import { FaRegEdit } from 'react-icons/fa'
import { LuCalendarClock } from 'react-icons/lu'
import styles from '@/components/custom-itinerary/save-view-task/save-view-task.module.css'
import { Router, useRouter } from 'next/router'
import SaveViewModal from '@/components/custom-itinerary/save-view-task/save-view-modal'
import AuthContext from '@/context/AuthContext'
// import { propTypes } from 'react-bootstrap/esm/Image'

export default function SaveViewTask () {
  //取得登入之會員資料
  const { auth } = useContext(AuthContext)
  const router = useRouter()
  const [data, setData] = useState([])
  const firstData = data[0] // 取得第一筆資料
  const itinName = firstData ? firstData.itin_name : '' // 提取行程名稱
  const itinDate = firstData ? firstData.date : ''
  const itinCoverPhoto = firstData ? firstData.coverPhoto : ''
  const itinTime = firstData ? firstData.time : ''
  const [memberName, setMemberName] = useState('')
  const [memberID, setMemberID] = useState('') //追蹤登入使用者是誰
  const [itinMemberID, setItinMemberID] = useState('') //建立行程使用者
  const [memberImg, setMemberImg] = useState('')

  // 增加一個狀態來控制 modal 的顯示
  const [showModal, setShowModal] = useState(null)

  useEffect(() => {
    const storedData = localStorage.getItem('auth')
    const parsedData = JSON.parse(storedData)
    const name = parsedData ? parsedData.member_name : ''
    const id = parsedData ? parsedData.member_id : ''
    setMemberID(id)
  }, [])

  //讀取資料庫(存放的景點)
  useEffect(() => {
    const storedData = localStorage.getItem('schedule_info')
    const parsedData = JSON.parse(storedData)
    const itinId = parsedData.itin_member
    setItinMemberID(parsedData.itin_member_id)

    // API串接
    fetch(`http://localhost:3002/save-view?itin_member=${itinId}`)
      .then((r) => r.json())
      .then((data) => {
        setData(data)
        // console.log('data', data)
        setMemberName(data[0].member_name)
        setMemberImg(data[0].images)

      })
  }, [])

  // 格式化日期
  const formatDateString = (dateString) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0') //padStart->日期維持2位數 ex.月份05
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}/${month}/${day}`
  }
  const formattedCreateAt = formatDateString(itinDate) // 格式化后的創建日期




  

  return (
    <>
    <div className="container">
      <div>
        <div className="position-relative">
          <CoverPhoto itinName={itinName} itinCoverPhoto={itinCoverPhoto} />
        </div>
        <div className="d-flex justify-content-between mt-3 mx-2">
          <div className="d-flex align-items-cente">
            <Image
              src={memberImg ? `http://localhost:3002/face/${memberImg}` : persona}
              alt={memberName}
              width={60}
              height={60}
              priority={true} //圖片預先載入
              className={`rounded-circle`}
            ></Image>
            <div className="flex-column">
              <p className={`usr_name my-4 mx-3 ${styles.text}`}>{memberName}</p>

            </div>
          </div>
          {memberID == itinMemberID ? (
            <div className="my-auto">
              <Link
                href="/custom-itinerary/arrange-schedule"
                className={styles.pageLink}
              >
                <FaRegEdit />
              </Link>
            </div>
          ) : (<div></div>)}
        </div>
      </div>
      {/* 出發時間 */}
      <div className={`pt-3 ${styles.text}`}>
        <div><LuCalendarClock className={`${styles.calendarClock}`} />{formattedCreateAt} {itinTime}
        </div>
      </div>
      <div> 
        <div className="d-flex mt-5">
          <ol className={`${styles.ol}`}>
            {data.map((v, i) => (
              <li key={i} className={`${styles.li}`}>
                <div className="d-flex">
                  {/* SaveViewInit */}
                  <div>
                    <SaveViewInit
                      itinOrder={v.itin_order}
                      name={v.name}
                      photo_url={v.photo_url}
                    />
                  </div>
                  {/* SaveViewModal */}
                  <div className="d-flex align-items-center">
                    <SaveViewModal
                      key={v.sid}
                      sid={v.sid}
                      name={v.name}
                      formattedAddress={v.formatted_address}
                      photo_url={v.photo_url}
                      weekdayText={v.weekday_text}
                      phoneNumber={v.phone_number}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      </div>
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
SaveViewTask.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
