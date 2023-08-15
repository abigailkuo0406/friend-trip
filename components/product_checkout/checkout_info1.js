import React, { useState, useEffect } from 'react'

import InputTextCheckout from '@/components/product_checkout/input/input-text-checkout'
import InputTelCheckout from '@/components/product_checkout/input/input-tel-checkout'
import InputEmailCheckout from '@/components/product_checkout/input/input-email-checkout'
import SelectOption from '@/components/common/input/select-option'
import AreaTextFlexCheckout from '@/components/product_checkout/input/textarea-flex-checkout'
import InputCheckboxGroup from '@/components/common/input/input-checkbox-group'
import { useRouter } from 'next/router'

export default function CheckoutInfo1({
  memberID = '',
  memberName = '未知使用者',
  memberTel = '',
  memberAddress = '',
  memberEmail = 'user@mail.com',
  memberGender = '',
  setReceiverNameValue = () => {},
  setReceiverNameName = () => {},
  setReceiverGenderValue = () => {},
  setReceiverGenderName = () => {},
  setReceiverTelValue = () => {},
  setReceiverTelName = () => {},
  setReceiverAddressValue = () => {},
  setReceiverAddressName = () => {},
  setReceiverEmailValue = () => {},
  setReceiverEmailName = () => {},
  setOrderNoteValue = () => {},
  setOrderNoteName = () => {},

  backOneGo = false,

  inputErrorReceiverName = '',
  inputErrorReceiverAddress = '',
  inputErrorReceiverTel = '',
  inputErrorReceiverEmail = '',
}) {
  const router = useRouter()
  const [defaultReceiverName, setDefaultReceiverName] = useState('')
  const [defaultReceiverGender, setDefaultReceiverGender] = useState('')
  const [defaultReceiverTel, setDefaultReceiverTel] = useState('')
  const [defaultReceiverAddress, setDefaultReceiverAddress] = useState('')
  const [defaultReceiverEmail, setDefaultReceiverEmail] = useState('')
  const [defaultOrderNote, setDefaultOrderNote] = useState('')
  let defaultOrderNoteTemp = '123'
  const [inputMamberValueCheckBox, setInputMamberValueCheckBox] = useState('')
  const [inputMamberNameCheckBox, setInputMamberNameCheckBox] = useState('')

  useEffect(() => {
    localStorage.setItem(
      'checkoutInfoErrorCheck',
      JSON.stringify({
        receiver_name: false,
        receiver_tel: false,
        receiver_address: false,
        receiver_email: false,
      })
    )
  }, [])

  useEffect(() => {
    if (backOneGo == true) {
      let checkoutInfo = JSON.parse(localStorage.getItem('checkoutInfo'))
      setDefaultReceiverName(checkoutInfo.receiver_name)
      setDefaultReceiverGender(checkoutInfo.receiver_gender)
      setDefaultReceiverTel(checkoutInfo.receiver_tel)
      setDefaultReceiverAddress(checkoutInfo.receiver_address)
      setDefaultReceiverEmail(checkoutInfo.receiver_email)
      setDefaultOrderNote(checkoutInfo.order_note)
    }
  }, [backOneGo])
  useEffect(() => {
    defaultOrderNoteTemp = defaultOrderNote
  }, [defaultOrderNote])
  useEffect(() => {
    let checkoutInfo = JSON.parse(localStorage.getItem('checkoutInfo'))
    if (inputMamberValueCheckBox[0] == 'yes') {
      // 如果點選了帶入會員資料
      setDefaultReceiverName(memberName)
      setDefaultReceiverTel(memberTel)
      setDefaultReceiverAddress(memberAddress)
      setDefaultReceiverEmail(memberEmail)
      if (memberGender == '男') {
        setDefaultReceiverGender('male')
        // localStorage.setItem("checkoutInfo", JSON.stringify({...checkoutInfo, Inforeceiver_name: memberName, receiver_gender: 'male', receiver_tel: memberTel, receiver_address:memberAddress, receiver_email: memberEmail}))
      } else if (memberGender == '女') {
        setDefaultReceiverGender('female')
        // localStorage.setItem("checkoutInfo", JSON.stringify({...checkoutInfo, receiver_name: memberName, receiver_gender: 'male', receiver_tel: memberTel, receiver_address:memberAddress, receiver_email: memberEmail}))
      }
    } else if (inputMamberValueCheckBox[0] == false) {
      setDefaultReceiverName('')
      setDefaultReceiverTel('')
      setDefaultReceiverAddress('')
      setDefaultReceiverEmail('')
      // setDefaultReceiverGender('')
    }
  }, [inputMamberValueCheckBox])

  return (
    <>
      <InputCheckboxGroup
        name="input_member"
        // idGroup、valueGroup、labelGroup 數目要一致，相同 index 互相對應
        idGroup={['input_member']} // 個別 radio 的 ID
        valueGroup={['yes']} // 個別 radio 的 name
        labelGroup={['請幫我帶入 FriendTrip 會員資料']} // 個別標籤
        getValue={setInputMamberValueCheckBox}
        getName={setInputMamberNameCheckBox}
        addClassforDiv="member-auto"
        addClassforTitleLabel="" // 如果要在標題 label 添加 class
        addClassforEachLabel="input-member" // 如果要在個別選項 label 添加 class
        addClassforInput="" // 如果要在 input 添加 class
        errorText=""
      ></InputCheckboxGroup>
      <InputTextCheckout
        id="receiver_name"
        name="receiver_name"
        label="收件者姓名"
        value={defaultReceiverName}
        placeholder="必填"
        width="input-width-100pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
        addClassforLabel="" // 如果要在 label 添加 class
        addClassforInput="" // 如果要在 input 添加 class
        getValue={setReceiverNameValue} // 獲取填寫的數值
        getName={setReceiverNameName} // 獲取 name
        required={false} // true：必填，false：非必填
        inputError={inputErrorReceiverName}
      ></InputTextCheckout>
      <SelectOption
        id="receiver_gender"
        label="稱謂"
        name="receiver_gender"
        selectedDefault={defaultReceiverGender} //預設選項，可不填，填寫 value
        valueGroup={['male', 'female']}
        optionGroup={['先生', '小姐']}
        getValue={setReceiverGenderValue}
        getName={setReceiverGenderName}
        width="input-width-10rem" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
        addClassforLabel="" // 如果要在 label 添加 class
        addClassforSelect="" // 如果要在 Select 添加 class
        addClassforOption="" // 如果要在 Option 添加 class
      ></SelectOption>
      <InputTelCheckout
        id="receiver_tel"
        name="receiver_tel"
        label="收件電話"
        placeholder="必填"
        value={defaultReceiverTel}
        width="input-width-100pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
        addClassforLabel="" // 如果要在 label 添加 class
        addClassforInput="" // 如果要在 input 添加 class
        getValue={setReceiverTelValue} // 獲取填寫的數值
        getName={setReceiverTelName} // 獲取 name
        required={false} // true：必填，false：非必填
        inputError={inputErrorReceiverTel}
      ></InputTelCheckout>
      <InputTextCheckout
        id="receiver_address"
        name="receiver_address"
        label="收件地址"
        placeholder="必填"
        value={defaultReceiverAddress}
        width="input-width-100pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
        addClassforLabel="" // 如果要在 label 添加 class
        addClassforInput="" // 如果要在 input 添加 class
        getValue={setReceiverAddressValue} // 獲取填寫的數值
        getName={setReceiverAddressName} // 獲取 name
        required={false} // true：必填，false：非必填
        inputError={inputErrorReceiverAddress}
      ></InputTextCheckout>
      <InputEmailCheckout
        id="receiver_email"
        name="receiver_email"
        label="電子信箱"
        placeholder="必填"
        value={defaultReceiverEmail}
        width="input-width-100pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
        addClassforLabel="" // 如果要在 label 添加 class
        addClassforInput="" // 如果要在 input 添加 class
        getValue={setReceiverEmailValue} // 獲取填寫的數值
        getName={setReceiverEmailName} // 獲取 name
        required={false} // true：必填，false：非必填
        inputError={inputErrorReceiverEmail}
      ></InputEmailCheckout>
      <AreaTextFlexCheckout
        id="order_note"
        label="訂單備註"
        name="order_note"
        placeholder="請輸入訂單備註"
        value={JSON.parse(localStorage.getItem('checkoutInfo')).order_note}
        width="input-width-100pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
        addClassforLabel="" // 如果要在 label 添加 class
        addClassforTextarea="" // 如果要在 textarea 添加 class
        getValue={setOrderNoteValue}
        getName={setOrderNoteName}
        required={false} // true：必填，false：非必填
      ></AreaTextFlexCheckout>
    </>
  )
}
