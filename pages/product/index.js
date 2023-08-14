import React, { useState, useEffect, Fragment,useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProductPageLayout from '@/components/layout/product-page-layout'
import { useRouter } from 'next/router'
import logo from '@/public/img/logo/FriendTrip-Logo.png'
import { BsCart } from 'react-icons/bs'
import { TbAlertCircle } from "react-icons/tb";
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
          setAllCollectionID(data.all.map(item => item.product_id))
          localStorage.setItem("collectionID", JSON.stringify(data.all.map(item => item.product_id)));
        })
    
    }}
  }, [auth, addProduct, router])

  useEffect(() => {
    if(router.query.collection == undefined && router.query.buyagain == undefined){
    setKeyword(router.query.keyword || '')
    const usp = new URLSearchParams(router.query)
    // API串接
    fetch(`${process.env.API_SERVER}/product?${usp.toString()}`, {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((data) => {
        console.log("查找全部商品：",data)
        setData(data)
      })
    } else if(router.query.collection == "true" && router.query.buyagain == undefined){
      setKeyword(router.query.keyword || '')
      const usp = new URLSearchParams(router.query)
      fetch(`${process.env.API_SERVER}/product/findCollection?${usp.toString()}`, {
        method: 'POST',
        body: JSON.stringify({memberID: auth.member_id, keyword: router.query.keyword}),
        headers: {
          'Content-Type': 'application/json',
        },
      }
      )
        .then((r) => r.json())
        .then((data) => {
          console.log("查找收藏商品：",data)
          setData(data)
        })
    } else if(router.query.buyagain == "true" && router.query.collection == undefined){
      setKeyword(router.query.keyword || '')
      const usp = new URLSearchParams(router.query)
      fetch(`${process.env.API_SERVER}/product/findBuyagain?${usp.toString()}`, {
        method: 'POST',
        body: JSON.stringify({memberID: auth.member_id, keyword: router.query.keyword}),
        headers: {
          'Content-Type': 'application/json',
        },
      }
      )
        .then((r) => r.json())
        .then((data) => {
          console.log("查找再買一次商品：",data)
          setData(data)
        })
    }
  }, [router])

  // 當點擊收藏重新渲染時時不會跳到最上面
  useEffect(()=>{
    window.scrollTo({
      top: JSON.parse(localStorage.getItem("saveScrollY")),
      behavior: "instant"
  })
  },[router.query.favorit])

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
              <BsCart/>
              <span className="cartNumber">{cartNumber}</span>
            </a>
            </div>
          </div>
        </div>
        <div className="product-page-row row g-5">
        {data.totalRows != '0' ?
          (data.rows.map((element, index) => (
            <Fragment key={element.product_id}>
              <CardProduct
                memberID={auth.member_id}
                productID={element.product_id}
                allCollectionID={allCollectionID.includes(element.product_id)}
                productName={element.product_name}
                productCategory={element.product_category}
                productBrief={element.product_brief}
                productPrice={element.product_price}
                productRate={element.product_rate}
                productPost={element.product_post}
                setAddProduct={setAddProduct}
              ></CardProduct>
            </Fragment>
          ))) : (<h3 className="no-collection">ooops...! 目前無收藏商品<TbAlertCircle></TbAlertCircle></h3>)}
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
