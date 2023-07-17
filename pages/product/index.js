import React, { useState } from 'react'
import AdminLayout from '@/components/layout/admin-layout'
import CardProduct from '@/components/common/card/card-product'
import InputText from '@/components/common/input/input-text'
import InputTextDouble from '@/components/common/input/input-text-double'
import InputRadioGroup from '@/components/common/input/input-radio-group'
import AreaText from '@/components/common/input/textarea'
import SelectOption from '@/components/common/input/select-option'
import InputNumber from '@/components/common/input/input-number'
import InputNumberMany from '@/components/common/input/input-number-many'
import InputCheckboxGroup from '@/components/common/input/input-checkbox-group'
import BtnNormal from '@/components/common/button/btn-normal'

import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'

export default function ProductIndex() {
  return (
    <>
      <div className="container-fluid overflow-hidden">
        <div className="row g-5">
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
        </div>
      </div>
    </>
  )
}

// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
ProductIndex.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
