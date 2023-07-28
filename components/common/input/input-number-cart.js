import React, { useState, useEffect } from 'react'
import { BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs'

export default function InputNumber({
  id,
  name = '',
  max = 1,
  min = 1000,
  step = 1,
  value,
  placeholder,
  label = '',
  valueDefault,
  hideArrows = false,
  getValue,
  getName,
  width,
  addClassforLabel,
  addClassforInput,
}) {
  // 預設數字防呆
  if (value > max) {
    value = max
  } else if (value < min) {
    value = min
  }
  const [errorMessage, setErrorMessage] = useState('\u00A0') // 錯誤訊息用 // \u00A0 為會佔空間的空白，如果設空字串排版會爛掉
  const [addClassforInputState, setAddClassforInputState] =
    useState(addClassforInput)
  
  const [inputValue, setInputValue] = useState(value)

  

  const handleChange = (event) => {
    setAddClassforInputState(addClassforInput)
    setErrorMessage('\u00A0')
    setInputValue(event.target.value)
    getValue(event.target.value)
    getName(event.target.name)
  }
  const handleBlur = (event) => {
    if (event.target.value > max) {
      setAddClassforInputState((addClassforInput += ' input-error-border'))
      setErrorMessage(`最大購買上限為：${max}`)
      setInputValue(max)
      getValue(max)
    } else if (event.target.value < min) {
     
      setAddClassforInputState((addClassforInput += ' input-error-border'))
      setErrorMessage(`最少購買下限為：${min}`)
      setInputValue(min)
      getValue(min)
    } else {
      setAddClassforInputState(addClassforInput)
      setErrorMessage('\u00A0')
    }
  }

  return (
    <div className="select-section">
      <label htmlFor={id} className={`${addClassforLabel} section-label`}>
        {label}
      </label>
      <div className={`${width} ${hideArrows ? '' : 'custom-number'}`}>
        <input
          id={id}
          name={name}
          max={max}
          min={min}
          step={step}
          placeholder={placeholder}
          className={`w-100 input-text input-select input-number ${addClassforInputState} ${
            hideArrows ? 'hide-arrows' : ''
          }`}
          value={inputValue}
          type="number"
          onBlur={handleBlur}
          onChange={handleChange}
        ></input>
      </div>
      <div className="input-error">{errorMessage}</div>
    </div>
  )
}
