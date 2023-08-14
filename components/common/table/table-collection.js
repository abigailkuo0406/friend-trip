import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import fakeIimg1 from '@/public/img/fake-data/fake-img-1.jpg'
import BtnNormal from '@/components/common/button/btn-normal'
import CollectionCartModalAdd from '@/components/common/modal/modal_collection_cart_add'
import { BsCart, BsPlus, BsHeartFill, BsHeart } from 'react-icons/bs'

export default function TableCollection({
  memberID=0,
  productID=0,
  productIMG='',
  productName = '商品名稱',
  productPrice = 0,
  productBrief ='',
  productPost='',
  setChange,
}) {
  const [favorit, setFavorit] = useState(true)
  const changeFavorit = (event) => {
    setFavorit(!favorit)
  }

  useEffect(()=>{
    if (favorit==false){
      fetch(`${process.env.API_SERVER}/collection/deleteCollection`, {
        method: 'POST',
        body: JSON.stringify({memberID: memberID, productID: productID}),
        headers: {
          'Content-Type': 'application/json',
        },
      }
      )
        .then((r) => r.json())
        .then((data) => {
          setChange(productID)
        })
    }
  },[favorit])
    
  return (
    <>
      <tr>
        <td className="product_td_check">
        <div
              className="productFavorit"
              onClick={() => {
                changeFavorit()
              }}
            >
              {favorit ? <BsHeartFill></BsHeartFill> : <BsHeart></BsHeart>}
            </div>
           
        </td>
        <td className="product_td_img_name">
        <div className="product_td_img">
          <Link href={`./${productPost}`}>
          <Image
                  src={`/yun/product-img/pi-${productID}.png`}
                  className=""
                  alt={`${productID}'s product img`}
                  width={300}
                  height={300}
                  onError={(e) => {
                    e.target.srcset = '/yun/product-img/no-img.png';
                  }}
              ></Image>
          </Link>
          
        </div>
          
          <p className="product_td_name"><Link href={`./${productPost}`}>{productName}</Link></p>
        </td>
        <td className="product_td_price">NT$ {productPrice}</td>
        
          <td className="product_td_brief">{productBrief}</td>
          <td className="product_td_btn">
          
          <BtnNormal
            type="button"
            value="button"
            btnText="加入購物車"
            // addIMGLeft={<BsArrowLeftShort></BsArrowLeftShort>} // 增加左側圖示 // 使用 react-icon，記得要 import 進入
            addIMGRight={<BsPlus></BsPlus>} // 增加右側圖示 // 使用 react-icon，記得要 import 進入
            addClassforButton="btn-dark cart-btn" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            disabled={false} // fase：可點，true：不可點
            bsModle1={`#buyModal${productID}`}
            bsModle2="modal"
          ></BtnNormal>
          </td>
      </tr>
      <CollectionCartModalAdd id={`buyModal${productID}`} memberID={memberID} productID={productID} productName={productName} productPrice={productPrice}></CollectionCartModalAdd>
    </>
  )
}
