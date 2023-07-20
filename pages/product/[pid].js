import React, { useState, useEffect, Fragment } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ProductPageLayout from '@/components/layout/product-page-layout'

export default function ProductItem() {
  const router = useRouter()
  const [row, setRow] = useState(null)
  useEffect(() => {
    fetch(process.env.API_SERVER + '/product/' + router.query.pid)
      .then((r) => r.json())
      .then((result) => {
        if (result.success) {
          setRow(result.row)
        } else {
          alert('沒資料唷！！')
        }
      })
  }, [router.query])

  console.log('row：', router.query.pid)
  return (
    <>
      <p>{router.query.pid}</p>
      <pre>{row ? JSON.stringify(row, null, 4) : <p>沒有資料</p>}</pre>
    </>
  )
}

ProductItem.getLayout = function (page) {
  return <ProductPageLayout>{page}</ProductPageLayout>
}
