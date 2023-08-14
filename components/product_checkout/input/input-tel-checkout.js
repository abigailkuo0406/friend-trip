import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function InputTelCheckout({
  id = '',
  name = '',
  label,
  addClassforLabel,
  addClassforInput,
  placeholder = '',
  width,
  value,
  getValue,
  getName,
  required = false,
  inputError='',
}) {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState('\u00A0') // 錯誤訊息用 // \u00A0 為會佔空間的空白，如果設空字串排版會爛掉
  useEffect(() => {
    getValue(value)
    getName(name)
  }, []) // 在第一次渲染時，如有預設 value 將 value 和 name 先傳回去，避免預設值會讀不到
  const [inputValue, setInputValue] = useState(value)
  const [addClassforInputState, setAddClassforInputState] =
    useState(addClassforInput)
  const handleChange = (event) => { 
    setInputValue(event.target.value) // 為了更新 input 的 value 值
    getValue(event.target.value)
    getName(event.target.name)
    
  }
  useEffect(() => {
    if(value != ''){
      setInputValue(value)
      getValue(value)
      getName(name)
    }
  }, [value]) 

  // 如果為必填則 blur 後觸發，在 class 放入 .input-error-border 讓 <input> 視窗變紅色
  // 如果填完解除錯誤，則將原本的 className 替換回去
  const handleBlur = () => {
    // if (/[^\d]/.test(inputValue)) {
    //   setAddClassforInputState((addClassforInput += ' input-error-border'))
    //   setErrorMessage('不能輸入非數字之字元')
    // } else {
    //   setAddClassforInputState(addClassforInput)
    //   setErrorMessage('\u00A0') // \u00A0 為會佔空間的空白，如果設空字串排版會爛掉
    // }
  }
  useEffect(()=>{
    if (inputError != '') {
      setAddClassforInputState((addClassforInput += ' input-error-border'))
      setErrorMessage(inputError)
    } else {
      setAddClassforInputState(addClassforInput)
      setErrorMessage('\u00A0') // \u00A0 為會佔空間的空白，如果設空字串排版會爛掉
    }
  },[inputError])


  return (
    <div className={`input-text-section`}>
      <div>
        <label htmlFor={id} className={`${addClassforLabel} section-label`}>
          {label}
        </label>
        <input
          id={id}
          type="tel"
          name={name}
          className={`${width} ${addClassforInputState} input-text`}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          required={required}
        ></input>
      </div>
      <div className="input-error">{errorMessage}</div>
    </div>
  )
}
