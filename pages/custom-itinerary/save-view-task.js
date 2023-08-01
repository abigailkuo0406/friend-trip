import { useEffect, useState } from 'react'
import AdminLayout from '@/components/layout/admin-layout'
import SaveViewInit from '@/components/custom-itinerary/save-view-task/save-view-task'
import CoverPhoto from '@/components/custom-itinerary/save-view-task/cover-photo'
import Image from 'next/image'
import Link from 'next/link'
import User from '@/assets/fake-data/fake-persona.png'
import { FaRegEdit } from 'react-icons/fa'
import styles from '@/components/custom-itinerary/save-view-task/save-view-task.module.css'
import { Router, useRouter } from 'next/router'

export default function SaveViewTask() {
  const router=useRouter()
  const [data, setData] = useState([])
  const firstData = data[0] // 取得第一筆資料
  const itinName = firstData ? firstData.itin_name : '' // 提取行程名稱
  const itinDate = firstData ? firstData.date : ''
  const itinCoverPhoto = firstData ? firstData.coverPhoto : ''

  const[memberName,setMemberName]=useState('')
  
  useEffect(()=>{
    const storedData = localStorage.getItem('auth')
        const parsedData = JSON.parse(storedData);
        const name=parsedData? parsedData.member_name:''
        setMemberName(name)
  },[])

  // const getName = () => {
  //   if(typeof window!=='undefined'){
  //     const storedData = localStorage.getItem('auth')
  //     const parsedData = JSON.parse(storedData);
  //     const memberName=parsedData? parsedData.member_name:''
  //     console.log('storedData',memberName)
  //     return memberName
  //   }else{
  //     console.log('getName,錯誤')
  //   }
    
  // }

  //讀取資料庫
  useEffect(() => {
    const storedData = localStorage.getItem('schedule_info')
    const parsedData = JSON.parse(storedData)
    const itinId=parsedData.itin_member

    // API串接
    fetch(`http://localhost:3002/save-view?itin_member=${itinId}`)
      .then((r) => r.json())
      .then((data) => {
        setData(data)
        console.log('data', data)
      })
  }, [])


const handleEditClick=(itinId)=>{
  console.log('EditClick Data',data)
  console.log('EditClick itinId',itinId)
  const itinName=data.find((item)=>item.itin_id===itinId)?.itin_name
  console.log('itinName',itinName)
  localStorage.setItem('edit itin_name',itinName)
  router.push(`/custom-itinerary/arrange-schedule`)

}


  // 格式化日期
  const formatDateString = (dateString) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0') //padStart->日期維持2位數 ex.月份05
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}年${month}月${day}日`
  }
  const formattedCreateAt = formatDateString(itinDate) // 格式化后的創建日期

  return (
    <>
      <div className="container">
        <div className="position-relative">
          <CoverPhoto itinName={itinName}  
            itinCoverPhoto={itinCoverPhoto}
          />
        </div>
        <div className="d-flex justify-content-between mt-3 mx-2 ">
          <div className="d-flex align-items-cente ">
            <Image
              src={User}
              alt="Picture of the User"
              width={50}
              height={50}
              priority={true} //圖片預先載入
            ></Image>
            <div className=" flex-column mx-2">
              <p className="usr_name">{memberName}</p>
              <p className="date">{formattedCreateAt}</p>
            </div>
          </div>
          <div className="my-auto">
          {/* <button
                  className={`btn ${styles.link}`}
                  onClick={handleSaveClick}
                >
                  <FaRegEdit />
                </button> */}

            <Link
              href="/custom-itinerary/arrange-schedule"
              className={styles.pageLink}
  
            >
              <FaRegEdit />
            </Link>
          </div>
        </div>
      </div>
      <ol className={`${styles.ol}`}>
        {data.map((v, i) => {
          return (
            <li key={i} className={`${styles.li}`}>
              <SaveViewInit
                itinOrder={v.itin_order}
                name={v.name}
                formattedAddress={v.formatted_address}
                weekdayText={v.weekday_text}
                phoneNumber={v.phone_number}
              />
            </li>
          )
        })}
      </ol>
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
SaveViewTask.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
