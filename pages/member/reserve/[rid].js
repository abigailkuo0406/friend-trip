import React, { createContext } from 'react'
import AdminLayout from '@/components/layout/admin-layout'
import Button from '@/components/common/button/btn-normal'
import Modal from '@/components/reserve/reserve-edit'



import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'


export default function ReseveDetails() {
    // 取用useRouter方法
    const router = useRouter()

    // 取得當頁動態編號
    // const rid = parseInt(router.query.rid)
// fetch(`http://localhost:3002/reserve/`)


    return (
        <>
            <h1>訂單細節</h1>
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
            <Modal
            // modalState={modal}
            // reserveDetails={reserveDetails}

            />





        </>
    )
}
ReseveDetails.getLayout = function (page) {
    return <AdminLayout>{page}</AdminLayout>
}
