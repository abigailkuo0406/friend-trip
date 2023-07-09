import styles from './arrange-schedule.module.css'
import Image from 'next/image'
import Jiufen from '@/assets/fake-data/fake-jiufen.png'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'

export default function InitCard() {
  return (
    <>
    <div className="container ">
          <div className="card ">
            <div className="">
              <div className="">
                <Image
                  src={Jiufen }
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ width: '50%' }}
                ></Image>
              </div>
              <div className="container ">
                <div className="card-body">
                <h5 className={styles.text}>
                    九份老街
                </h5>
                {Array(4)
                .fill(1)
                .map((v, i) => {
                  return <BsStarFill />
                })}
                 <BsStarHalf />
                </div>
              </div>
            </div>
            <div>
            <p>預計停留時間: 30 分鐘</p>
            </div>
          </div>
        </div>
    
    
    </>
  )
}