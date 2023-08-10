import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import fakeIimg1 from '@/public/img/fake-data/fake-img-1.jpg'

import InputNumber from '@/components/common/input/input-number'
import BtnNormal from '@/components/common/button/btn-normal'

export default function CollectionCartModalAdd({
  id='',
  memberID=0,
  productID=0,
  productName='',
  productPrice=0,
  productNum=1,
}) {

  const[inputValue, setInputValue]=useState(1)
  const[inputName, setInputName]=useState('')
  const handleAddCart = () =>{
    fetch(`${process.env.API_SERVER}/product/cart/add`, {
      method: 'POST',
      body: JSON.stringify({member: memberID, productID: productID, productNum:inputValue}),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    )
      .then((r) => r.json())
      .then((data) => {
        // console.log("增加後總價：",data.all[0].cart_total)

      })
  }

  return (
    <div className="modal fade" id={id} tabindex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content modalCartAdd">
      <div className="modal-header">
        <p lass="modal-title fs-5" id={`${id}Label`}>有<span className="modal-title-point">1</span>樣商品加入您的購物車</p>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="body-product-img"><Image
                  src={`/yun/product-img/pi-${productID}.png`}
                  className=""
                  alt={`${productID}'s product img`}
                  width={300}
                  height={300}
                  onError={(e) => {
                    e.target.srcset = '/yun/product-img/no-img.png';
                  }}
              ></Image></div>
        <div className="body-product-info">
          <h6 className="product-info-title">{productName}</h6>
          <h6 className="product-info-price">{`NT$ ${productPrice}`}</h6>
          <InputNumber
            id="ProductNum"
            label="購買數量："
            name="ProductNum"
            value={1} // 預設數字
            max={99} // 最大可選數字
            min={1} // 最小可選數字
            step={1} // 右邊箭頭按一次的數字區間
            hideArrows={false} // true：隱藏右側上下箭頭按鈕，false：顯示
            getValue={setInputValue}
            getName={setInputName}
            width="input-width-5rem" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
            addClassforLabel="" // 如果要在 label 添加 class
            addClassforInput="" // 如果要在 input 添加 class
          ></InputNumber>
          <BtnNormal
            type="button"
            value="button"
            btnText="確定"
            // addIMGLeft={<BsArrowLeftShort></BsArrowLeftShort>} // 增加左側圖示 // 使用 react-icon，記得要 import 進入
            // addIMGRight={<BsPlus></BsPlus>} // 增加右側圖示 // 使用 react-icon，記得要 import 進入
            addClassforButton="btn-dark cart-btn" //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            disabled={false} // fase：可點，true：不可點
            onClick={handleAddCart}
          ></BtnNormal>
        
          
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
