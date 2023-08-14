import React, { useState, useEffect, Fragment } from 'react'
import Image from 'next/image'
import fakeIimg1 from '@/public/img/fake-data/fake-img-1.jpg'
import { BiMessageDetail, BiMessageCheck } from "react-icons/bi";
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function OrderCardProduct({
  productDetail={}, // 這個產品的細節
  getComment=[],
  banCommentID='',
}) 
{
  const router = useRouter()
  const [productCommemt, setProductComment] = useState('')
  useEffect(()=>{setProductComment('')},[])
  useEffect(()=>{
    if(getComment.length > 0){

    const commentArray =  getComment.filter((e,i)=>getComment[i].product_id==productDetail.product_id && getComment[i].order_id==productDetail.order_id)
    // console.log("偵錯："commentArray)
    if(typeof commentArray == 'object' && typeof commentArray[0] == 'object'){
      setProductComment(commentArray[0].comment_content)
    }}
  },[getComment, router.query.status])

  return (
    <div className="order-each-product">
    <div className="order-each-product-detail">
      <div className="order-product-img">
      <Link href={`./${productDetail.product_post}`}>
        <Image
                  src={`/yun/product-img/pi-${productDetail.product_id}.png`}
                  className="order-product-img"
                  alt={`${productDetail.product_id}'s product img`}
                  width={300}
                  height={300}
                  onError={(e) => {
                    e.target.srcset = '/yun/product-img/no-img.png';
                  }}
          ></Image>
          </Link>
      </div>
      <div className="order-product-info">
        <div className="order-product-info-name">
          <h5 className='order-product-name'>{productDetail.product_name}</h5>
          <h5 className='order-product-num'>{`X ${productDetail.product_num}`}</h5>
        </div>
        <div className="order-product-info-price">
          <p>{`NT$ ${productDetail.product_num*productDetail.product_price}`}</p>
        </div>
      </div>
      
    </div>
    <div className="order-each-product-comment">
      {getComment.length!=0 && banCommentID==productDetail.order_id ? <p><BiMessageDetail></BiMessageDetail>&nbsp;&nbsp;&nbsp;{`${productCommemt}`}</p> : ''}
    </div>
    </div>
  )
}
