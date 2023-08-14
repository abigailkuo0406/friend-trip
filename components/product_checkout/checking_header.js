import React, { useState, useEffect } from 'react'
import { BsCart,BsPencilSquare,BsCreditCard, BsFileEarmarkCheck } from "react-icons/bs";

export default function CheckingHeader({
    page="", // 根據回傳的值判斷是在哪一頁
})
{
    const goBack = ()=>{
        router.back()
      }

  return (
    <>
    <div className="CartPageHeader onePageHeader">
        <div className="progress-zone">
            <div className={`progress-step progress-cart ${page == "cart" ? "progress-step-this" : ""}`}><div className="progress-ball"><h2>1</h2></div><div className="progress-text"><p>購物車</p><BsCart></BsCart></div></div>
            <div className={`progress-step progress-info ${page == "info" ? "progress-step-this" : ""}`}><div className="progress-ball"><h2>2</h2></div><div className="progress-text"><p>訂購資料</p><BsPencilSquare></BsPencilSquare></div></div>
            <div className={`progress-step progress-payment ${page == "payment" ? "progress-step-this" : ""}`}><div className="progress-ball"><h2>3</h2></div><div className="progress-text"><p>付款資料</p><BsCreditCard></BsCreditCard></div></div>
            <div className={`progress-step progress-complete ${page == "complete" ? "progress-step-this" : ""}`}><div className="progress-ball"><h2>4</h2></div><div className="progress-text"><p>確認訂單</p><BsFileEarmarkCheck></BsFileEarmarkCheck></div></div>
        </div>
    </div>
    </>
  )
}
