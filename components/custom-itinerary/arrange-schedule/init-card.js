import styles from './arrange-schedule.module.css'
import Image from 'next/image'
import Jiufen from '@/assets/fake-data/fake-jiufen.png'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'

export default function InitCard() {
  return (
    <>
              {/* itinerary*/}
              <div className="d-flex">
                    <div>
                    <span className={styles.circle_text}>1</span>
                    <div className={styles.line}></div>
                    </div>
                    <Image
                  src={Jiufen }
                  alt="..."
                  width={200}
                  hight={200}
                />
                <h6>寧夏觀光夜市</h6>
                </div>
                <div className="d-flex mt-1 mx-5">
                <h6 className="mt-1">預計停留：</h6>
                <p>30分鐘</p>
                </div>
    </>
  )
}