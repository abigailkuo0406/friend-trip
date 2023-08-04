import React, { useState, useEffect, Fragment,useContext, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/img/logo/FriendTrip-Logo.png'
import NoSidebarLayout from '@/components/layout/nosidebar-layout'
import TableCollection from '@/components/common/table/table-collection'
import BtnNormal from '@/components/common/button/btn-normal'
import AuthContext from '@/context/AuthContext'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export default function Collection() {
  const {auth, setAuth } = useContext(AuthContext)
  const[change, setChange] = useState(0)
  const [collectionProduct, setCollectionProduct] = useState([])

  // 透過會員 id 抓取購物車所有商品的 id 和數量
  useEffect(() => {
    
    fetch(`${process.env.API_SERVER}/collection/findCollectionList`, {
      method: 'POST',
      body: JSON.stringify({memberID: auth.member_id}),
      // auth 為單純的 object 記錄所有會員資料，{auth} 為 key 為 auth 對應值為所有會員資料
      headers: {
        'Content-Type': 'application/json',
      },
    }
    )
      .then((r) => r.json())
      .then((data) => {
        setCollectionProduct(data.all)
      })
      .catch((error) => console.error("Error:", error))
  }, [auth, change])

  let allproduct = collectionProduct

  return (
    <>
      <div className="CartPageHeader onePageHeader">
        <div className="PageBack">
          <Link replace href="../product">
            <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
          </Link>
        </div>
        <div className="PageTitle">
          <p>收藏商品清單</p>
        </div>
      </div>
      <section className="order_section collection_section">
        <div className="order_left">
          <table className="product_table collection_table">
            <thead>
              <tr>
                <th className="product_th_check">
               
                </th>
                <th className="product_th_name">商品名</th>
                <th className="product_th_price">價格</th>
                <th className="product_th_brief">描述</th>
                <th className="product_th_btn"></th>
              </tr>
            </thead>
            <tbody>
  {allproduct.length > 0 ? (
    allproduct.map((i) => (
      <Fragment key={i.product_id + "forCart"}>
        <TableCollection
          memberID={i.member_id}
          productID={i.product_id}
          productIMG={i.product_main_img}
          productName={i.product_name}
          productPrice={i.product_price}
          productBrief={i.product_brief}
          productPost={i.product_post}
          setChange={setChange}
        ></TableCollection>
      </Fragment>
    ))
  ) : (
    <tr className="noItemCart">
      <td colSpan="10">
        <p>此收藏清單尚無商品</p>
      </td>
    </tr>
  )}
</tbody>
          </table>
        </div>
        
      </section>
      
    </>
  )
}

Collection.getLayout = function (page) {
  return <NoSidebarLayout>{page}</NoSidebarLayout>
}
