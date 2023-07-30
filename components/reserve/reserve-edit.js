import React, { useState, useEffect } from 'react'
import Modal2 from '@/components/invite/invite-modal'
import Button from '@/components/common/button/btn-normal'



export default function ReserveEdit({
  iL
}) {

  console.log('111', iL)
  return (
    <>
      <h3>修改訂位</h3>
      <label>邀請好友</label>
      <ul id="inviteList" className={`d-flex justify-content-start mt-3`}>
        {iL.map((v, i) => {
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
      <Button
        btnText="邀請好友"
        bsModle1="#exampleModalToggle2"
        bsModle2="modal"
      />
      {/* <Modal2
        onValueChange={inviteListChange}
      /> */}
      <div className='d-flex'>
        <Button
          btnText='取消修改'
          // onClick={modalOpen2}
          bsModl3='modal'
        />
        <Button
          btnText='修改完成'
          bsModl3='modal'
        />
      </div>
    </>
  )
}
