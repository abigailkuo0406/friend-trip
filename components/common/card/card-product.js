import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import noImage from '@/public/img/fake-data/no-image.jpg'
import { BsCart, BsCartPlus, BsHeartFill, BsHeart } from 'react-icons/bs'

export default function CardProduct({
  productFavorit = false,
  productImage = 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg',
  productName = '商品名稱',
  productCategory = ['分類1', '分類2'],
  productBrief = '商品簡述商品簡述商品簡述商品簡述商品簡述商品簡述商品簡述商品簡述商品簡述商品簡述',
  productPrice = '$1234',
}) {
  const [favorit, setFavorit] = useState(productFavorit)
  const changeFavorit = (event) => {
    setFavorit(!favorit)
  }

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
          <Image
            src={noImage}
            className="card-img-top w-100 productCardImg"
            alt="..."
          ></Image>
          <div className="card-body styles.productCardBody">
            <p className="productName nav-font">{productName}</p>
            <p className="productBrief">{productBrief}</p>
            <div className="productcardBottom">
              <p className="productPrice nav-font">{productPrice}</p>
              <div className="productAddCart">
                <BsCartPlus className="nav-font"></BsCartPlus>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
