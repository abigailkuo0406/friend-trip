import React, { useState, useEffect, Fragment,useContext, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AdminLayout from '@/components/layout/admin-layout'
import BtnNormal from '@/components/common/button/btn-normal'
import OrderCard from '@/components/order/order_card'
import AuthContext from '@/context/AuthContext'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export default function Order() {
  const {auth, setAuth } = useContext(AuthContext)
  const router = useRouter()
  const [orderDetail, setOrderDetail] = useState([])
  const [productDetail, setProductDetail] = useState([])
  const [orderChange, setOrderChange] = useState('')

  // useEffect(()=>{
  //   if(router.query.status == undefined){
  //     router.push({
  //       query: { 
  //         "status": "all",
  //       },
  //     })
  //   }
  // }, [router.query])
 
  useEffect(()=>{
    // alert("orderChange")
  },[orderChange])
  useEffect(()=>{
    if(auth.member_id !=0){
      const usp = new URLSearchParams(router.query)
      fetch(`${process.env.API_SERVER}/order/find?${usp.toString()}`, {
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
  }, [auth, orderChange, router.query.status])



  useEffect(()=>{
    console.log("訂單資料來囉1：", orderDetail)
    console.log("訂單商品來囉2：", productDetail)
  }, [orderDetail, productDetail])
  

  return (
    <>
      
      <section className="order_section order_card_section">
        <div className="order_left">
        <div className="change_order_type">
        <BtnNormal
            type="button"
            value="button"
            btnText="全部訂單"
            addClassforButton={router.query.status=='all' ? "btn-dark" : "btn-light"} //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            onClick={()=>{
              router.push({
                query: { 
                  "status": "all",
                },
              })
            }}
          ></BtnNormal>
        <BtnNormal
            type="button"
            value="button"
            btnText="成立的訂單"
            addClassforButton={router.query.status=='established' ? "btn-dark" : "btn-light"} //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            onClick={()=>{
              router.push({
                query: { 
                  "status": "established",
                },
              })
            }}
          ></BtnNormal>
          <BtnNormal
            type="button"
            value="button"
            btnText="完成的訂單"
            addClassforButton={router.query.status=='complete' ? "btn-dark" : "btn-light"}//.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            onClick={()=>{
              router.push({
                query: { 
                  "status": "complete",
                },
              })
            }}
          ></BtnNormal>
          <BtnNormal
            type="button"
            value="button"
            btnText="未評論的訂單"
            addClassforButton={router.query.status=='noComment' ? "btn-dark" : "btn-light"}//.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            onClick={()=>{
              router.push({
                query: { 
                  "status": "noComment",
                },
              })
            }}
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
                        memberName={auth.member_name}
                        orderDetail={orderDetail[index]}
                        productDetail={productDetailEach}
                        setOrderChange={setOrderChange}
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
