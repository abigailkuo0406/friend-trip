import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import noImage from '@/public/img/no-image.jpg'
import styles from '@/components/common/card/card-product.module.css'

export default function CardProduct({
  productFavorit = false,
  productImage = 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg',
  productName = '商品名稱',
  productCategory = ['分類1', '分類2'],
  productBrief = '商品簡述商品簡述商品簡述商品簡述商品簡述商品簡述商品簡述商品簡述商品簡述商品簡述',
  productPrice = '商品價格',
}) {
  const [errorMessage, setErrorMessage] = useState('\u00A0') // 錯誤訊息用 // \u00A0 為會佔空間的空白，如果設空字串排版會爛掉

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className={`${styles.productCard} card`}>
        <Image
          src={noImage}
          className={`card-img-top w-100 ${styles.productCardImg}`}
          alt="..."
        ></Image>
        <div className={`card-body ${styles.productCardBody}`}>
          <p className={`${styles.productName}`}>{productName}</p>
          <p className={`${styles.productBrief} small-font`}>{productBrief}</p>
          <div className={`${styles.cardBottom}`}></div>
        </div>
      </div>
    </div>
  )
}
