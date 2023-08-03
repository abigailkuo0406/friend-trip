import React, { createContext, useEffect } from 'react'
import AdminLayout from '@/components/layout/admin-layout'
import Button from '@/components/common/button/btn-normal'
import ReserveEdit from '@/components/reserve/reserve-edit'




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
                // console.log(details.row)
            })

    }, [rid])

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
                console.log('arr', arr)
                setInvite(arr)
            }
        }
    }, [invitesData])

    console.log('www:', invite)

    return (
        <>
            <h1>訂單{rid}</h1>
            <Image />
            <h2>餐廳名稱</h2>
            <p>訂位日期</p>
            <p>訂位時間</p>
            <p>訂位人數</p>
            <p>與會好友</p>
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
