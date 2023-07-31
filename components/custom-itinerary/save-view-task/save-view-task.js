import Image from 'next/image'
import Jiufen from '@/assets/fake-data/fake-jiufen.png'
import styles from './save-view-task.module.css'
import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5'
import { BsFillTelephoneFill } from 'react-icons/bs'



export default function SaveViewInit(props) {

  const formattedWeekdayText = props.weekdayText.split(/,|"/)
  


  return (
    <>
      <div>
        <div>
        {/* <p>{props.itinOrder}</p> */}
          <div className="d-flex">
            <div className="mx-3">
              {/* <div className={styles.line}></div> */}
            <p className="mx-3">8:00</p>   
            </div>
            <Image
              src={Jiufen}
              style={{ width: '20%', height: 'auto' }}
              priority={true}
              alt="Picture of the Jiufen"
            />
            {/* modal-btn */}
            <button
              type="button"
              className={`btn btn-link px-4 ${styles.modalLink}`}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              {props.name}
            </button>
          </div>
          {/* modal-body */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className={`modal-title fs-5 ${styles.text}`}
                    id="exampleModalLabel"
                  >
                    {props.name}
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <Image
                  src={Jiufen}
                  width={500}
                  height={300}
                  alt="Picture of the Jiufen"
                  priority={true} //圖片預先載入
                />
                <div className="modal-body">
                  <p className={styles.text}>
                    <IoLocationOutline className={`mx-2 ${styles.iconColor}`} />
                  {props.formattedAddress}
                  </p>
                  <div className={`${styles.text} mx-2 `}>
                  <p><IoTimeOutline className={`${styles.iconColor}`} /></p> 
                    {formattedWeekdayText.map((text,index)=>(
                      <p key={index} className={styles.weekdayText}>{text}</p>
                    ))}
                  </div> 
                  <p className={styles.text}>
                    <BsFillTelephoneFill
                      className={`mx-2 ${styles.iconColor}`}
                    />
                    {props.phoneNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
