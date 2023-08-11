import React from 'react'
import Image from 'next/image'
import styles from './save-view-task.module.css'
import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5'
import { BsTelephone } from 'react-icons/bs'
import { TfiLocationPin } from 'react-icons/tfi'

export default function SaveViewModal(paProps) {
  const { photo_url, sid } = paProps
  const formattedWeekdayText = paProps.weekdayText.replace(/,星期/g, '\n星期')
  const weekdayText = formattedWeekdayText.replace(/"/g, '\n')

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
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className={`modal-title fs-5 ${styles.text}`}
                  id={`exampleModal_${sid}`}
                >
                  {paProps.name}
                </h1>
                <button
                  type="button"
                  className={`btn-close ${styles.modalClose}`}
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
                <div className={`d-flex mt-4 ${styles.text}`}>
                  <TfiLocationPin className={`${styles.location}`} />
                  <p className="mx-3">{paProps.formattedAddress}</p>
                </div>
                <div
                  className={`${styles.text} d-flex
                `}
                >
                  <div className={`d-flex ${styles.weekdayText}`}>
                    <IoTimeOutline className={`${styles.iconColor}`} />
                    <p className="mx-3">{weekdayText}</p>
                  </div>
                </div>
                <div className={`d-flex ${styles.text}`}>
                  <BsTelephone className={`${styles.iconColor}`} />
                  <p className="mx-3"> {paProps.phoneNumber}</p>
                </div>
              </div>
              {/* <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  關閉
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
