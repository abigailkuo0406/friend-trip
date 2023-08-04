import React, { useState, useEffect, Fragment } from 'react'
import Image from 'next/image'


import BtnNormal from '@/components/common/button/btn-normal'
import fakeIimg1 from '@/public/img/fake-data/fake-img-1.jpg'

export default function OrderCardProduct({
  productDetail={},
}) {
  
  return (
    <>
     <p>{productDetail.product_name}</p>
    </>
  )
}
