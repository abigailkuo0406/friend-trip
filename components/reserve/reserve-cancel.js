import React from 'react'
import FriendSty from '@/components/invite/friends-list.module.css'
import Image from 'next/image'
import Button from '@/components/common/button/btn-normal'


export default function ReserveCancel({
    reserveDetails
}) {
    // console.log('reserveDetails', reserveDetails)
    return (
        <>
            {reserveDetails ?
                <div className=''>
                    <p className="card-text text-truncate me-2">
                        餐廳名稱
                    </p>
                    <p className="card-text text-truncate me-2">
                        {reserveDetails.restName}
                    </p>
                    <p className="card-text text-truncate me-2">
                        訂位日期
                    </p>
                    <div className='d-flex'>
                        <p className="card-text text-truncate me-2">
                            {reserveDetails.reserveDateArr[0]}
                            <span className='ms-1'>年</span>
                        </p>
                        <p className="card-text text-truncate me-2">
                            {reserveDetails.reserveDateArr[1]}
                            <span className='ms-1'>月</span>
                        </p>
                        <p className="card-text text-truncate me-3">
                            {reserveDetails.reserveDateArr[2]}
                            <span className='ms-1'>日</span>
                        </p>
                    </div>
                    <p className="card-text text-truncate me-3">
                        訂位時間
                    </p>
                    <p className="card-text text-truncate me-3">
                        {reserveDetails.reserveTime}
                    </p>

                    <p className="card-text text-truncate me-2">
                        {reserveDetails.reservePeopleNum}
                        <span className='ms-1'>位成人</span>
                    </p>

                    <div>
                        <p className="card-text text-truncate my-4">與會好友</p>
                        <Image src={`http://localhost:3002/face/${reserveDetails.inviteListArr.images}`}
                            className={FriendSty.avatar}
                            width={50}
                            height={50} />
                    </div>

                </div>
                :
                ""
            }
            <div className='d-flex'>
                <Button
                    btnText='保留訂位'
                    bsModl3='modal'
                />
                <Button
                    btnText='確認取消'
                // onClick={modalOpen2}
                // bsModle1={`#exampleModalToggle`}
                // bsModle2='modal'
                />
            </div>

        </>
    )
}
