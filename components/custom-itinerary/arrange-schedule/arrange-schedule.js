import Image from 'next/image'
import Host from '@/assets/fake-data/fake-persona.png'
import Jiufen from '@/assets/fake-data/fake-jiufen.png'
import { FaRegEdit } from 'react-icons/fa'
import { BsPersonPlus } from 'react-icons/bs'
import { LiaSave } from 'react-icons/lia'
import { FiMoreHorizontal } from 'react-icons/fi'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'
import { BsPlusLg } from 'react-icons/bs'
import styles from './arrange-schedule.module.css'

import Jiufen1 from '@/assets/fake-data/fake-jiufen.png'
import Link from 'next/link'


export default function ArrangeScheduleSide() {
  return (
    <>
      <div className={styles.container}>
        {/* sidebar */}
        <div className={styles.sideBar}>
        {/* 標題及會員大頭照 */}
          <div className={styles.top}>
            <div className={styles.linkIcon}>
              <Link href="#">
                <h4>
                  <FaRegEdit />
                </h4>
              </Link>
              <Link href="#">
                <h4>
                  <BsPersonPlus />
                </h4>
              </Link>
              <Link href="#">
                <h4>
                  <LiaSave />
                </h4>
              </Link>
              <Link href="#">
                <h4>
                  <FiMoreHorizontal />
                </h4>
              </Link>
            </div>
            {/* 行程名稱及會員大頭照 */}
            <div className={styles.initTitle}>
              <div className={styles.initText}>
                <h4>九份 & 平溪天燈一日遊</h4>
                <div className="d-flex mt-3">
                  <Image
                    src={Host}
                    alt="user"
                    width={32}
                    height={32}
                    priority={true} //圖片預先載入
                  ></Image>
                  <p className="usr_name my-auto mx-2">Amber</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.list}>
          <div className={styles.containerRight} data-bs-spy="scroll" data-bs-smooth-scroll="true">
          {/* ul＋li(包含文字內容要包一起) */}
          <ul className={styles.content} >
          <li className={styles.li}>
          <div className={styles.time}>出發時間：8:00</div>
          {/* 景點資訊 */}
          <div className="d-flex">
          <Image
                  src={Jiufen }
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ width: '50%' }}
                ></Image>
                <div className="mx-2 text-body">
                <h6 className="">寧夏觀光夜市</h6>
              <BsStarFill/> 
              </div>
           </div>     
        <p>預計停留：30分鐘</p>
          </li>
          <li className={styles.li}>
          <div className={styles.time}>09:00 AM</div>
        <p>How is it already 9:00? Just how??? 🤯🤯</p>
          </li>
          </ul>
          </div>
          </div>
         {/* 新增行程btn */}
         <button type="button" className="btn  btn-link"><BsPlusLg/>新增行程</button>
        
        </div>
        {/* map */}
        <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.342514218509!2d121.51283001075076!3d25.05637757770938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96b56cf45c5%3A0xa2e6923fa27a10b4!2z5a-n5aSP5aSc5biC!5e0!3m2!1szh-TW!2stw!4v1688711161358!5m2!1szh-TW!2stw"
          width={600}
          height={700}
          style={{ border: 0 }}
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      </div>



    </>
  )
}
