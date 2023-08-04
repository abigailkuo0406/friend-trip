import React, { useState, useEffect, Fragment,useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProductPageLayout from '@/components/layout/product-page-layout'
import { useRouter } from 'next/router'
import logo from '@/public/img/logo/FriendTrip-Logo.png'
import { BsCart } from 'react-icons/bs'
import CardProduct from '@/components/common/card/card-product'
import AuthContext from '@/context/AuthContext'

export default function ProductIndex() {
  const {auth, setAuth } = useContext(AuthContext)
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
  const [cartNumber, setCartNumber] = useState(0)
  const [allCollection, setAllCollection] = useState([]) // 存有所有收藏商品資料
  const [allCollectionID, setAllCollectionID] = useState([]) // 存有所有收藏商品 ID
  const [addProduct, setAddProduct] = useState([])
  useEffect(() => {
    if(auth.member_id != 0){
    localStorage.setItem("collectionID", JSON.stringify([]));
    console.log("會員：",auth.member_id)
    if(auth.token){
    fetch(`${process.env.API_SERVER}/product/cart/read`, {
      method: 'POST',
      body: JSON.stringify({auth}),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    )
      .then((r) => r.json())
      .then((data) => {

        setCartNumber(data.all.length)
      })
      

      fetch(`${process.env.API_SERVER}/collection/findCollection`, {
        method: 'POST',
        body: JSON.stringify({memberID: auth.member_id}),
        headers: {
          'Content-Type': 'application/json',
        },
      }
      )
        .then((r) => r.json())
        .then((data) => {
          console.log("這個：",data.all.map(item => item.product_id))
          setAllCollectionID(data.all.map(item => item.product_id))
          localStorage.setItem("collectionID", JSON.stringify(data.all.map(item => item.product_id)));
        })
    
    }}
  }, [auth, addProduct, router])

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

  const goCart = () => {
    router.push('./product/cart')
  }
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
            <a href="./product/cart" >
              <BsCart></BsCart>
              <span className="cartNumber">{cartNumber}</span>
            </a>
            </div>
          </div>
        </div>
        <div className="row g-5">
          {data.rows.map((i) => (
            <Fragment key={i.product_id}>
              <CardProduct
                memberID={auth.member_id}
                productID={i.product_id}
                allCollectionID={allCollectionID.includes(i.product_id)}
                productName={i.product_name}
                productCategory={i.product_category}
                productBrief={i.product_brief}
                productPrice={i.product_price}
                productPost={i.product_post}
                setAddProduct={setAddProduct}
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
