import React, { useState, useEffect, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NoSidebarLayout from '@/components/layout/nosidebar-layout'
import TableCart from '@/components/common/table/table-cart'
import { useRouter } from 'next/router'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export default function Cart() {
  return (
    <>
      <div className="CartPageHeader onePageHeader">
        <div className="PageBack">
          <Link href="/product">
            <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
          </Link>
        </div>
        <div className="PageTitle">
          <p>購物車</p>
        </div>
      </div>
      <section className="order_section">
        <div className="order_left">
          <table className="product_table">
            <thead>
              <tr>
                <th>商品名</th>
                <th>價格</th>
                <th>數量</th>
                <th>小記</th>
              </tr>
            </thead>
            <tbody>
              <TableCart></TableCart>
              <TableCart></TableCart>
              <TableCart></TableCart>
            </tbody>
          </table>
        </div>
        <div className="order_right"></div>
      </section>
    </>
  )
}

Cart.getLayout = function (page) {
  return <NoSidebarLayout>{page}</NoSidebarLayout>
}
