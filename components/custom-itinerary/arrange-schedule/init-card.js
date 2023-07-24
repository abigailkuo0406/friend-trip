// import styles from './arrange-schedule.module.css'
import Image from 'next/image'
import Jiufen from '@/assets/fake-data/fake-jiufen.png'
import { BsStarHalf, BsStarFill } from 'react-icons/bs'
import styles from './arrange-schedule.module.scss'
import { AiOutlineDelete } from 'react-icons/ai'

export default function InitCard({ selectedViews,onDeleteViews}) {

  // console.log('selectedViews===============', selectedViews)

  const handleDeleteView = (index,viewName) => {
    const isConfirmed=window.confirm(`確定要刪除 "${viewName}"嗎？`)
    // 調用傳入的 onDeleteView 函式，將對應索引的行程刪除
    if(isConfirmed){
      onDeleteViews(index);
    }
   
  }

  return (
    <>
      <ol className={`${styles.ol}`}>
        {selectedViews.map((view, index) => {
          return (

              <li key={index} className={styles.li}>
                {view && view.name && (
                  <div
                    type="button"
                    className={`btn d-flex ${styles.viweColor}`}
                  >
                    {/* <Image
              src={selectedView.Image}
              alt={selectedView.name}
              width={120}
              hight={120}
              className="mx-2"
            /> */}
                    <h6 className="my-auto">{view.name}</h6>
                    <button
                      type="button"
                      className="btn"
                      onClick={() => handleDeleteView(index,view.name)}
                    >
                      <AiOutlineDelete />
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
