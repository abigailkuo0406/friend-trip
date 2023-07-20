import React, { useState, useEffect, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProductPageLayout from '@/components/layout/product-page-layout'
import { useRouter } from 'next/router'
import logo from '@/public/img/logo/FriendTrip-Logo.png'
import { BsCart } from 'react-icons/bs'
import CardProduct from '@/components/common/card/card-product'

export default function ProductIndex() {
  const router = useRouter()
  const [data, setData] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 4,
    totalPages: 0,
    page: 1,
    rows: [],
  })
  const [keyword, setKeyword] = useState('')
  useEffect(() => {
    setKeyword(router.query.keyword || '')
    const usp = new URLSearchParams(router.query)

    // API串接
    fetch(`${process.env.API_SERVER}/product?${usp.toString()}`, {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((data) => {
        setData(data)
      })
  }, [router.query])

  console.log('此頁的商品資料', data.rows)
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
          {data.rows.map((i) => (
            <Fragment key={i.product_id}>
              <CardProduct
                productName={i.product_name}
                productBrief={i.product_brief}
                productPrice={i.product_price}
                productPost={i.product_post}
              ></CardProduct>
            </Fragment>
          ))}
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
