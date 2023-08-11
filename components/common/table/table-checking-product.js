import React, { useState, useEffect,Fragment } from 'react'
import Image from 'next/image'
import fakeIimg1 from '@/public/img/fake-data/fake-img-1.jpg'
import BtnNormal from '@/components/common/button/btn-normal'
import InputNumberCart from '@/components/common/input/input-number-cart'
import InputCheckbox from '@/components/common/input/input-checkbox'
import { BsBoxArrowInDown, BsX } from "react-icons/bs";

export default function TableCheckingProduct({
    productName='',
    productNum=0,
    productPrice=0,
    productID=0,
}) {
  

  return (
    <>
    <tr>
    <td className="checkingProdutListName">
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
          <p>{productName}</p></td>
    <td>{productNum}</td>
    <td>NT$ {productPrice*productNum}</td>
    </tr>
    </>
  )
}
