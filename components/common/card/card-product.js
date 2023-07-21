import React, { useState, useEffect, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import noImage from '@/public/img/fake-data/no-image.jpg'
import { BsCart, BsCartPlus, BsHeartFill, BsHeart } from 'react-icons/bs'

import fakeIimg1 from '@/public/img/fake-data/fake-img-1.jpg'
import fakeIimg2 from '@/public/img/fake-data/fake-img-2.jpg'
import fakeIimg3 from '@/public/img/fake-data/fake-img-3.jpg'

export default function CardProduct({
  productFavorit = false,
  productImage = 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg',
  productName = '商品名稱',
  productCategory = '',
  productBrief = '商品簡述商品簡述商品簡述商品簡述商品簡述商品簡述商品簡述商品簡述商品簡述商品簡述',
  productPrice = '$1234',
  productPost = '',
}) {
  const [favorit, setFavorit] = useState(productFavorit)

  const changeFavorit = (event) => {
    setFavorit(!favorit)
  }
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
                src={fakeIimg1}
                className="card-img-top productCardImg"
                alt={`${productName}'s product img`}
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
                <BsCartPlus className="nav-font"></BsCartPlus>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
