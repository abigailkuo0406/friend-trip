import React, { useState, useEffect,Fragment} from 'react'
import { BsCheck2Circle } from "react-icons/bs";
export default function CheckoutOrderComplete({

}) {
  const [data, setData] = useState({})
  const [lastFive, setLastFive] = useState('')
  useEffect(()=>{
    setData(JSON.parse(localStorage.getItem("checkoutInfo")))
    const inputArray = JSON.parse(localStorage.getItem("checkoutInfo"))
    let lastFiveDigits = inputArray.credit_number.toString();
    lastFiveDigits = lastFiveDigits.slice(-5)
    setLastFive(lastFiveDigits)
  },[])
    
  return (
   <div className="order-complete-page">
    <div className="order-complete-page-title">
      <h2 className="order-complete-page-title"><BsCheck2Circle></BsCheck2Circle>請確認訂單資料</h2>
    </div>
    <div className="order-complete-page-body">
      <div className="order-text-section">
        <label>收件姓名：</label><p>{data.receiver_name} {data.receiver_gender == 'male' ? "先生" : "小姐"}</p>
      </div>
      <div className="order-text-section">
        <label>收件電話：</label><p>{data.receiver_tel}</p>
      </div>
      <div className="order-text-section">
        <label>收件地址：</label><p>{data.receiver_address}</p>
      </div>
      <div className="order-text-section">
        <label>電子信箱：</label><p>{data.receiver_email}</p>
      </div>
      <div className="order-text-section">
        <label>訂單備註：</label><p>{data && data.order_note && data.order_note.length > 0 ? data.order_note : "無備註"}</p>
      </div>
      <div className="order-text-section">
        <label>付款方式：</label><p>{data.paymentMethod} ，後五碼為：{lastFive}</p> 
      </div>
      
      
      
    </div>
   </div>
  )
}