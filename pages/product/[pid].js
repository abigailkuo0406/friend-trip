import React, { useState, useEffect, Fragment } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ProductPageLayout from '@/components/layout/product-page-layout'
import InputNumber from '@/components/common/input/input-number'
import BtnNormal from '@/components/common/button/btn-normal'

import fakeIimg1 from '@/public/img/fake-data/fake-img-1.jpg'
import { BsCart, BsCartPlus, BsHeartFill, BsHeart } from 'react-icons/bs'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export default function ProductItem({}) {
  const router = useRouter()
  const [row, setRow] = useState({
    product_id: 0,
    product_name: '',
    product_price: '',
    product_brief: '',
    product_category: '',
    product_rate: '',
    product_launch: '',
    product_discon: '',
    product_main_img: '',
    product_description: '',
    product_post: '',
    product_update: '',
    product_upload: '',
  })
  const {
    product_id,
    product_name,
    product_price,
    product_brief,
    product_category,
    product_rate,
    product_launch,
    product_discon,
    product_main_img,
    product_description,
    product_post,
    product_update,
    product_upload,
  } = row
  const [favorit, setFavorit] = useState(false)
  const [BuyValue, setBuyValue] = useState('')
  const [BuyName, setBuyName] = useState('')
  const changeFavorit = (event) => {
    setFavorit(!favorit)
  }
  const productBuyFormSubmit = (event) => {
    event.preventDefault()
    router.push('/product/cart')
  }
  useEffect(() => {
    fetch(process.env.API_SERVER + '/product/' + router.query.pid)
      .then((r) => r.json())
      .then((result) => {
        if (result.success) {
          setRow(result.row)
        } else {
          // alert(router.query.pid)
        }
      })
  }, [router.query])
  const cateArray = product_category.split(' ')

  return (
    <>
      <div className="PidPageHeader">
        <div className="PageBack">
          <Link href="/product">
            <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
          </Link>
        </div>

        <div className="PageCart">
          <div>
            <BsCart></BsCart>
          </div>
        </div>
      </div>
      <section className="productPageMain">
        <div className="productPageMainIMG">
          <Image
            src={fakeIimg1}
            className="card-img-top productCardImg"
            alt={`'s product img`}
          ></Image>
        </div>
        <div className="productPageMainINFO">
          <div className="productCategory">
            {cateArray.map((e, i) => (
              <Fragment key={i}>
                <p>{e}</p>
              </Fragment>
            ))}
          </div>
          <div class="productNameFavorit">
            <h2 className="productName">{product_name}</h2>
            <div
              className="productFavorit"
              onClick={() => {
                changeFavorit()
              }}
            >
              {favorit ? <BsHeartFill></BsHeartFill> : <BsHeart></BsHeart>}
            </div>
          </div>
          <div className="productDescription">{product_description}</div>
          <h4 className="productPrice">{`NT$ ${product_price}`}</h4>
          <div className="productRateIconNum">
            <div className="productRateIcon">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </div>
            <a className="productRateNum">{product_rate}</a>
          </div>
          <div>
            <form class="productBuyForm" onSubmit={productBuyFormSubmit}>
              <InputNumber
                id="BuyProductNum"
                label=""
                name="BuyProductNum"
                placeholder=""
                value={1} // 預設數字
                max={99} // 最大可選數字
                min={1} // 最小可選數字
                step={1} // 右邊箭頭按一次的數字區間
                hideArrows={false} // true：隱藏右側上下箭頭按鈕，false：顯示
                getValue={setBuyValue}
                getName={setBuyName}
                width="input-width-5rem" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
                addClassforLabel="" // 如果要在 label 添加 class
                addClassforInput="" // 如果要在 input 添加 class
              ></InputNumber>
              <BtnNormal
                type="submit"
                value="submit"
                btnText="加入購物車"
                addIMGLeft="" // 增加左側圖示 // 使用 react-icon，記得要 import 進入
                addIMGRight="" // 增加右側圖示 // 使用 react-icon，記得要 import 進入
                addClassforButton="btn-dark" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
                disabled={false} // fase：可點，true：不可點
                target=""
              ></BtnNormal>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

ProductItem.getLayout = function (page) {
  return <ProductPageLayout>{page}</ProductPageLayout>
}
