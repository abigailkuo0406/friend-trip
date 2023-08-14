import React, { useState, useEffect,Fragment} from 'react'
import BtnNormal from '@/components/common/button/btn-normal'
import TableCheckingProduct from '@/components/common/table/table-checking-product'
import { useRouter } from 'next/router'
import Link from 'next/link'
export default function CheckoutProduct({
    orderID='',
    goCheckOut=()=>{},
    setBackOneGo=()=>{},
    setSubmitted=()=>{},
}) {
    const router = useRouter()
    const { page } = router.query
    const [checkingProduct, setCheckingProduct] = useState([{}])

    useEffect(() => {

        fetch(`${process.env.API_SERVER}/checkout/getProduct`, {
          method: 'POST',
          body: JSON.stringify({orderID: orderID,}),
          headers: {
            'Content-Type': 'application/json',
          },
        }
        )
          .then((r) => r.json())
          .then((data) => {
            console.log("這筆訂單的產品有：",data.all)
            setCheckingProduct(data.all)
          })
      }, [orderID])
      const backOne = ()=>{
        router.push("?page=1")
        setBackOneGo(true) // 判斷有沒有觸發從第二頁轉為第一頁
      }
      const backTwo = ()=>{
        router.push("?page=2")
        setBackOneGo(true) // 判斷有沒有觸發從第二頁轉為第一頁
      }
      //要將 checkoutInfoErrorCheck 的所有值都是 true 才能通過到下一頁
      const goChekckInfo = ()=>{
        const data = JSON.parse(localStorage.getItem("checkoutInfoErrorCheck"))
        if(Object.values(data).every(value => value === true)){
          setSubmitted(0)
          router.push({query:{page:"2"}})
        } else {setSubmitted(Math.random())}
      }

      //要將 checkoutPaymentErrorCheck 的所有值都是 true 才能通過到下一頁
      const goComplete = ()=>{
        const data = JSON.parse(localStorage.getItem("checkoutPaymentErrorCheck"))
        if(Object.values(data).every(value => value === true)){
          setSubmitted(0)
          router.push({query:{page:"3"}})
        }else {setSubmitted(Math.random())}
      }
    let checkoutComponent;
    if (page === '1') {
      checkoutComponent = 
      <div className="checkout-btn" >
        <Link href="./cart" className="go-payment-btn">
          <BtnNormal
                type="button"
                value="button"
                btnText="返回購物車"
                addClassforButton="btn-light" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
                disabled={false} // fase：可點，true：不可點
            ></BtnNormal>
        </Link>
        {/* <Link href="?page=2" className="go-payment-btn"> */}
          <BtnNormal
                type="button"
                value="button"
                btnText="付款方式"
                addClassforButton="btn-dark" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
                disabled={false} // fase：可點，true：不可點
                onClick={goChekckInfo}
            ></BtnNormal>
          {/* </Link> */}
      </div>
    } else if (page === '2') {
        checkoutComponent =<div className="checkout-btn" >
        <BtnNormal
              type="button"
              value="button"
              btnText="上一步"
              onClick={backOne}
              addClassforButton="btn-light" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
              disabled={false} // fase：可點，true：不可點
          ></BtnNormal>
          {/* <Link href="#" className="go-payment-btn"> */}
          {/* href="?page=3" */}
            <BtnNormal
                type="button"
                value="button"
                btnText="結帳去！"
                addClassforButton="btn-dark" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
                disabled={false} // fase：可點，true：不可點
                onClick={goComplete}
            ></BtnNormal>
          {/* </Link> */}
          </div>
          
    } else if (page === '3') {
      checkoutComponent =<div className="checkout-btn" >
      <BtnNormal
            type="button"
            value="button"
            btnText="返回修改"
            onClick={backOne}
            addClassforButton="btn-light" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            disabled={false} // fase：可點，true：不可點
        ></BtnNormal>
        <BtnNormal
            type="button"
            value="button"
            btnText="確認訂單"
            addClassforButton="btn-dark" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            disabled={false} // fase：可點，true：不可點
            onClick={goCheckOut}
        ></BtnNormal>
        </div>
  }
  return (
   <>
   <table className="checkingProdutList">
    <thead>
        <tr>
            <th>產品名</th>
            <th>數量</th>
            <th>小計</th>
        </tr>
    </thead>
    <tbody>
    {checkingProduct.map((i) => (
      <Fragment key={i.product_id + "forCart"}>
        <TableCheckingProduct
          productName={i.product_name}
          productNum={i.product_num}
          productPrice={i.product_price}
          productID={i.product_id}
        ></TableCheckingProduct>
      </Fragment>
    ))}
    </tbody>
   </table>
   <div className="checkingProdutTotal"><p>購物車總計：</p><h4> NT$ {checkingProduct.length>0?(checkingProduct[0].checking_total):(undefined)}</h4></div>
   {checkoutComponent}</>
  )
}