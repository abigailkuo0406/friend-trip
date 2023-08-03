import React, { useContext, useState, useEffect } from 'react'
import InviteModal from '@/components/invite/invite-modal'
import Button from '@/components/common/button/btn-normal'
import AuthContext from '@/context/AuthContext'
import NumberInput from '@/components/common/input/input-number'
import RadioGroupInput from '@/components/common/input/input-radio-group'
import DateInput from '@/components/common/input/input-date'
import RestPhoto from '@/components/restaurant/restaurant-photo'
import Image from 'next/image'
import FriendsLtSty from '../invite/friends-list.module.css'
import InfoSty from '@/components/restaurant/intro.module.css'
import { useRouter } from 'next/router'

export default function Modal({
    restId,
    restName,
    restAddress,
    restPhone,
    restTime,
    restMeal,
    restClass,
    restIntro,
    restImg
}) {
    // console.log('Modal層', restId)
    const router = useRouter()

    //取得登入之會員資料
    const { auth } = useContext(AuthContext)


    //預設訂位時間
    const [reserveTimeInputValue, setReserveTimeInputValue] = useState('')
    const [reserveTimeInputName, setReserveTimeInputName] = useState('')
    const [reserveTimeInputLabel, setReserveTimeInputLabel] = useState('')


    // 預設訂位日期
    const [reserveDateInputVale, setReserveDateInputValue] = useState('')
    // const [reserveDateInputName, setReserveDateInputName] = useState('')
    // const [reserveDateInputLabel, setReserveDateInputLabel] = useState('')

    // 預設訂位人數
    const [reservePeopleNumValue, setReservePeopleNumValue] = useState('')
    const [reservePeopleNumName, setReservePeopleNumName] = useState('')

    /* 提交訂位表單*/
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('訂位123:', reserveTimeInputValue)
        console.log('訂位456:', reservePeopleNumValue)

        const formData = new FormData(document.getElementById('reserve'))


        fetch('http://localhost:3002/restaurant', {
            method: 'POST',
            body: formData,
        })

    }

    const [inviteList, setInviteList] = useState([])
    const inviteListChange = (ivList) => {
        setInviteList(ivList)

    }
    const toReserveRecord = () => {
        router.push('/member/reserve')
    }

    return (
        <>
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered modal-fullscreen">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close me-3" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='container-fluid'>
                            <div className="d-flex mx-5 my-3 row">
                                <div className={`modal-body col-4 ${InfoSty.leftBox}`}>
                                    <div className={`${InfoSty.infoBox}`}>
                                        <h2>{restName}</h2>
                                        {/* <div>星星</div> */}
                                    </div>
                                    <div className={`${InfoSty.infoBox}`}>
                                        <p className={`${InfoSty.infoBox}`}>{restAddress}</p>
                                        <p >{restPhone}</p>
                                    </div>
                                    <div className={`${InfoSty.infoBox}`}>
                                        <label>營業時間</label>
                                        <p>{restTime}</p>
                                        <label>料理特色</label>
                                        <p>
                                            {restMeal}
                                            {restClass}
                                        </p>
                                        <label>訂位須知</label>
                                        <p>{restIntro}</p>
                                    </div>

                                    <form id="reserve" onSubmit={handleSubmit}>
                                        <input name="member_id" value={auth.member_id} hidden />
                                        <input name="rest_id" value={restId} hidden />
                                        <input name="btn_value" value={1} hidden />


                                        <div className={`${InfoSty.infoBox}`} >
                                            <DateInput
                                                id="reserveDate"
                                                name="reserve_date"
                                                label="訂位日期"
                                                width="input-width-10rem"
                                                addClassforLabel={InfoSty.infolabel}
                                            />
                                        </div>

                                        <div className={`${InfoSty.infoBox}`}>

                                            <RadioGroupInput
                                                label="訂位時間"
                                                name="reserve_time"
                                                // idGroup、valueGroup、labelGroup 數目要一致，相同 index 互相對應
                                                idGroup={['TimeID1', 'TimeID2', 'TimeID3']} // 個別 radio 的 ID
                                                valueGroup={['11:30:30', '12:30:25', '13:30:15']} // 個別 radio 的 name
                                                labelGroup={['11:30', '12:30', '13:30']} // 個別標籤
                                                getValue={setReserveTimeInputValue}
                                                getName={setReserveTimeInputName}
                                                getLabel={setReserveTimeInputLabel}
                                                addClassforTitleLabel={InfoSty.infolabel} // 如果要在標題 label 添加 class
                                                addClassforEachLabel={`btn ${InfoSty.radioItem} me-3`} // 如果要在個別選項 label 添加 class
                                                addClassforInput={`btn-check`} // 如果要在 input 添加 class
                                            />
                                        </div>

                                        <div className={`${InfoSty.infoBox}`}>
                                            <NumberInput
                                                id="PeopleNum"
                                                label="訂位人數"
                                                name="reserve_people"
                                                placeholder="請選擇人數"
                                                value={0} // 預設數字
                                                max={4} // 最大可選數字
                                                min={1} // 最小可選數字
                                                step={1} // 右邊箭頭按一次的數字區間
                                                hideArrows={false} // true：隱藏右側上下箭頭按鈕，false：顯示
                                                getValue={setReservePeopleNumValue}
                                                getName={setReservePeopleNumName}
                                                width="input-width-5rem" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
                                                addClassforLabel="try1" // 如果要在 label 添加 class
                                                addClassforInput="try2 test123" // 如果要在 input 添加 class
                                            />
                                        </div>
                                        <label>邀請好友</label>
                                        <ul id="inviteList" className={`d-flex justify-content-start mt-3`}>
                                            {inviteList.map((v, i) => {
                                                return (
                                                    // 陣列中有姓名才顯示li
                                                    <div key={i} className='me-2'>
                                                        {v.inviteName
                                                            ?
                                                            <li>
                                                                <input name="iv_member_id" value={v.inviteId} hidden />

                                                                <Image
                                                                    src={v.inviteImg}
                                                                    className={`${InfoSty.avatar}`}
                                                                    width={50}
                                                                    height={50}
                                                                />
                                                            </li>
                                                            :
                                                            <li hidden></li>}

                                                    </div>
                                                )
                                            })}

                                        </ul>
                                        <div className="d-flex">

                                            <Button
                                                btnText="邀請好友"
                                                bsModle1="#exampleModalToggle2"
                                                bsModle2="modal"
                                            />
                                            <Button
                                                type="submit"
                                                value="submit"
                                                btnText="直接訂位"
                                                addClassforButton="btn-light ms-3" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
                                                disabled={false} // fase：可點，true：不可點
                                                onClick={toReserveRecord}
                                                bsModl3='modal'
                                            ></Button>
                                        </div>
                                    </form>

                                </div>
                                <div className="col-6">
                                    <RestPhoto file={restImg} rid={restId} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <InviteModal
                onValueChange={inviteListChange} />


        </>
    )
}
