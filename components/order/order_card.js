import React, { useState, useEffect, Fragment } from 'react'
import Image from 'next/image'

import OrderCardProduct from '@/components/order/order_card_product'
import BtnNormal from '@/components/common/button/btn-normal'
import fakeIimg1 from '@/public/img/fake-data/fake-img-1.jpg'

export default function OrderCard({
    orderDetail={}, // 存有該筆訂單所有資料
    productDetail=[], // 存有該筆訂單所有商品資料的 Array
}) {
  return (
    <>
     <div className="order-card">
        <div className="order-card-header">
        <div className="order-card-header-id">
            <h4>訂單編號：</h4><h4>{orderDetail.order_id}</h4>
        </div>
        <div className="order-card-header-status">
            <h6>{orderDetail.order_status}</h6>
        </div>
            
        </div>
        <div className="order-card-body">
        {productDetail.length > 0 ? (
            productDetail.map((e,i) => (
                <Fragment key={i}>
                   <OrderCardProduct
                   productDetail={productDetail[i]}
                   >
                   </OrderCardProduct>
                </Fragment>
                ))
        ) : (
            
                <p>您的訂單尚未擁有商品</p>
            
        )}
        </div>
        <div className="order-card-footer">
        <div className="order-card-total-price">
            <h6>{`價格總計：NT$ ${productDetail.length>0 ? productDetail[0].checking_total : 0}`}</h6>
        </div>
        <div className="order-card-btn">
        <BtnNormal
            type="button"
            value="button"
            btnText="已收到商品"
            addClassforButton="btn-dark" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            disabled={false} // fase：可點，true：不可點
            target=""
          ></BtnNormal>
        </div>
        </div>
     </div>
    </>
  )
}
