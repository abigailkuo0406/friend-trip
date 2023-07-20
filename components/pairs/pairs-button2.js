import React from 'react'
import BtnNormal from '@/components/common/button/btn-normal'
export default function PairBtns2() {
  return (
    <>
      <div className="d-flex justify-content-center gap-5 mt-3">
        <BtnNormal btnText="開始聊天" addClassforButton="btn-light" />

        <BtnNormal btnText="尋找下一位" addClassforButton="btn-dark" />
      </div>
    </>
  )
}
