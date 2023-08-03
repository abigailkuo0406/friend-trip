import React from 'react'
import Image from 'next/image'
import styles from './save-view-task.module.css'
import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5'
import { BsFillTelephoneFill } from 'react-icons/bs'

export default function SaveViewModal(paProps) {
  // const formattedWeekdayText = props.weekdayText.split(/,|"/)Ｆ
  const { photo_url, sid } = paProps

  return (
    <>
    <div>
      <button
        type="button"
        className={`btn btn-link px-4 ${styles.modalLink}`}
        data-bs-toggle="modal"
        data-bs-target={`#exampleModal_${paProps.sid}`}
      >
        {paProps.name}
      </button>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={`exampleModal_${paProps.sid}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`exampleModal_${sid}`}>
                {paProps.name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Image
                src={`http://localhost:3002/img/view-img/${photo_url}`}
                width={460}
                height={300}
                alt={photo_url}
                priority={true} //圖片預先載入
              />
              <div>
                <p className={styles.text}>
                  <IoLocationOutline className={`mx-2 ${styles.iconColor}`} />
                  {paProps.formattedAddress}
                </p>
              </div>
              <div className={`${styles.text} mx-2 `}>
                <p>
                  <IoTimeOutline className={`${styles.iconColor}`} />
                  {paProps.weekdayText.split(',').map((item, index) => {
                    return <span key={index}>{item}</span>
                  })}
                </p>
              </div>
              <div>
              <p className={styles.text}>
                    <BsFillTelephoneFill
                      className={`mx-2 ${styles.iconColor}`}
                    />
                    {paProps.phoneNumber}
                  </p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                關閉
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
