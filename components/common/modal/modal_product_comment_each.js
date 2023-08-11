import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import fakeIimg1 from '@/public/img/fake-data/fake-img-1.jpg'
import Swal from 'sweetalert2'
import InputNumber from '@/components/common/input/input-number'
import BtnNormal from '@/components/common/button/btn-normal'
import InputText from '@/components/common/input/input-text'

export default function ModalProductCommentEach({
  productID = 0,
  productName = '',
  productRate = 0,
  setInputName=()=>{},
  setComment=()=>{},
  comment=[],
}) {

  const [inputValue, setInputValue] = useState("");
  const [ratingValue, setRatingValue] = useState(5);
  useEffect(()=>{
    if(ratingValue<1){
      setRatingValue(1)
    }
  },[ratingValue])
  const [hoverIndex, setHoverIndex] = useState(-1);

  useEffect(()=>{
    if(comment.length>0){
      const old = comment.filter((element) => element.product_id != productID); // 更新評論資料時將其他輸入過的加進來，但排除自己的
      setComment([...old, {product_id: productID,comment_rate: ratingValue, comment_content: inputValue}])
    } else if (comment.length==0){
      setComment([{product_id: productID,comment_rate: ratingValue, comment_content: inputValue}])
    }
  },[inputValue, ratingValue])

// useEffect(()=>{
//     console.log("GGG：", comment)
//   },[comment])
  

  const handleMouseOver = (index) => {
    setHoverIndex(index);
    setRatingValue(0);
  };

  const handleMouseClick = (index) => {
    setRatingValue(index + 1);
  };

  const handleMouseOut = () => {
    setHoverIndex(-1);
    
  };
  
  return(
 <div className="product_comment_each">
      <div className="product-name">
   
          <Image
                  src={`/yun/product-img/pi-${productID}.png`}
                  className="commentImg"
                  alt={`${productID}'s product img`}
                  width={500}
                  height={500}
                  onError={(e) => {
                    e.target.srcset = '/yun/product-img/no-img.png';
                  }}
              ></Image>
        <h5>{productName}</h5>
      </div>
      <div className="product_comment_rating">
        <label htmlFor={`rating${productID}`}>為商品評分</label>
        <div id={`rating${productID}`} className="rating">
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`${index <= hoverIndex || index < ratingValue ? 'fa-solid' : 'fa-regular'} fa-star`}
              onMouseOver={() => handleMouseOver(index)}
              onClick={() => handleMouseClick(index)}
              onMouseOut={handleMouseOut}
            />
          ))}
        </div>
        <div id="rating-value">
        {ratingValue === 0 ? '' : `${ratingValue}顆星`}
      </div>
      </div>
      <div className="product_comment_comment">
      <InputText
            id={`comment${productID}`}
            name={`comment${productID}`}
            label="商品評論"
            width="input-width-100pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
            addClassforLabel="" // 如果要在 label 添加 class
            addClassforInput="" // 如果要在 input 添加 class
            getValue={setInputValue} // 獲取填寫的數值
            getName={setInputName}
            required={true} // true：必填，false：非必填
          ></InputText>
      </div>
      
    </div>
  )
}
