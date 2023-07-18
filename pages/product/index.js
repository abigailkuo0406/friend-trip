import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ProductPageLayout from '@/components/layout/product-page-layout'
import { useRouter } from 'next/router'
import logo from '@/public/img/logo/FriendTrip-Logo.png'
import { BsCart } from 'react-icons/bs'
import CardProduct from '@/components/common/card/card-product'

export default function ProductIndex() {
  const router = useRouter()
  const [data, setData] = useState({})
  const [keyword, setKeyword] = useState('')
  useEffect(() => {
    setKeyword(router.query.keyword || '')
    const usp = new URLSearchParams(router.query)

    // API串接
    fetch('http://localhost:3002/product', {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        setData(data)
      })
  }, [])

  return (
    <>
      <div className="container-fluid overflow-hidden">
        <div className="ProductPageHeader row g-5">
          <div className="ProductPageTitle col-8">
            <Image src={logo}></Image>
            <div>
              <h1>友好商城</h1>
            </div>
          </div>
          <div className="PageCart col-4">
            <div>
              <BsCart></BsCart>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
        </div>
      </div>
    </>
  )
}

// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
ProductIndex.getLayout = function (page) {
  return <ProductPageLayout>{page}</ProductPageLayout>
}
