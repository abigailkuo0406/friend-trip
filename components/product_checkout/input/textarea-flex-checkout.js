import React, { useState, useEffect } from 'react'

export default function AreaTextFlexCheckout({
  id = '',
  name = '',
  label,
  value,
  width,
  addClassforLabel,
  addClassforTextarea,
  placeholder = '',
  getValue,
  getName,
  required = false,
}) {
  const [errorMessage, setErrorMessage] = useState('\u00A0') // 錯誤訊息用 // \u00A0 為會佔空間的空白，如果設空字串排版會爛掉
  const [addClassforInputState, setAddClassforInputState] =
    useState(addClassforTextarea)
  useEffect(() => {
    getValue(value)
    getName(name)
  }, []) // 在第一次渲染時，如有預設 value 將 value 和 name 先傳回去，避免預設值會讀不到
  const [inputValue, setInputValue] = useState(value)
  const handleBlur = () => {
    if (required && inputValue === '') {
      setAddClassforInputState((addClassforTextarea += ' input-error-border'))
      setErrorMessage('此項目為必填')
    } else {
      setAddClassforInputState(addClassforTextarea)
      setErrorMessage('\u00A0') // \u00A0 為會佔空間的空白，如果設空字串排版會爛掉
    }
  }
  const handleChange = (event) => {
    setInputValue(event.target.value) // 為了更新 input 的 value 值
    getValue(event.target.value)
    getName(event.target.name)
  }
  return (
    <div className="input-text-section area-text-flex-order">
      <div>
        <label htmlFor={id} className={`${addClassforLabel} section-label`}>
          {label}
        </label>
        <textarea
          id={id}
          name={name}
          className={`${width} ${addClassforInputState} area-text`}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
        ></textarea>
      </div>
      <div className="input-error">{errorMessage}</div>
    </div>
  )
}
