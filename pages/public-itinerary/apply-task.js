import { useEffect, useState, useContext } from 'react'
import AdminLayout from '@/components/layout/admin-layout'
import Image from 'next/image'
import Link from 'next/link'
import persona from '@/assets/fake-data/fake-persona.png'
import SaveViewInit from '@/components/custom-itinerary/save-view-task/save-view-task'
import CoverPhoto from '@/components/custom-itinerary/save-view-task/cover-photo'
// import styles from '@/components/custom-itinerary/save-view-task/save-view-task.module.css'\
import styles from '@/components/public-itinerary/public-init.module.css'
import { Router, useRouter } from 'next/router'
import SaveViewModal from '@/components/custom-itinerary/save-view-task/save-view-modal'
import AuthContext from '@/context/AuthContext'
import ApplyTaskNote from '@/components/public-itinerary/apply-task-note'


export default function ApplyTask () {
  //取得登入之會員資料
  const { auth } = useContext(AuthContext)
  const router = useRouter()
  const [data, setData] = useState([])
  const firstData = data[0] // 取得第一筆資料
  const itinName = firstData ? firstData.itin_name : '' // 提取行程名稱
  const itinDate = firstData ? firstData.date : ''
  const itinPpl = firstData ? firstData.ppl : ''
  const itinNote = firstData ? firstData.note : ''
  const itinCoverPhoto = firstData ? firstData.coverPhoto : ''
console.log('itinName',itinName)
  const [memberName, setMemberName] = useState('')
  const [memberImg, setMemberImg] = useState('')
  // 增加一個狀態來控制 modal 的顯示
  const [showModal, setShowModal] = useState(null)


  useEffect(() => {
    const storedData = localStorage.getItem('select_schedule_info')
    const parsedData = JSON.parse(storedData)
    const itinId = parsedData.itin_member

    // API串接
    fetch(`http://localhost:3002/save-view?itin_member=${itinId}`)
      .then((r) => r.json())
      .then((data) => {
        setData(data)
        // console.log('data==>', data[0])
        setMemberName(data[0].member_name)
        setMemberImg(data[0].images)
        // console.log(memberImg)
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
        <div className="position-relative">
          <CoverPhoto itinName={itinName} itinCoverPhoto={itinCoverPhoto} />
        </div>
        <div className="d-flex justify-content-between mt-3 mx-2 ">
          <div className="d-flex align-items-cente">
            <Image
              src={memberImg ? `http://localhost:3002/face/${memberImg}` : persona}
              alt={memberName}
              width={50}
              height={50}
              priority={true} //圖片預先載入
              className="rounded-circle"
            ></Image>
            <div className="flex-column mx-3">
              <p className={ `usr_name mt-3 ${styles.spnaName}`}>{memberName}</p>
            </div>
            </div>
        </div>
      </div>
      <div>
        <div className="d-flex mt-4">
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
        <div className='mx-4 mt-3'>
          <ApplyTaskNote
            note={itinNote}
            itinDate={itinDate}
            ppl={itinPpl}
          />
        </div>
      </div>

    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
ApplyTask.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
