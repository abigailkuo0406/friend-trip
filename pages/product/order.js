import React, { useState, useEffect, Fragment,useContext, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AdminLayout from '@/components/layout/admin-layout'
import BtnNormal from '@/components/common/button/btn-normal'
import OrderCard from '@/components/order/order_card'
import AuthContext from '@/context/AuthContext'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export default function Order() {
  const {auth, setAuth } = useContext(AuthContext)
  const [orderDetail, setOrderDetail] = useState([])
  const [productDetail, setProductDetail] = useState([])

  useEffect(()=>{
    if(auth.member_id !=0){
      fetch(`${process.env.API_SERVER}/order/normal`, {
        method: 'POST',
        body: JSON.stringify({memberID: auth.member_id}),
        headers: {
          'Content-Type': 'application/json',
        },
      }
      )
        .then((r) => r.json())
        .then((data) => {
           setOrderDetail(data.order) // 收到訂單資料
           setProductDetail(data.product) // 收到訂單內商品資料
        })
        .catch((error) => {console.error("Error:", error)})}
  }, [auth])

  useEffect(()=>{
    console.log("訂單資料來囉1：", orderDetail)
    console.log("訂單商品來囉2：", productDetail)
  }, [orderDetail, productDetail])
  

  return (
    <>
      <div className="CartPageHeader onePageHeader">
        <div className="PageBack">
          <Link replace href="../product">
            <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
          </Link>
        </div>
        <div className="PageTitle">
          <p>我的訂單</p>
        </div>
      </div>
      <section className="order_section order_card_section">
        <div className="order_left">
        <div className="change_order_type">
        <BtnNormal
            type="button"
            value="button"
            btnText="成立的訂單"
            addClassforButton="btn-dark" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            disabled={false} // fase：可點，true：不可點
          ></BtnNormal>
        </div>
        <div className="change_show">
        {orderDetail.length > 0 ? (
            orderDetail.map((element,index) => {
                const productDetailEach = productDetail.filter(
                    (e) => e.order_id == orderDetail[index].order_id
                )
                return(
                <Fragment key={index}>
                    <OrderCard
                        orderDetail={orderDetail[index]}
                        productDetail={productDetailEach}
                    ></OrderCard>
                </Fragment>)
        })
        ) : (
            
                <p>您尚未擁有訂單</p>
            
        )}
        </div>
          
        </div>
        
      </section>
      
    </>
  )
}

Order.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
