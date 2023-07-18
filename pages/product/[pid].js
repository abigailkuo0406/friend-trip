import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ProductPageLayout from '@/components/layout/product-page-layout'

// import Navbar from "@/components/Navbar";

export default function ProductItem() {
  const router = useRouter()
  const [row, setRow] = useState(null)

  //   useEffect(() => {
  //     fetch(process.env.API_SERVER + "/products/" + router.query.pid)
  //       .then((r) => r.json())
  //       .then((result) => {
  //         if (result.success) {
  //           setRow(result.row);
  //         } else {
  //         }
  //       });
  //   }, [router.query]);

  return (
    <>
      <div>ProductItem</div>
      <p>{router.query.pid}</p>
      <pre>{row ? JSON.stringify(row, null, 4) : <p>沒有資料</p>}</pre>
    </>
  )
}

ProductItem.getLayout = function (page) {
  return <ProductPageLayout>{page}</ProductPageLayout>
}
