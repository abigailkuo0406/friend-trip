import React, { createContext, useEffect } from 'react'
import AdminLayout from '@/components/layout/admin-layout'
import Button from '@/components/common/button/btn-normal'
import ReserveEdit from '@/components/reserve/reserve-edit'
import FriendSty from '@/components/invite/friends-list.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'


export default function ReseveDetails() {
    // 取用useRouter方法
    const router = useRouter()

    // 取得當頁動態編號
    const rid = router.query.rid

    //設定單筆訂位資料
    const [reserveDetails, setReserveDetails] = useState()

    useEffect(() => {
        fetch(`http://localhost:3002/reserve/${rid}`, {
            method: 'GET'
        })
            .then((r) => r.json())
            .then((details) => {
                rid ? setReserveDetails(details.row) : 1
                // console.log('cccc', details.row)
            })

    }, [rid])
    // console.log(reserveDetails)

    //拆分日期

    const dateArr = reserveDetails ? reserveDetails.reserve_date.split('-') : []

    // 定義邀請名單
    const [invitesData, setInvitesData] = useState()
    const [invite, setInvite] = useState([])

    // 取得訂位邀請資料
    useEffect(() => {
        fetch('http://localhost:3002/reserveinvites', {
            method: 'GET'
        })
            .then((r) => r.json())
            .then((invites) => {
                setInvitesData(invites.rows)
                // console.log('xxx:', invites)

            })

    }, [])
    // console.log('y:', invitesData)



    // 針對訂單編號串接對應的邀請名單
    useEffect(() => {
        if (rid) {
            if (invitesData) {
                const arr = invitesData.filter((v) => {
                    // console.log('33', rid, v)

                    return v.reserveId == rid
                })
                // console.log('arr', arr)
                setInvite(arr)
            }
        }
    }, [invitesData])

    // console.log('www:', invite)

    return (
        <>
            {/* <h1>訂單{rid}</h1> */}
            {reserveDetails ?
                <div>
                    <h2 className="card-text text-truncate me-2">
                        {reserveDetails.RestName}
                    </h2>
                    <Image />
                    <h4>訂位日期</h4>
                    <div className='d-flex'>
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
                    </div>
                    <h4>訂位時間</h4>

                    <p className="card-text text-truncate me-3">
                        {reserveDetails.reserve_time}
                    </p>
                    <h4>訂位人數</h4>
                    <p className="card-text text-truncate me-2">
                        {reserveDetails.reserve_people}
                        <span className='ms-1'>位成人</span>
                    </p>
                </div>
                :
                ''
            }
            <h4>邀請好友</h4>
            <div className='d-flex'>
                {invite ?
                    invite.map((v, i) => {
                        return (
                            v.iv_member_id ?
                                <div key={i} className='me-2' >
                                    <Image src={`http://localhost:3002/face/${v.images}`}
                                        className={` ${FriendSty.avatar}`}
                                        width={50}
                                        height={50} />
                                </div>
                                :
                                <p>本次訂位無邀請好友</p>
                        )
                    })
                    :
                    ""
                }

            </div>

            <div className='d-flex'>
                <Button
                    btnText='修改訂位'
                    // onClick={modalOpen1}
                    bsModle1={`#exampleModalToggle`}
                    bsModle2='modal'
                />
                <Button
                    btnText='取消訂位'
                // onClick={modalOpen2}
                />
            </div>
            <ReserveEdit
                // modalState={modal}
                reserveDetails={reserveDetails}
                alreadyInvite={invite}

            />




        </>
    )
}
ReseveDetails.getLayout = function (page) {
    return <AdminLayout>{page}</AdminLayout>
}
