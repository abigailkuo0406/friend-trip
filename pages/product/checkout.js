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
import CheckoutOrderComplete from '@/components/product_checkout/checkout_order_complete'
import CheckingHeader from '@/components/product_checkout/checking_header'
import AuthContext from '@/context/AuthContext'
import Swal from 'sweetalert2'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export default function CheckOut() {
    const {auth, setAuth } = useContext(AuthContext)
    const router = useRouter()
    const { page } = router.query
    const [backOneGo, setBackOneGo] = useState(false)
    const [headerStatus, setHeaderStatus] = useState('')

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
    const [creditNumberValueError, setCreditNumberValueError] = useState('') // 除錯用
    const [creditError, setCreditError] = useState(false)
    const [creditErrorTracker, setCreditErrorTracker] = useState('')
    const [submitted, setSubmitted] = useState(0) // 追蹤是否觸發了已經提交操作
    const [clickSubmitted, setClickSubmitted] = useState(false) // 追蹤點選動作
    const [creditSecurityValue, setCreditSecurityValue] = useState('')
    const [creditNameValue, setCreditNameValue] = useState('')
    const [creditExValue, setCreditExValue] = useState('')

    // 除錯訊息

    const [inputErrorReceiverName, setInputErrorReceiverName] = useState('')
    const [inputErrorReceiverTel, setInputErrorReceiverTel] = useState('')
    const [inputErrorReceiverAddress, setInputErrorReceiverAddress] = useState('')
    const [inputErrorReceiverEmail, setInputErrorReceiverEmail] = useState('')
    const [inputErrorCreditNumber, setInputErrorCreditNumber] = useState('')
    const [inputErrorCreditName, setInputErrorCreditName] = useState('')
    const [inputErrorCreditSecurity, setInputErrorCreditSecurity] = useState('')
    const [inputErrorCreditEx, setInputErrorCreditEx] = useState('')

    useEffect(()=>{
      console.log("CCCC: ",creditNumberValueError)
    },[creditNumberValueError])


    
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
      inputErrorReceiverName={inputErrorReceiverName}
      inputErrorReceiverAddress={inputErrorReceiverAddress}
      inputErrorReceiverTel={inputErrorReceiverTel}
      inputErrorReceiverEmail={inputErrorReceiverEmail}
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
        setCreditNumberValueError={setCreditNumberValueError}
        setCreditExValue={setCreditExValue}

        inputErrorCreditNumber={inputErrorCreditNumber}
        inputErrorCreditName={inputErrorCreditName}
        inputErrorCreditSecurity={inputErrorCreditSecurity}
        inputErrorCreditEx={inputErrorCreditEx}
      />;
    } else if (page === '3') {
      checkoutComponent = <CheckoutOrderComplete 
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

    useEffect(()=>{
      if(router.query.page == "1") {
        setHeaderStatus('info')
      } else if (router.query.page == "2") {
        setHeaderStatus('payment')
      } else if (router.query.page == "3") {
        setHeaderStatus('complete')
      }
    }, [router.query.page])



    // 輸入的值都存去 localstorage
    useEffect(() => {
      let checkoutInfo = JSON.parse(localStorage.getItem("checkoutInfo"))
      localStorage.setItem("checkoutInfo", JSON.stringify({...checkoutInfo, receiver_name: receiverNameValue, receiver_gender: receiverGenderValue, receiver_tel: receiverTelValue, receiver_address:receiverAddressValue, receiver_email: receiverEmailValue, order_note:orderNoteValue, paymentMethod :paymentMethodValue,credit_number: creditNumberValue, credit_name: creditNameValue, credit_security: creditSecurityValue, credit_ex: creditExValue }))
    }, [receiverNameValue, receiverGenderValue, receiverTelValue, receiverAddressValue, receiverEmailValue, orderNoteValue,paymentMethodValue, creditNumberValue,creditNameValue, creditSecurityValue, creditExValue])
    
    // 錯誤檢查
    // 檢查收件者姓名是否有填
    useEffect(() => {
      let checkoutInfoErrorCheck = JSON.parse(localStorage.getItem("checkoutInfoErrorCheck"))
      let checkoutInfo = JSON.parse(localStorage.getItem("checkoutInfo"))
      if(checkoutInfo.receiver_name.length >0){
        setInputErrorReceiverName('')
        localStorage.setItem("checkoutInfoErrorCheck", JSON.stringify({...checkoutInfoErrorCheck, receiver_name: true}))
      } else if (checkoutInfo.receiver_name.length == 0){
        if(submitted != 0){
        setInputErrorReceiverName('收件者姓名為必填')
        }
        localStorage.setItem("checkoutInfoErrorCheck", JSON.stringify({...checkoutInfoErrorCheck, receiver_name: false}))
      }
    }, [receiverNameValue, router, submitted])

    // 檢查收件者電話是否有填以及全數字
    useEffect(() => {
      let checkoutInfoErrorCheck = JSON.parse(localStorage.getItem("checkoutInfoErrorCheck"))
      let checkoutInfo = JSON.parse(localStorage.getItem("checkoutInfo"))
      if(checkoutInfo.receiver_tel.length >0 && !/[^\d]/.test(checkoutInfo.receiver_tel)){
        setInputErrorReceiverTel('')
        localStorage.setItem("checkoutInfoErrorCheck", JSON.stringify({...checkoutInfoErrorCheck, receiver_tel: true}))
      } else if (checkoutInfo.receiver_tel.length == 0 || /[^\d]/.test(checkoutInfo.receiver_tel)){
        if(checkoutInfo.receiver_tel.length == 0 && submitted != 0){
          setInputErrorReceiverTel('收件電話為必填')
        } else if (checkoutInfo.receiver_tel.length > 0 && /[^\d]/.test(checkoutInfo.receiver_tel && submitted != 0)) {
          setInputErrorReceiverTel('格式不正確')
        }
        localStorage.setItem("checkoutInfoErrorCheck", JSON.stringify({...checkoutInfoErrorCheck, receiver_tel: false}))
      }
    }, [receiverTelValue, router, submitted])

    // 檢查收件地址是否有填
    useEffect(() => {
      let checkoutInfoErrorCheck = JSON.parse(localStorage.getItem("checkoutInfoErrorCheck"))
      let checkoutInfo = JSON.parse(localStorage.getItem("checkoutInfo"))
      if(checkoutInfo.receiver_address.length >0){
        setInputErrorReceiverAddress('')
        localStorage.setItem("checkoutInfoErrorCheck", JSON.stringify({...checkoutInfoErrorCheck, receiver_address: true}))
      } else if (checkoutInfo.receiver_address.length == 0){
        if((submitted != 0)){
          setInputErrorReceiverAddress('收件地址為必填')
        }
        localStorage.setItem("checkoutInfoErrorCheck", JSON.stringify({...checkoutInfoErrorCheck, receiver_address: false}))
      }
    }, [receiverAddressValue, router, submitted])

    // 檢查電子信箱是否有填
    useEffect(() => {
      let checkoutInfoErrorCheck = JSON.parse(localStorage.getItem("checkoutInfoErrorCheck"))
      let checkoutInfo = JSON.parse(localStorage.getItem("checkoutInfo"))
      if(checkoutInfo.receiver_email.length >0  && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(checkoutInfo.receiver_email)){
        setInputErrorReceiverEmail('')
        localStorage.setItem("checkoutInfoErrorCheck", JSON.stringify({...checkoutInfoErrorCheck, receiver_email: true}))
      } else if (checkoutInfo.receiver_email.length == 0 || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(checkoutInfo.receiver_email)){
        if(checkoutInfo.receiver_email.length == 0 && submitted != 0){
          setInputErrorReceiverEmail('電子信箱為必填')
        } else if (checkoutInfo.receiver_email.length > 0 && !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(checkoutInfo.receiver_email) && submitted != 0){
          setInputErrorReceiverEmail('電子信箱格式錯誤')
        }
        localStorage.setItem("checkoutInfoErrorCheck", JSON.stringify({...checkoutInfoErrorCheck, receiver_email: false}))
      }
    }, [receiverEmailValue, router, submitted])

    // 檢查信用卡號是否正確
    useEffect(() => {
      let checkoutPaymentErrorCheck = JSON.parse(localStorage.getItem("checkoutPaymentErrorCheck"))
      if(submitted == 0){
        setInputErrorCreditNumber('')
      }
      if(creditNumberValueError.length == 16){
        localStorage.setItem("checkoutPaymentErrorCheck", JSON.stringify({...checkoutPaymentErrorCheck, credit_number: true}))
        setInputErrorCreditNumber('')
      } else if (creditNumberValueError.length < 16){
        if(submitted != 0){setInputErrorCreditNumber('信用卡卡號不完整')}
        localStorage.setItem("checkoutPaymentErrorCheck", JSON.stringify({...checkoutPaymentErrorCheck, credit_number: false}))
      }
    }, [creditNumberValue, router, submitted])

    // 檢查信用卡持卡姓名是否正確都是英文大寫
    useEffect(() => {
      let checkoutPaymentErrorCheck = JSON.parse(localStorage.getItem("checkoutPaymentErrorCheck"))
      let checkoutInfo = JSON.parse(localStorage.getItem("checkoutInfo"))
      if(submitted == 0){
        setInputErrorCreditName('')
      }
      if(checkoutInfo.credit_name.length > 0 && /^[A-Z\s]+$/.test(checkoutInfo.credit_name)){
        setInputErrorCreditName('')
        localStorage.setItem("checkoutPaymentErrorCheck", JSON.stringify({...checkoutPaymentErrorCheck, credit_name: true}))
      } else if (checkoutInfo.credit_name.length == 0 || !/^[A-Z\s]+$/.test(checkoutInfo.credit_name)){
        if(checkoutInfo.credit_name.length == 0 && submitted != 0){
          setInputErrorCreditName('持卡姓名為必填')
        } else if (checkoutInfo.credit_name.length > 0 && !/^[A-Z\s]+$/.test(checkoutInfo.credit_name) && submitted != 0) {
          setInputErrorCreditName('持卡姓名需皆為英文大寫')
        }
        localStorage.setItem("checkoutPaymentErrorCheck", JSON.stringify({...checkoutPaymentErrorCheck, credit_name: false}))
      }
    }, [creditNameValue, router, submitted])

    // 檢查信用卡安全碼是否為三碼數字
    useEffect(() => {
      let checkoutPaymentErrorCheck = JSON.parse(localStorage.getItem("checkoutPaymentErrorCheck"))
      let checkoutInfo = JSON.parse(localStorage.getItem("checkoutInfo"))
      if(submitted == 0){
        setInputErrorCreditSecurity('')
      }
      if(checkoutInfo.credit_security.length == 3 && /^[0-9]{3}$/.test(checkoutInfo.credit_security)){
        setInputErrorCreditSecurity('')
        localStorage.setItem("checkoutPaymentErrorCheck", JSON.stringify({...checkoutPaymentErrorCheck, credit_security: true}))
      } else if (checkoutInfo.credit_security.length != 3 || !/^[0-9]{3}$/.test(checkoutInfo.credit_security)){
        if(checkoutInfo.credit_security.length != 3 && submitted != 0) {
          setInputErrorCreditSecurity('安全碼為3碼數字')
        } else if(checkoutInfo.credit_security.length == 3 && !/^[0-9]{3}$/.test(checkoutInfo.credit_security) && submitted != 0){
          setInputErrorCreditSecurity('安全碼皆為數字')
        }
        localStorage.setItem("checkoutPaymentErrorCheck", JSON.stringify({...checkoutPaymentErrorCheck, credit_security: false}))
      }
    }, [creditSecurityValue, router, submitted])

    // 檢查信用卡到期日是否為四個數字
    useEffect(() => {
      let checkoutPaymentErrorCheck = JSON.parse(localStorage.getItem("checkoutPaymentErrorCheck"))
      let checkoutInfo = JSON.parse(localStorage.getItem("checkoutInfo"))
      if(submitted == 0){
        setInputErrorCreditEx('')
      }
      if(checkoutInfo.credit_ex.length == 4 && /^[0-9]{4}$/.test(checkoutInfo.credit_ex)){
        setInputErrorCreditEx('')
        localStorage.setItem("checkoutPaymentErrorCheck", JSON.stringify({...checkoutPaymentErrorCheck, credit_ex: true}))
      } else if (checkoutInfo.credit_ex.length != 4 || !/^[0-9]{4}$/.test(checkoutInfo.credit_ex)){
        if(checkoutInfo.credit_ex.length != 4 && submitted != 0) {
          setInputErrorCreditEx('信用卡到期日為4碼數字')
        } else if(checkoutInfo.credit_ex.length == 4 && !/^[0-9]{4}$/.test(checkoutInfo.credit_ex) && submitted != 0){
          setInputErrorCreditEx('信用卡到期日皆為數字')
        }
        localStorage.setItem("checkoutPaymentErrorCheck", JSON.stringify({...checkoutPaymentErrorCheck, credit_ex: false}))
      }
    }, [creditExValue, router, submitted])
    
    
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
          confirmButtonColor: '#D0A5CA',
          denyButtonColor:'#674C87',
          showDenyButton: true,
          showConfirmButton: true,
          
          denyButtonText: '查看訂單列表',
          confirmButtonText: '繼續購物',
          
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

      // setSubmitted(true) // 更改追蹤是否提交的狀態，用於 <form> 內除錯
      // setClickSubmitted(!clickSubmitted) // 可以追蹤點擊提交
      // if (creditError == true) {
      //   var moveTo = document.getElementById(creditErrorTracker)
      //   moveTo.scrollIntoView() // 滑向錯誤的地方
      //   moveTo.focus()
      //   return
      // }
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
      <CheckingHeader page={headerStatus}></CheckingHeader>
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
        setSubmitted = {setSubmitted}
        ></CheckoutProduct>
        </div>
      </section>
    </>
  )
}

CheckOut.getLayout = function (page) {
  return <NoSidebarLayout>{page}</NoSidebarLayout>
}
