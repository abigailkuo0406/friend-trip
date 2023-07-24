// import styles from './arrange-schedule.module.css'
import Image from 'next/image'
import Jiufen from '@/assets/fake-data/fake-jiufen.png'
import { BsStarHalf, BsStarFill } from 'react-icons/bs'
import styles from './arrange-schedule.module.scss'
import { AiOutlineDelete } from "react-icons/ai";

export default function InitCard({ selectedViews }) {
  // console.log('selectedViews===============', selectedViews)


  return (
    <>
      <ol className={`${styles.ol}`}>
        {selectedViews.map((view, index) => {
          return (
            <div className="mx-3">
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
                    <button type="button" className="btn"
                   ><AiOutlineDelete /></button>
                    
                  </div>
                )}
              </li>
            </div>
          )
        })}
      </ol>
    </>
  )
}
