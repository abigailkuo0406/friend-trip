import React from 'react'
import BtnNormal from '@/components/common/button/btn-normal'
import { useRouter } from 'next/router'
export default function PairBtns2({ setPage, setImgIndex, imgIndex, page }) {
  const router = useRouter()
  const change = () => {
    router.push('./pair')
  }
  return (
    <>
      <div className="d-flex justify-content-center gap-5 mt-3">
        {/* <BtnNormal
          btnText="改變命運"
          addClassforButton="btn-light"
          onClick={change}
        /> */}

        <BtnNormal
          btnText="尋找下一位"
          addClassforButton="btn-dark"
          onClick={() => {
            setPage(1)
            setImgIndex(imgIndex + 1)
          }}
        />
      </div>
    </>
  )
}
