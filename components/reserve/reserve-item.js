import React, { use, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../restaurant/restaurant.module.css'
import Button from '@/components/common/button/btn-normal'

export default function ReserveItem({
    reserveId,
    restId,
    restName,
    restImg,
    reserveDate,
    reserveTime,
    reservePeopleNum
}) {

    //拆分日期
    const dateArr = reserveDate.split('-')

    const [invites, setInvites] = useState()
    // 取得訂位中邀請資料
    useEffect(() => {
        fetch('http://localhost:3002/reserveinvites', {
            method: 'GET'
        })
            .then((r) => r.json())
            .then((invites) => {
                setInvites(invites.rows)

            })


    }, [])
    console.log('AA', invites)

    const [inviteList, setInviteList] = useState({})

    useEffect(() => {
        if (invites) {
            const arr = invites.filter((v) => {
                return v.reserveId == reserveId

            })
            setInviteList(arr[0])

        }

    }, [invites])

    useEffect(() => {
        console.log('BB', inviteList)

    }, [inviteList])


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
                                <p className="card-text text-truncate my-4">訂單狀態</p>
                            </div>


                            <div className='d-flex'>
                                <p className="card-text text-truncate me-2">
                                    訂位資訊：
                                </p>
                                <p className="card-text text-truncate me-2">
                                    {dateArr[0]}
                                    <span className='ms-1'>年</span>
                                </p>
                                <p className="card-text text-truncate me-2">
                                    {dateArr[1]}
                                    <span className='ms-1'>月</span>
                                </p>
                                <p className="card-text text-truncate me-3">
                                    {dateArr[2]}
                                    <span className='ms-1'>日</span>
                                </p>
                                <p className="card-text text-truncate me-3">
                                    {reserveTime}
                                </p>
                                <p className="card-text text-truncate me-2">
                                    {reservePeopleNum}
                                    <span className='ms-1'>位成人</span>
                                </p>
                            </div>

                            {inviteList.iv_member_id ?
                                <div>
                                    <p className="card-text text-truncate my-4">與會好友</p>
                                    <Image src={`http://localhost:3002/face/${inviteList.images}`}
                                        className={`rounded`}
                                        width={50}
                                        height={50} />
                                </div>
                                : ''}
                            {/* <p>訂單編號{reserveId}</p>
                            <p>好友{inviteList.iv_member_id}</p> */}
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
