import React, { useState, useContext } from 'react'
import Image from 'next/image'

import TextArea from '@/components/common/input/textarea'
import Btn from '@/components/common/button/btn-normal'
import AuthContext from '@/context/AuthContext'
import styles from '@/components/reserve/reserve.module.css'


export default function Comment({
    reservationId,
    restId,
    restName,
    restImg
}) {
    const { auth } = useContext(AuthContext)
    console.log('評論元件的auth', auth)


    const [textAreaValue, setTextAreaValue] = useState()
    const [textAreaName, setTextAreaName] = useState()

    return (
        <>
            <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button
                                type="button"
                                class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h1>{restName}</h1>
                            <p>訂單編號{reservationId}</p>
                            <p>餐廳地址</p>
                            <div className='d-flex  align-items-center  '>
                                <Image
                                    src={`http://localhost:3002/face/${auth.images}`}
                                    className={styles.avatar}
                                    alt='大頭貼'
                                    width={50}
                                    height={50} />
                                <p>{auth.member_name}</p>
                            </div>

                            <p>請給予餐廳評分</p>
                            <TextArea
                                id=''
                                name=''
                                label='請寫下您的評論'
                                getValue={setTextAreaValue}
                                getName={setTextAreaName}
                                required='true'

                            />

                        </div>
                        <div class="modal-footer">
                            <Btn
                                btnText='取消評論'
                                addClassforButton="btn-light"

                            />
                            <Btn
                                btnText='發布評論'
                                type="submit"
                                value="submit"
                                addClassforButton="btn-dark ms-3" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
                                disabled={false} // fase：可點，true：不可點
                                bsModl3={`modal`}
                            />
                            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>



        </>
    )

}
