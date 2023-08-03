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
    const rid = parseInt(router.query.rid)

    //設定單筆訂位資料
    const [reserveDetails, setReserveDetails] = useState()

    useEffect(() => {
        fetch(`http://localhost:3002/reserve/${rid}`, {
            method: 'GET'
        })
            .then((r) => r.json())
            .then((details) => {
                rid ? setReserveDetails(details.row) : 1
                console.log(details.row)
            })

    }, [rid])

    // //邀請好友名單
    // const [inviteList, setInviteList] = useState([])
    // const inviteListChange = (ivList) => {
    //     setInviteList(ivList)

    // }
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

            />




        </>
    )
}
ReseveDetails.getLayout = function (page) {
    return <AdminLayout>{page}</AdminLayout>
}
