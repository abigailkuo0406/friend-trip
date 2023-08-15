import React, { useState, useEffect, Fragment } from 'react'
import Image from 'next/image'
import creditIcon1 from '@/public/yun/credit-card-icon/credit-icon1.png'
import creditIcon2 from '@/public/yun/credit-card-icon/credit-icon2.png'
import creditIcon3 from '@/public/yun/credit-card-icon/credit-icon3.png'
import creditIcon4 from '@/public/yun/credit-card-icon/credit-icon4.png'
import InputTextCheckout from '@/components/product_checkout/input/input-text-checkout'

import BtnNormal from '@/components/common/button/btn-normal'
import InputNumberManyCheckout from '@/components/product_checkout/input/input-number-many-checkout'

export default function CheckoutInfo2({
  setPaymentMethodValue = () => {},
  setCreditNumberValue = () => {},
  setCreditNumberValueError = () => {},
  setCreditError = () => {},
  setCreditErrorTracker = () => {},
  submitted = false,
  clickSubmitted = false,
  setCreditSecurityValue = () => {},
  setCreditNameValue = () => {},
  setCreditExValue = () => {},

  inputErrorCreditNumber = '',
  inputErrorCreditName = '',
  inputErrorCreditSecurity = '',
  inputErrorCreditEx = '',
}) {
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [paymentMethodComponent, setPaymentMethodComponent] = useState('')

  useEffect(() => {
    console.log('CCC: ', inputErrorCreditName)
  }, [inputErrorCreditName])

  useEffect(() => {
    localStorage.setItem(
      'checkoutPaymentErrorCheck',
      JSON.stringify({
        credit_number: false,
        credit_name: false,
        credit_security: false,
        credit_ex: false,
      })
    )
  }, [])

  const payCredit = () => {
    setPaymentMethod('credit')
    setPaymentMethodValue('信用卡')
  }
  const payLinePay = () => {
    setPaymentMethod('line')
    setPaymentMethodValue('Line Pay')
  }

  useEffect(() => {
    if (paymentMethod == 'credit') {
      setPaymentMethodComponent(
        <Fragment>
          <div className="credit-icons">
            <Image src={creditIcon1} alt="visa-icon"></Image>
            <Image src={creditIcon2} alt="mastercard-icon"></Image>
            <Image src={creditIcon3} alt="jcb-icon"></Image>
            <Image src={creditIcon4} alt="americanexpress-icon"></Image>
          </div>
          <InputNumberManyCheckout
            id="CardNum"
            label="請輸入信用卡號"
            name="CardNum"
            value={
              JSON.parse(localStorage.getItem('checkoutInfo')).credit_number
            } // 預設數字
            inputNumber={4}
            maxLength={4}
            getValue={setCreditNumberValue}
            getValueError={setCreditNumberValueError}
            getName={() => {}}
            setError={setCreditError}
            setErrorTracker={setCreditErrorTracker}
            widthDiv="" // 調整 <div> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
            widthInput="input-width-5rem" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
            middleText="-"
            addClassforLabel="" // 如果要在 label 添加 class
            addClassforInput="" // 如果要在 input 添加 class
            submitted={submitted} // 追蹤是否提交了 <form>，除錯用
            clickSubmitted={clickSubmitted} // 提交一次變化一次
            required={false}
            inputError={inputErrorCreditNumber}
          ></InputNumberManyCheckout>
          <InputTextCheckout
            id="cardName"
            name="cardName"
            label="持卡姓名"
            value={JSON.parse(localStorage.getItem('checkoutInfo')).credit_name}
            width="input-width-30pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
            addClassforLabel="" // 如果要在 label 添加 class
            addClassforInput="" // 如果要在 input 添加 class
            getValue={setCreditNameValue} // 獲取填寫的數值
            getName={() => {}}
            required={false} // true：必填，false：非必填
            inputError={inputErrorCreditName}
          ></InputTextCheckout>
          <InputTextCheckout
            id="cardSecurity"
            name="cardSecurity"
            label="安全碼"
            value={
              JSON.parse(localStorage.getItem('checkoutInfo')).credit_security
            }
            width="input-width-30pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
            addClassforLabel="" // 如果要在 label 添加 class
            addClassforInput="" // 如果要在 input 添加 class
            getValue={setCreditSecurityValue} // 獲取填寫的數值
            getName={() => {}}
            required={false} // true：必填，false：非必填
            inputError={inputErrorCreditSecurity}
          ></InputTextCheckout>
          <InputTextCheckout
            id="cardEx"
            name="cardEx"
            label="信用卡到期日"
            value={JSON.parse(localStorage.getItem('checkoutInfo')).credit_ex}
            width="input-width-30pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
            addClassforLabel="" // 如果要在 label 添加 class
            addClassforInput="" // 如果要在 input 添加 class
            getValue={setCreditExValue} // 獲取填寫的數值
            getName={() => {}}
            required={false} // true：必填，false：非必填
            inputError={inputErrorCreditEx}
          ></InputTextCheckout>
        </Fragment>
      )
    } else if (paymentMethod == 'line') {
      setPaymentMethodComponent(<p>抱歉！現在還無法使用</p>)
    }
  }, [
    paymentMethod,
    inputErrorCreditNumber,
    inputErrorCreditName,
    inputErrorCreditSecurity,
    inputErrorCreditEx,
  ])

  return (
    <>
      <div className="payment-method">
        <div className="payment-method-btn">
          <BtnNormal
            type="button"
            value="button"
            btnText="信用卡刷卡"
            // addIMGLeft={<BsArrowLeftShort></BsArrowLeftShort>} // 增加左側圖示 // 使用 react-icon，記得要 import 進入
            // addIMGRight={<BsArrowRightShort></BsArrowRightShort>} // 增加右側圖示 // 使用 react-icon，記得要 import 進入
            addClassforButton={
              paymentMethod == 'credit' ? 'btn-dark' : 'btn-light'
            } //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            disabled={false} // fase：可點，true：不可點
            target=""
            onClick={payCredit}
          ></BtnNormal>
          {/* <BtnNormal
            type="button"
            value="button"
            btnText="LinePay"
            // addIMGLeft={<BsArrowLeftShort></BsArrowLeftShort>} // 增加左側圖示 // 使用 react-icon，記得要 import 進入
            // addIMGRight={<BsArrowRightShort></BsArrowRightShort>} // 增加右側圖示 // 使用 react-icon，記得要 import 進入
            addClassforButton={paymentMethod == 'line' ? "btn-dark" : "btn-light"} //.btn-dark：深色按鈕 .btn-light：淺色按鈕 .btn-white：白色按鈕
            disabled={false} // fase：可點，true：不可點
            target=""
            onClick={payLinePay}
      ></BtnNormal> */}
        </div>
        <div className="payment-method-input">{paymentMethodComponent}</div>
      </div>
    </>
  )
}
