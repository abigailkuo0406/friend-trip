import React, { useState, useEffect, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { BsCart, BsCartPlus, BsHeartFill, BsHeart } from 'react-icons/bs'
import ModalProductIndexCartAdd from '@/components/common/modal/modal_productIndex_cart_add'
import BtnNormal from '@/components/common/button/btn-normal'
import fakeIimg1 from '@/public/img/fake-data/fake-img-1.jpg'
import fakeIimg2 from '@/public/img/fake-data/fake-img-2.jpg'
import fakeIimg3 from '@/public/img/fake-data/fake-img-3.jpg'

export default function CardProduct({
  memberID=0,
  productID=0,
  allCollectionID,
  productImage = 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg',
  productName = '商品名稱',
  productCategory = '',
  productBrief = '商品簡述',
  productPrice = 0,
  productPost = '',
  productRate=0,
  setAddProduct={setAddProduct},
}) {
  // const defaultFavorit = allCollectionID.includes(productID)
  const [favorit, setFavorit] = useState(false)
  useEffect(()=>{
    if(allCollectionID == true)
    setFavorit(true)
    },[allCollectionID])
  const [likeClick, setLikeClick] = useState(false)

  const changeFavorit = (e) => {
    setFavorit(!favorit)
    setLikeClick(true)
    localStorage.setItem("saveScrollY", JSON.stringify(window.scrollY))
    router.push({
      query:{
        ...router.query,
        favorit: `${productID}${!favorit}`
      }
    })
  }

  useEffect(()=>{
  // 登出後清空頁面的愛心
    if(memberID == 0)
    {
      setFavorit(false)
    }
  },[memberID])
  

  useEffect(()=>{
    if(memberID != 0 && likeClick==true){
      
    if(favorit==true){
      fetch(`${process.env.API_SERVER}/collection/addCollection`, {
        method: 'POST',
        body: JSON.stringify({memberID: memberID, productID: productID}),
        headers: {
          'Content-Type': 'application/json',
        },
      }
      )
        .then((r) => r.json())
        .then((data) => {
          // affectedRows 為使用 SQL INSERT 和 DELETE 會回傳的方法，代表影響的數目
          if(data.all.affectedRows > 0){
            let originalLocalStorage = JSON.parse(localStorage.getItem("collectionID"))
            localStorage.setItem("collectionID", JSON.stringify([...originalLocalStorage, productID]))
          }
        })
    } else if (favorit==false){
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
          // affectedRows 為使用 SQL INSERT 和 DELETE 會回傳的方法，代表影響的數目
          if(data.all.affectedRows > 0){
            let originalLocalStorage = JSON.parse(localStorage.getItem("collectionID"))
            originalLocalStorage = originalLocalStorage.filter(e=>e!=productID)
            localStorage.setItem("collectionID", JSON.stringify(originalLocalStorage))
          }
        })
    }}
  },[favorit,likeClick])
  const router = useRouter()
  const pathname = location.pathname
  const cateArray = productCategory.split(' ')
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="productCard card">
          <div
            className="productFavorit"
            onClick={() => {
              changeFavorit()
            }}
          >
            {favorit ? <BsHeartFill></BsHeartFill> : <BsHeart></BsHeart>}
          </div>
          <div className="productCardImgSection">
            <Link
              className="productCartImgLink"
              href={pathname + '/' + productPost}
            >
              <Image
                  src={`/yun/product-img/pi-${productID}.png`}
                  className="card-img-top productCardImg"
                  alt={`${productID}'s product img`}
                  width={300}
                  height={300}
                  onError={(e) => {
                    e.target.srcset = '/yun/product-img/no-img.png';
                  }}
              ></Image>
            </Link>
          </div>

          <div className="card-body productCardBody">
            <Link
              className="productCartImgLink productName nav-font"
              href={pathname + '/' + productPost}
            >
              {productName}
            </Link>
            <div className="productCategory">
              {cateArray.map((e, i) => (
                <Fragment key={i}>
                  <p>{e}</p>
                </Fragment>
              ))}
            </div>

            <p className="productBrief">{productBrief}</p>
            <div className="productcardBottom">
              <p className="productPrice nav-font">{productPrice}</p>
              <div className="productAddCart">
                {/* <BsCartPlus className="nav-font"></BsCartPlus> */}
                <BtnNormal
                  type="button"
                  value="button"
                  btnText=""
                  // addIMGLeft={<BsArrowLeftShort></BsArrowLeftShort>} // 增加左側圖示 // 使用 react-icon，記得要 import 進入
                  addIMGRight={<BsCartPlus></BsCartPlus>} // 增加右側圖示 // 使用 react-icon，記得要 import 進入
                  addClassforButton="btn-white cart-btn" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
                  disabled={false} // fase：可點，true：不可點
                  bsModle1={`#buyModal${productID}`}
                  bsModle2="modal"
                ></BtnNormal>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalProductIndexCartAdd id={`buyModal${productID}`} memberID={memberID} productID={productID} productName={productName} productPrice={productPrice} productRate={productRate} productPost={productPost} setAddProduct={setAddProduct}></ModalProductIndexCartAdd>
    </>
  )
}
