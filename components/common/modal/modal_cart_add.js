import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import fakeIimg1 from '@/public/img/fake-data/fake-img-1.jpg'
export default function CartModalAdd({
  id='',
  productName='',
  productPrice=0,
  productNum=0,
}) {

  return (
    <div className="modal fade" id={id} tabindex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content modalCartAdd">
      <div className="modal-header">
        <p lass="modal-title fs-5" id={`${id}Label`}>有<span className="modal-title-point"> 1 </span>樣商品加入您的購物車</p>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="body-product-img"><Image
                src={fakeIimg1}
                className=""
                alt="12"
              ></Image></div> 
        <div className="body-product-info">
          <h6 className="product-info-title">{productName}</h6>
          <h6 className="product-info-price">{`NT$ ${productPrice}`}</h6>
          <h6 className="product-info-num">{productNum}</h6>
        
          
        </div>
      </div>
 
    </div>
  </div>
</div>
  )
}
