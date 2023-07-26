import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../restaurant/restaurant.module.css'
import Button from '@/components/common/button/btn-normal'

export default function ReserveItem({
    restId,
    restName,
    restImg,
    reserveDate,
    reserveTime,
    reservePeopleNum
}) {
    console.log(restId,
        reserveDate,
        reserveTime,
        reservePeopleNum)



    return (
        <>
            <div className="card mb-3 radius20px">
                <div className="row g-0 my-3">
                    <div className="col-md-3">
                        <div className={styles.imgClass}>
                            <Image
                                src={`http://localhost:3002/restImg/${restImg}`}
                                className={`rounded ms-2 ${styles.img1}`}
                                width={200}
                                height={200}
                                priority={true}
                            />
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="card-body">
                            <div className='d-flex'>
                                <h2 className="card-title">{restName}</h2>
                            </div>

                            <p className="card-text text-truncate my-4">訂單狀態</p>
                            <p className="card-text text-truncate my-4">訂位日期：{reserveDate}</p>
                            <p className="card-text text-truncate my-4">訂位時間：{reserveTime}</p>
                            <p className="card-text text-truncate my-4">訂位人數：{reservePeopleNum}</p>
                            <p className="card-text text-truncate my-4">與會好友</p>
                            <Button
                                btnText='訂位'
                                // onClick={modalOpen}
                                bsModle1={`#exampleModalToggle`}
                                bsModle2='modal'
                            />
                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}
