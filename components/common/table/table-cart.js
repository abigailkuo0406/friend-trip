import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import fakeIimg1 from '@/public/img/fake-data/fake-img-1.jpg'
import BtnNormal from '@/components/common/button/btn-normal'
import InputNumberCart from '@/components/common/input/input-number-cart'
import InputCheckbox from '@/components/common/input/input-checkbox'
import { BsBoxArrowInDown, BsX } from "react-icons/bs";

export default function TableCart({
  cartCheckbox=true,
  getCheck=()=>{},
  memberID=0,
  productID=0,
  productIMG='',
  productName = '商品名稱',
  productPrice = 0,
  productNum = 1,
  productBrief ='',
  productPost='',
  getValue=()=>{},
  theValue=0,
  getName=()=>{},
  theName='',
  setDeleteData=()=>{},
  setGetTotal=()=>{},
  setTotal=()=>{},
}) {
  const [checkValue, setCheckValue] = useState(cartCheckbox)
  const [theSubtotal, setTheSubtotal] = useState('')
  
  useEffect(() => {
    setTheSubtotal(productNum*productPrice)
    let temp = JSON.parse(localStorage.getItem("CartCheck"))
    temp[productID] = checkValue
    localStorage.setItem("CartCheck", JSON.stringify(temp));
  }, [])
  useEffect(() => {
    // getCheck(checkValue)
    // getName(productID)

  }, [checkValue])

  useEffect(() => {
    setCheckValue(cartCheckbox)
  }, [cartCheckbox])
  useEffect(() => {
    if(theName == productID)
    setTheSubtotal(theValue*productPrice)
  }, [theValue])
  useEffect(() => {
    let temp = JSON.parse(localStorage.getItem("CartMoneyTotal"))
    temp[productID] = theSubtotal
    localStorage.setItem("CartMoneyTotal", JSON.stringify(temp));
    setGetTotal(theSubtotal)

  }, [theSubtotal, []])
  
  const handleDelete = () =>{
    fetch(`${process.env.API_SERVER}/product/cart/delete`, {
      method: 'POST',
      body: JSON.stringify({member:memberID, product: productID, deleteAll: false}),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    )
      .then((r) => r.json())
      .then((data) => {
        setDeleteData(productID)
        if(data.all.length > 0){
        setTotal(data.all[0].cart_total)
        } else if (data.all.length == 0){
          setTotal(0.00)
          }
      })
  }
  return (
    <>
      <tr>
        <td className="product_td_check">
            <input
              type="checkbox"
              name={productID}
              id={productID}
              checked={checkValue}
              onChange = {(e)=>{
                setCheckValue(!checkValue)
                let temp = JSON.parse(localStorage.getItem("CartCheck"))
                temp[productID] = !checkValue
                localStorage.setItem("CartCheck", JSON.stringify(temp))
                getCheck(e.target.checked)
                getName(productID)
              }}
              className='new-check'
            >
            </input>
        </td>
        <td className="product_td_img_name">
        <div className="product_td_img">
        <Link href={`./${productPost}`} >
         
          <Image
                  src={`/yun/product-img/pi-${productID}.png`}
                  className=""
                  alt={`${productID}'s product img`}
                  width={300}
                  height={300}
                  onError={(e) => {
                    e.target.srcset = '/yun/product-img/no-img.png';
                  }}
              ></Image>
        </Link>
        </div>
          
          <p className="product_td_name"><Link href={`./${productPost}`}>{productName}</Link></p>
        </td>
        <td className="product_td_price">NT$ {productPrice}</td>
        <td className="product_td_input">
            <InputNumberCart
            id={`cart${productID}`}
            label=""
            name={productID}
            placeholder=""
            value={productNum} // 預設數字
            max={99} // 最大可選數字
            min={1} // 最小可選數字
            step={1} // 右邊箭頭按一次的數字區間
            hideArrows={false} // true：隱藏右側上下箭頭按鈕，false：顯示
            getValue={getValue}
            getName={getName}
            width="input-width-5rem" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
            addClassforLabel="" // 如果要在 label 添加 class
            addClassforInput="" // 如果要在 input 添加 class
            checkValue = {checkValue}
          ></InputNumberCart></td>
          <td className="product_td_subtotal">NT$ {theSubtotal}</td>
          <td className="product_td_btn">
          
          <BtnNormal
            type="button"
            value="button"
            btnText="刪除"
            // addIMGLeft={<BsArrowLeftShort></BsArrowLeftShort>} // 增加左側圖示 // 使用 react-icon，記得要 import 進入
            addIMGRight={<BsX></BsX>} // 增加右側圖示 // 使用 react-icon，記得要 import 進入
            addClassforButton="btn-white cart-btn" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            disabled={false} // fase：可點，true：不可點
            onClick={handleDelete}
          ></BtnNormal>
          </td>
      </tr>
    </>
  )
}
