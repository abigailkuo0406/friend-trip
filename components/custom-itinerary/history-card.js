import { FiMoreHorizontal } from 'react-icons/fi'
import { useContext } from 'react'
import styles from './history.module.css'
import Image from 'next/image'
import Swal from 'sweetalert2'
import person from '@/assets/fake-data/fake-persona.png'
import Link from 'next/link'
import AuthContext from '@/context/AuthContext'


export default function HistoryCard(props) {
   //取得登入之會員資料
   const { auth } = useContext(AuthContext)
  // 格式化日期
  const formatDateString = (dateString) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0') //padStart->日期維持2位數 ex.月份05
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}年${month}月${day}日`
  }
  const formattedCreateAt = formatDateString(props.date) // 格式化后的創建日期

 

  // 刪除
  const handleDelete = (e) => {
    e.preventDefault() //取消點擊的預設行為，防止Link元件點擊被觸發
    Swal.fire({
      title: `確定要刪除 ${props.name} 紀錄嗎?`,
      text: '刪除後就不能保留囉！!',
      icon: 'warning',
      iconColor: '#D0A5CA',
      showCancelButton: true,
      color: '#717171',
      confirmButtonColor: '#674C87',
      cancelButtonColor: '#FABCBF',
      confirmButtonText: '確定',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          width: 400,
          text: '刪除成功',
          icon: 'success',
          iconColor: '#FABCBF',
          color: '#674C87',
          confirmButtonColor: '#674C87',
        }).then(() => {
          props.onDelete(props.itin_id) // 傳遞 itin_id 到父元件的 handleDelete 函數
          window.location.reload() //刪除成功後重新載入當前頁面
        })
      }
    })
  }

  //取得itin_id
  const changeLocalStorage = () => {
    console.log('changeLocalStorage==>', props)
    localStorage.setItem(
      'schedule_info',
      JSON.stringify({ itin_member: props.itin_id, itin_name: props.name,itin_member_id:props.member_id})
    )
  }


  return (
    <>
      <div className="container">
          <Link
            href="/custom-itinerary/save-view-task"
            onClick={changeLocalStorage}
          >
            <div className="card mb-3 rounded-4 ">
              <div className="row g-0 d-flex align-items-center">
                <div className="col-md-4">
                  <Image
                    src={`http://localhost:3002/img/itinerary-photo/${props.coverPhoto}`}
                    className={`img-fluid rounded-5 ${styles.img}`}
                    alt={props.coverPhoto}
                    width={400}
                    height={400}
                    priority={true}
                  ></Image>
                </div>
                <div className="col-md-8 d-flex justify-content-between">
                  <div className="card-body">
                    <div className="d-flex justify-content-between ">
                      <div className="d-flex">
                        <h5 className={styles.text}>{props.name}</h5>
                        <p className={`badge ${props.public=='公開' ? styles.public : styles.private}`}>
                          {props.public} 
                        </p>
                      </div>
                      <div>
                        {/* 刪除 ,控制狀態要不要顯示刪除icon*/}
                        {props.filterCondition =='public' ||props.filterCondition =='private'  ?(
                        <div className="dropdown">
                          <button
                            className="btn"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <FiMoreHorizontal />
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <button
                                className={`dropdown-item ${styles.dropdownDelete }`}
                                onClick={handleDelete}
                              >
                                刪除
                              </button>
                            </li>
                          </ul>
                        </div>
                        ):(<div></div>)}
                      </div>
                    </div>
                    <div className={`card-text ${styles.truncate}`}>
                    <p className={`${styles.truncateText}`}>
                      {props.description}
                    </p>
                    </div>
                  
                    {/* <div className="d-flex ">
                      <div>
                        好友：
                        <Image
                          src={person}
                          className="rounded-circle mx-1"
                          alt="person"
                          style={{ width: '5%', height: 'auto' }}
                          priority={true}
                        />
                        <Image
                          src={person}
                          className="rounded-circle"
                          alt="person"
                          style={{ width: '5%', height: 'auto' }}
                          priority={true}
                        />
                      </div>
                    </div> */}
                    <div className={styles.cardText}>
                      <small>{formattedCreateAt}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
    </>
  )
}
