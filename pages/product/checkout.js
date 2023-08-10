import React, { useState, useEffect, Fragment,useContext, useRef } from 'react'
import { useRouter } from 'next/router'


import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/img/logo/FriendTrip-Logo.png'
import NoSidebarLayout from '@/components/layout/nosidebar-layout'
import BtnNormal from '@/components/common/button/btn-normal'
import CheckoutInfo1 from '@/components/product_checkout/checkout_info1'
import CheckoutInfo2 from '@/components/product_checkout/checkout_info2'
import CheckoutProduct from '@/components/product_checkout/checkout_product'
import AuthContext from '@/context/AuthContext'
import Swal from 'sweetalert2'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export default function CheckOut() {
    const {auth, setAuth } = useContext(AuthContext)
    const router = useRouter()
    const { page } = router.query
    const [backOneGo, setBackOneGo] = useState(false)

    //抓取表單資料區 Start
    const [orderID, setOrderID] = useState('') // orderID 為 cart 生成的訂單 ID
    useEffect(()=>{
      const newOrder = localStorage.getItem("order_id")
      setOrderID(newOrder);
      localStorage.removeItem("order_id");
      setBackOneGo(false) // 還未從第二頁轉跳到第一頁
    },[])
    const [receiverNameValue, setReceiverNameValue] = useState('')
    const [receiverNameName, setReceiverNameName] = useState('')
    const [receiverGenderValue, setReceiverGenderValue] = useState('')
    const [receiverGenderName, setReceiverGenderName] = useState('')
    const [receiverTelValue, setReceiverTelValue] = useState('')
    const [receiverTelName, setReceiverTelName] = useState('')
    const [receiverAddressValue, setReceiverAddressValue] = useState('')
    const [receiverAddressName, setReceiverAddressName] = useState('')
    const [receiverEmailValue, setReceiverEmailValue] = useState('')
    const [receiverEmailName, setReceiverEmailName] = useState('')
    const [orderNoteValue, setOrderNoteValue] = useState('')
    const [orderNoteName, setOrderNoteName] = useState('')
    const [paymentMethodValue, setPaymentMethodValue] = useState('信用卡') // 在 checkout_info2.js 設置
    const [creditNumberValue, setCreditNumberValue] = useState('')
    const [creditError, setCreditError] = useState(false)
    const [creditErrorTracker, setCreditErrorTracker] = useState('')
    const [submitted, setSubmitted] = useState(false) // 追蹤是否觸發了已經提交操作
    const [clickSubmitted, setClickSubmitted] = useState(false) // 追蹤點選動作
    const [creditSecurityValue, setCreditSecurityValue] = useState('')
    const [creditNameValue, setCreditNameValue] = useState('')
    const [creditExValue, setCreditExValue] = useState('')
    
    //抓取表單資料區 End

    let checkoutComponent;
    if (page === '1') {
      checkoutComponent = <CheckoutInfo1
      memberID={auth.member_id}
      memberName={auth.member_name}
      memberGender={auth.gender}
      memberTel={auth.mobile}
      memberAddress={auth.location}
      memberEmail={auth.email} 
      setReceiverNameValue={setReceiverNameValue}
      setReceiverNameName={setReceiverNameName}
      setReceiverGenderValue={setReceiverGenderValue}
      setReceiverGenderName={setReceiverGenderName}
      setReceiverTelValue={setReceiverTelValue}
      setReceiverTelName={setReceiverTelName}
      setReceiverAddressValue={setReceiverAddressValue}
      setReceiverAddressName={setReceiverAddressName}
      setReceiverEmailValue={setReceiverEmailValue}
      setReceiverEmailName={setReceiverEmailName}
      setOrderNoteValue={setOrderNoteValue}
      setOrderNoteName={setOrderNoteName}

      backOneGo={backOneGo}
      />;
    } else if (page === '2') {
      checkoutComponent = <CheckoutInfo2 
      setPaymentMethodValue={setPaymentMethodValue}
        setCreditNumberValue={setCreditNumberValue}
        setCreditError={setCreditError}
        setCreditErrorTracker={setCreditErrorTracker}
        submitted={submitted}
        clickSubmitted={clickSubmitted}
        setCreditSecurityValue={setCreditSecurityValue}
        setCreditNameValue={setCreditNameValue}
        setCreditExValue={setCreditExValue}
        
      />;
    }

    // 輸入的值都存去 localstorage
    useEffect(() => {
      let checkoutInfo = JSON.parse(localStorage.getItem("checkoutInfo"))
      localStorage.setItem("checkoutInfo", JSON.stringify({...checkoutInfo, receiver_name: receiverNameValue, receiver_gender: receiverGenderValue, receiver_tel: receiverTelValue, receiver_address:receiverAddressValue, receiver_email: receiverEmailValue, order_note:orderNoteValue, paymentMethod :paymentMethodValue,credit_number: creditNumberValue, credit_name: creditNameValue, credit_security: creditSecurityValue, credit_ex: creditExValue }))
    }, [receiverNameValue, receiverGenderValue, receiverTelValue, receiverAddressValue, receiverEmailValue, orderNoteValue,paymentMethodValue, creditNumberValue,creditNameValue, creditSecurityValue, creditExValue])

    const goCheckOut = () => {
      fetch(`${process.env.API_SERVER}/checkout/goCheckOut`, {
        method: 'POST',
        body: JSON.stringify({
        orderID: orderID,
        memberID:auth.member_id,
        receiverGender:receiverGenderValue,
        receiverName:receiverNameValue,
        receiverTel:receiverTelValue,
        receiverAddress:receiverAddressValue,
        receiverEmail:receiverEmailValue,
        orderNote:orderNoteValue,
        paymentMethod: paymentMethodValue,
        creditNumber: creditNumberValue,
        creditName: creditNameValue,
        creditSecurity: creditSecurityValue,
        creditEx: creditExValue,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
      )
        .then((r) => r.json())
        .then((data) => {
          if(data){
           
          }
        })
        Swal.fire({
          width: 400,
          html: `<h4>敬愛的會員${auth.member_id}您好，</h4>
          <h4>您的訂單編號 "${orderID}" 已經成立</h4>`,
          icon: 'success',
          iconColor: '#FABCBF',
          color: '#674C87',
          confirmButtonColor: '#674C87',
          showConfirmButton: true,
          showDenyButton: true,
          confirmButtonText: '繼續購物',
          denyButtonText: '查看訂單',
        }).then((result) => {
          if (result.isConfirmed || result.dismiss) {
            window.location="./"
          } else if (result.isDenied) {
            window.location="./order"
          }
        })
    }
    const submitOrder = (e)=>{
      e.preventDefault()

      setSubmitted(true) // 更改追蹤是否提交的狀態，用於 <form> 內除錯
      setClickSubmitted(!clickSubmitted) // 可以追蹤點擊提交
      if (creditError == true) {
        var moveTo = document.getElementById(creditErrorTracker)
        moveTo.scrollIntoView() // 滑向錯誤的地方
        moveTo.focus()
        return
      }
    }
    const goCart = ()=>{
      // 刪除未成為訂單的暫存產品的訂單ID
      if(orderID){
        fetch(`${process.env.API_SERVER}/checkout/deleteTempProduct`, {
          method: 'POST',
          body: JSON.stringify({orderID: orderID,}),
          headers: {
            'Content-Type': 'application/json',
          },
        }
        )
          .then((r) => r.json())
          .then((data) => {
          })
      }
      router.push('../product/cart')
    }

  return (
    <>
      <div className="CartPageHeader onePageHeader">
        <div className="PageBack" onClick={goCart}>
            <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
        
        </div>
        <div className="PageTitle">
          <p>訂購資料</p>
        </div>
      </div>
      <section className="order_section checking_section">
      
        <div className="order_left">
            <form onSubmit={submitOrder}>
                {checkoutComponent}
            </form>
        </div>
        <div className="order_right">
        <CheckoutProduct
        orderID={orderID}
        goCheckOut = {goCheckOut}
        setBackOneGo = {setBackOneGo}
        ></CheckoutProduct>
        </div>
      </section>
    </>
  )
}

CheckOut.getLayout = function (page) {
  return <NoSidebarLayout>{page}</NoSidebarLayout>
}
