// import styles from './arrange-schedule.module.css'
import Image from 'next/image'
import Jiufen from '@/assets/fake-data/fake-jiufen.png'
import styles from './arrange-schedule.module.scss'
import {RiDeleteBinLine } from 'react-icons/ri'
import Swal from 'sweetalert2'


export default function InitCard ({ selectedViews, onDeleteViews, photoUrl }) {


  // const handleDeleteView = (index,viewName) => {
  //   const isConfirmed=window.confirm(`確定要刪除 "${viewName}"嗎？`)
  //   // 調用傳入的 onDeleteView 函式，將對應索引的行程刪除
  //   Swal.fire({
  //     width: 400,
  //     title: '行程儲存成功囉！',
  //     text: `確定要刪除 "${viewName}"嗎？`,
  //     icon: 'success',
  //     iconColor: '#FABCBF',
  //     color: '#674C87',
  //     confirmButtonColor: '#674C87',
  //     // showConfirmButton: true,
  //     // timer: 1500,
  //   })
  //   if(isConfirmed){

  //     onDeleteViews(index);
  //   }

  // }

  const handleDeleteView = (index, viewName) => {
    const isConfirmed =
      Swal.fire({
        title: `確定要刪除 ${viewName} 紀錄嗎?`,
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
            onDeleteViews(index)
          })
        }
      })
  }

  return (
    <>
      <ol className={`${styles.ol} mx-2`}>
        {selectedViews.map((view, index) => {
          return (
            <li key={index} className={`mt-2 ${styles.li}`}>
              {view && view.name && (
                <div
                  type="button"
                  className={`btn d-flex ${styles.viweColor}`}
                >
                  <div id="placeDetails"><img src={photoUrl}></img></div>
                  <h5 className="my-auto mx-3">{view.name}</h5>
                  <button
                    type="button"
                    className={`btn ${styles.riDeleteBinLine}`}
                    onClick={() => handleDeleteView(index,view.name)}
                  >
                    <RiDeleteBinLine />
                  </button>
                </div>
              )}
            </li>
          )
        })}
      </ol>

    </>
  )
}
