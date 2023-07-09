import Image from 'next/image'
import Jiufen from '@/assets/fake-data/fake-jiufen.png'
import User from '@/assets/fake-data/fake-persona.png'
import { FaRegEdit } from 'react-icons/fa'
import styles from './save-view-task.module.css'
import { IoLocationOutline } from 'react-icons/io5'
import { IoTimeOutline } from 'react-icons/io5'
import { BsFillTelephoneFill } from 'react-icons/bs'
import Link from 'next/link'

export default function SaveViewInit() {
  return (
    <>
      <div className="container">
        <div className="position-relative">
          <Image src={Jiufen} 
              width={940}
              height={400}
              quality={75}//圖片質量
              style={{borderRadius: '5px'}}
          />
          <h3 className="position-absolute bottom-0 start-0 text-white mx-3">九份 & 平溪天燈一日遊</h3>
        </div>
        
        <div className="d-flex justify-content-between mt-3 mx-2 ">
          <div className="d-flex align-items-cente ">
            <Image
              src={User}
              alt="user"
              width={50}
              height={50}
              priority={true} //圖片預先載入
            ></Image>
            <div className=" flex-column mx-2">
              <p className="usr_name ">Amber</p>
              <p className="date">2020年10月10日</p>
            </div>
          </div>
          <div className="my-auto">
            <Link href="/custom-itinerary">
              <h4>
                <FaRegEdit />
              </h4>
            </Link>
          </div>
        </div>
      </div>
      <ul className="number mt-4">
        <li>
          <div className="d-flex">
            <div>
              <span className={styles.circle_text}>1</span>
              <div className={styles.line}></div>
            </div>
            <p className="mx-2">8:00</p>
            <Image src={Jiufen} style={{ width: '20%', height: 'auto' }} />
            {/* modal-btn */}
            <button
              type="button"
              className="btn btn-link px-4"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              寧夏夜市
            </button>
          </div>
          {/* modal-body */}
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    寧夏夜市
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <Image src={Jiufen} style={{ width: '100%', height: 'auto' }} />
                <div className="modal-body">
                  <p>
                    <IoLocationOutline className="mx-2" />
                    103台北市大同區寧夏路寧夏夜市
                  </p>
                  <p>
                    <IoTimeOutline className="mx-2" />
                    星期六、17:00–01:00
                  </p>
                  <p>
                    <BsFillTelephoneFill className="mx-2" />
                    0987-456-794
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  )
}
